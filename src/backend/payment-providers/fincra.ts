import { Business, Deal } from "@prisma/client";
import axios from "axios";
import { IPaymentProvider } from "../interfaces/payment-provider";
import BusinessService from "../services/business";
import DealService from "../services/deal";

const FINCRA_API_KEY = process.env.FINCRA_API_KEY;
const FINCRA_BUSINESS_ID = process.env.FINCRA_BUSINESS_ID;
const FINCRA_API_ENDPOINT = "https://sandboxapi.fincra.com";

type CreateSubAccountParams = {
  name: string;
  email: string;
  mobile: string;
  country: string;
};

type FincraWebhookEventType =
  | "virtualaccount.approved"
  | "virtualaccount.declined";

type FincraWebhookEvent = {
  event: FincraWebhookEventType;
  data: any;
};

type FincraAccountApprovedEvent = {
  id: string;
  business: string;
  isSubAccount: boolean;
  currency: string;
  currencyType: string;
  status: string;
  accountType: string;
  accountInformation: {
    accountNumber: string;
    accountName: string;
    bankName: string;
  };
  accountOpeningFee: number;
  isPermanent: boolean;
  virtualAccountType: string;
  createdAt: Date;
  updatedAt: Date;
};

class FincraPaymentProvider implements IPaymentProvider {
  async onBusinessAccountApproved(business: Business) {
    const subAccount = await createSubAccount({
      name: "John Doe",
      country: "DE",
      email: "test6@mail.com",
      mobile: "01101101104",
    });

    BusinessService.setSubAccountId(business.id, subAccount.data.data._id);
  }

  async onDealCreate(deal: Deal) {
    const business = await BusinessService.getBusinessById(deal.businessId);
    const account = await createVirtualAccount(business!);
    await DealService.setDealAccountId(deal.id, account!.data!.data._id);
  }

  async handleWebhook(data: FincraWebhookEvent) {
    const handle = fincraWebhookHandlers[data.event];
    await handle(data.data);
  }
}

export default FincraPaymentProvider;

async function createSubAccount(request: CreateSubAccountParams) {
  const url = `${FINCRA_API_ENDPOINT}/profile/business/${FINCRA_BUSINESS_ID}/sub-accounts`;

  const { data, status } = await axios.post(url, request, {
    headers: {
      "api-key": FINCRA_API_KEY,
    },
  });

  return {
    data,
    status,
  };
}

async function createVirtualAccount(business: Business) {
  const url = `${FINCRA_API_ENDPOINT}/profile/virtual-accounts/business/${FINCRA_BUSINESS_ID}/sub-accounts/${business.subAccountId}/requests`;

  const request = {
    currency: "NGN",
    accountType: "corporate",
    channel: "wema",
    KYCInformation: {
      bvn: "12345678901",
      bvnName: business.registeredName,
      businessName: business.registeredName,
    },
  };

  try {
    const { data } = await axios.post(url, request, {
      headers: {
        "api-key": FINCRA_API_KEY,
      },
    });

    return {
      data,
    };
  } catch (err: any) {
    console.log(err.response);
  }
}

// Webhook handlers
async function onAccountApproved(data: FincraAccountApprovedEvent) {
  const deal = await DealService.getDealByAccountId(data.id);

  await DealService.setDealAccountInformation(deal!.id, {
    accountNumber: data.accountInformation.accountNumber,
    accountName: data.accountInformation.accountName,
    bankName: data.accountInformation.bankName,
  });
}

async function onAccountDeclined(data: any) {
  console.log("From account declined");
}

const fincraWebhookHandlers: Record<
  FincraWebhookEventType,
  (data: any) => void
> = {
  "virtualaccount.approved": onAccountApproved,
  "virtualaccount.declined": onAccountDeclined,
};
