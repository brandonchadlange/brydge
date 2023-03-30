import axios from "axios";
import prismaClient from "../prisma";

const BUSINESS_ID = process.env.FINCRA_BUSINESS_ID;

const fincraHttpInstance = axios.create({
  baseURL: "https://sandboxapi.fincra.com",
  headers: {
    "api-key": process.env.FINCRA_API_KEY,
  },
});

type ServiceResponse<DATA = any, STATE = any> = {
  data: DATA;
  state: STATE;
};

type Bank = {
  id: number;
  code: string;
  name: string;
  swiftCode: string;
  bic: string;
  branches: null;
};

enum FincraVARState {
  SUCCESS,
  ERROR,
}

export enum BeneficiaryState {
  SUCCESS,
  ERROR,
}

type FincraVAR = ServiceResponse<any, FincraVARState>;
export type FincraBeneficiary = ServiceResponse<any, BeneficiaryState>;

const tryCreateVirtualAccount = async (): Promise<FincraVAR> => {
  try {
    const response = await fincraHttpInstance.request({
      method: "POST",
      url: "/profile/virtual-accounts/requests/",
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

const getBeneficiary = async (
  beneficiaryId: string
): Promise<FincraBeneficiary> => {
  try {
    const response = await fincraHttpInstance.request({
      method: "GET",
      url: `/profile/beneficiaries/business/${BUSINESS_ID}/${beneficiaryId}`,
    });

    return {
      state: BeneficiaryState.SUCCESS,
      data: response.data,
    };
  } catch (err) {
    return {
      state: BeneficiaryState.ERROR,
      data: null,
    };
  }
};

const createUnitedStatesBeneficiary = async (
  data: UnitedStatesCorporateDetail
): Promise<FincraBeneficiary> => {
  return {
    state: BeneficiaryState.ERROR,
    data: null,
  };
};

const createKenyaCorporateBeneficiary = async (
  data: KenyaCorporateDetail
): Promise<FincraBeneficiary> => {
  try {
    const response = await fincraHttpInstance.request({
      method: "POST",
      url: "/profile/beneficiaries/business/" + process.env.FINCRA_BUSINESS_ID,
      data: {
        accountHolderName: data.accountHolderName,
        email: data.email,
        type: "corporate",
        currency: "KES",
        destinationAddress: data.accountNumber,
        paymentDestination: "bank_account",
        bank: {
          name: data.bankName,
          code: data.bankCode,
          sortCode: data.sortCode,
          swiftCode: data.swiftCode,
          address: {
            country: "KE",
          },
        },
        address: {
          country: "KE",
        },
      },
    });

    return {
      state: BeneficiaryState.SUCCESS,
      data: response.data,
    };
  } catch (err: any) {
    console.log(err.response);

    return {
      state: BeneficiaryState.ERROR,
      data: null,
    };
  }
};

const createKenyaIndividualBeneficiary = async (
  data: KenyaIndividualDetail
): Promise<FincraBeneficiary> => {
  try {
    const response = await fincraHttpInstance.request({
      method: "POST",
      url: "/profile/beneficiaries/business/" + BUSINESS_ID,
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        accountHolderName: data.accountHolderName,
        email: data.email,
        type: "individual",
        currency: "KES",
        destinationAddress: data.accountNumber,
        paymentDestination: "bank_account",
        bank: {
          name: data.bankName,
          code: data.bankCode,
          sortCode: data.sortCode,
          swiftCode: data.swiftCode,
          address: {
            country: "KE",
          },
        },
        address: {
          country: "KE",
        },
      },
    });

    return {
      state: BeneficiaryState.SUCCESS,
      data: response.data,
    };
  } catch (err) {
    return {
      state: BeneficiaryState.ERROR,
      data: null,
    };
  }
};

const getBanksByCountryCode = async (countryCode: string) => {
  try {
    const response = await fincraHttpInstance.request<{ data: Bank[] }>({
      method: "GET",
      url: "/core/banks?country=" + countryCode,
    });

    return response.data.data;
  } catch (err: any) {
    // console.log(err.response);
    return [];
  }
};

const generateConversionQuote = async (data: any) => {
  const request: any = {
    action: "receive",
    transactionType: "disbursement",
    feeBearer: "business",
    beneficiaryType: "individual",
    sourceCurrency: "NGN",
    destinationCurrency: data.destinationCurrency,
    amount: data.amount * 100,
    business: BUSINESS_ID,
    paymentDestination: "bank_account",
    paymentScheme: "swift",
  };

  if (data.destinationCurrency === "KES") {
    delete request.paymentScheme;
  }

  try {
    const response = await fincraHttpInstance.request({
      method: "POST",
      url: "/quotes/generate",
      data: request,
    });

    return response.data;
  } catch (err: any) {
    console.log(err.response);
    return null;
  }
};

const FincraService = {
  getBeneficiary,
  createNairaVirtualAccount,
  recievePayment,
  getBanksByCountryCode,
  createKenyaIndividualBeneficiary,
  createKenyaCorporateBeneficiary,
  createUnitedStatesBeneficiary,
  generateConversionQuote,
};

export default FincraService;
