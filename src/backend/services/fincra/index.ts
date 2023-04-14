import axios from "axios";
import prismaClient from "@/backend/prisma";
import handleFincraWebhookEvent from "./webhook";
import FincraApi from "./api";
import { User } from "@prisma/client";

const BUSINESS_ID = process.env.FINCRA_BUSINESS_ID;

const fincraHttpInstance = axios.create({
  baseURL: "https://sandboxapi.fincra.com",
  headers: {
    "api-key": process.env.FINCRA_API_KEY,
  },
});

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

const createNairaVirtualAccount = async (
  user: User,
  bvn: string,
  accountType: string
) => {
  const virtualAccount = await FincraApi.virtualAccount.ngn.create(
    user,
    bvn,
    accountType
  );

  console.log(virtualAccount);

  if (virtualAccount.state === "ERROR") {
    return;
  }

  const response = virtualAccount.data;

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

const getBeneficiary = async (beneficiaryId: string) =>
  FincraApi.beneficiary.get(beneficiaryId);

const createUnitedStatesBeneficiary = async (
  data: UnitedStatesCorporateDetail
) => FincraApi.beneficiary.createUsBeneficaiary(data);

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

const getBanksByCountryCode = (countryCode: string) =>
  FincraApi.banks.getByCountryCode(countryCode);

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

  return FincraApi.conversion.generateQuote(data);
};

const createNgnToUsdPayout = async (data: any) => {};

const FincraService = {
  getBeneficiary,
  createNairaVirtualAccount,
  getBanksByCountryCode,
  createKenyaIndividualBeneficiary,
  createKenyaCorporateBeneficiary,
  createUnitedStatesBeneficiary,
  generateConversionQuote,
  handleFincraWebhookEvent,
};

export default FincraService;
