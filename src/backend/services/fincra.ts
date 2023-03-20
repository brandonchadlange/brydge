import axios from "axios";
import prismaClient from "../prisma";

type ServiceResponse<DATA = any, STATE = any> = {
  data: DATA;
  state: STATE;
};

enum FincraVARState {
  SUCCESS,
  ERROR,
}

type FincraVAR = ServiceResponse<any, FincraVARState>;

const tryCreateVirtualAccount = async (): Promise<FincraVAR> => {
  try {
    const response = await axios.request({
      method: "POST",
      url: "https://sandboxapi.fincra.com/profile/virtual-accounts/requests/",
      data: {
        currency: "NGN",
        channel: "wema",
        accountType: "individual",
        KYCInformation: {
          firstName: "Brandon",
          lastName: "Lange",
          bvn: "22161412900",
        },
      },
      headers: {
        "api-key": process.env.FINCRA_API_KEY,
      },
    });

    return {
      state: FincraVARState.SUCCESS,
      data: response.data,
    };
  } catch (err) {
    console.log(err);
    return {
      state: FincraVARState.ERROR,
      data: null,
    };
  }
};

const createNairaVirtualAccount = async () => {
  const fincraVa = await tryCreateVirtualAccount();

  if (fincraVa.state === FincraVARState.ERROR) {
    return;
  }

  const response = fincraVa.data;

  const account = response.data.accountInformation;

  return prismaClient.virtualAccount.create({
    data: {
      virtualAccountId: response.data._id,
      accountName: account.accountName,
      accountNumber: account.accountNumber,
      bankName: account.bankName,
      reference: account.reference,
    },
  });
};

const recievePayment = async (data: any) => {
  const balance = await prismaClient.balance.findFirst({
    where: {
      virtualAccountId: data.data.virtualAccount,
    },
  });

  console.log(balance);
  console.log(data);

  await prismaClient.walletTransaction.create({
    data: {
      date: data.data.createdAt,
      description: "Funds recieved",
      initialValueInCents: balance!.valueInCents,
      value: data.data.amountReceived * 100,
      newValueInCents: balance!.valueInCents + data.data.amountReceived * 100,
      reference: data.data.reference,
      status: 1,
      transactionType: 1,
      balanceId: balance!.id,
    },
  });

  await prismaClient.balance.update({
    where: {
      id: balance!.id,
    },
    data: {
      valueInCents: balance!.valueInCents + data.data.amountReceived * 100,
    },
  });
};

const createBeneficiary = async (data: any) => {};

const convert = async () => {};

const payout = async () => {};

const FincraService = {
  createNairaVirtualAccount,
  recievePayment,
};

export default FincraService;
