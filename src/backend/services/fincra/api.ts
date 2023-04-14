import { User } from "@prisma/client";
import axios from "axios";

const BUSINESS_ID = process.env.FINCRA_BUSINESS_ID;
const useLiveEnvironment = process.env.FINCRA_LIVE?.toLowerCase() === "true";

const baseUrl = useLiveEnvironment
  ? "https://api.fincra.com"
  : "https://sandboxapi.fincra.com";

const fincraHttpInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    "api-key": process.env.FINCRA_API_KEY,
  },
});

type Params<DATA = any> = {
  method: "GET" | "POST" | "PUT" | "DELTE";
  url: string;
  data?: DATA;
};

type ApiState = "SUCCESS" | "ERROR";

type FincraApiResponse<T = any> = ServiceResponse<T, ApiState>;

const makeFincraApiRequest = async <DATA = any, RESPONSE = any>(
  params: Params<DATA>
): Promise<FincraApiResponse<RESPONSE>> => {
  try {
    const response = await fincraHttpInstance.request<RESPONSE>({
      url: params.url,
      method: params.method,
      data: params.data,
    });

    return {
      state: "SUCCESS",
      data: response.data,
    };
  } catch (err: any) {
    console.log(err.response.data);

    return {
      state: "ERROR",
      data: err,
    };
  }
};

// Banks
const getBanksByCountryCode = (countryCode: string) =>
  makeFincraApiRequest({
    method: "GET",
    url: "/core/banks?country=" + countryCode,
  });

// Beneficiaries
const getBeneficiary = (beneficiaryId: string) =>
  makeFincraApiRequest({
    method: "GET",
    url: `/profile/beneficiaries/business/${BUSINESS_ID}/${beneficiaryId}`,
  });

const createUsBeneficaiary = (data: any) =>
  makeFincraApiRequest({
    method: "POST",
    url: "/profile/beneficiaries/business/" + process.env.FINCRA_BUSINESS_ID,
    data: {
      accountHolderName: data.accountHolderName,
      email: data.email,
      type: "corporate",
      currency: "USD",
      destinationAddress: data.accountNumber,
      paymentDestination: "bank_account",
      bank: {
        name: data.bankName,
        code: data.bankCode,
        sortCode: data.sortCode,
        swiftCode: data.swiftCode,
        address: {
          country: "US",
          state: data.bankState,
          zip: data.bankZip,
          city: data.bankCity,
          street: data.bankStreet,
        },
      },
      address: {
        country: "US",
      },
    },
  });

// Conversions
const generateConversionQuote = (data: any) =>
  makeFincraApiRequest({
    method: "POST",
    url: "/quotes/generate",
    data: data,
  });

// Payout
const createNgnToUsdPayout = (data: any) =>
  makeFincraApiRequest({
    method: "POST",
    url: "/disbursements/payouts",
    data: {
      sourceCurrency: "NGN",
      destinationCurrency: "USD",
      amount: "0.41250000000000003",
      description: "Payment",
      customerReference: "BRYDGE-00444",
      beneficiary: {
        firstName: "John",
        lastName: "Doe",
        email: "test@fincra.com",
        type: "corporate",
        accountHolderName: "john doe",
        accountNumber: "0726219090",
        country: "GB",
        bankCode: "044",
        sortCode: "9090",
        registrationNumber: "A909",
        address: {
          country: "US",
          zip: "1234",
          street: "Test stre",
          state: "Florida",
          city: "Tampa",
        },
      },
      files: "",
      paymentDestination: "bank_account",
      quoteReference: "42712d5e-98ae-4669-ab85-f47a60a04f9b",
      business: "63e10fc85cf4643eb507931d",
      customerName: "Test",
      paymentScheme: "swift",
    },
  });

// Virtual accounts
const createFincraNgnVirtualAccount = (
  user: User,
  bvn: string,
  accountType: string
) =>
  makeFincraApiRequest({
    method: "POST",
    url: "/profile/virtual-accounts/requests/",
    data: {
      currency: "NGN",
      channel: "vfd",
      accountType: "individual",
      KYCInformation: {
        firstName: user.firstName,
        lastName: user.lastName,
        bvn: bvn,
      },
      dateOfBirth: "11-15-1996",
    },
  });

const FincraApi = {
  banks: {
    getByCountryCode: getBanksByCountryCode,
  },
  beneficiary: {
    get: getBeneficiary,
    createUsBeneficaiary,
  },
  conversion: {
    generateQuote: generateConversionQuote,
  },
  payout: {
    createNgnToUsdPayout,
  },
  virtualAccount: {
    ngn: {
      create: createFincraNgnVirtualAccount,
    },
  },
};

export default FincraApi;
