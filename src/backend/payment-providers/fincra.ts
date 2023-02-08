import { Business, Deal } from "@prisma/client";
import axios from "axios";
import { IPaymentProvider } from "../interfaces/payment-provider";
import BusinessService from "../services/business";

const FINCRA_API_KEY = process.env.FINCRA_API_KEY;
const FINCRA_BUSINESS_ID = process.env.FINCRA_BUSINESS_ID;
const FINCRA_API_ENDPOINT = "https://sandboxapi.fincra.com";

class FincraPaymentProvider implements IPaymentProvider {
  async onBusinessAccountApproved(business: Business) {
    const subAccount = await createSubAccount({
      name: "John Doe",
      country: "DE",
      email: "test5@mail.com",
      mobile: "01101101104",
    });

    BusinessService.setSubAccountId(business.id, subAccount.data.data._id);
  }

  async onDealCreate(deal: Deal) {}

  fundVirtualAccount() {}
}

export default FincraPaymentProvider;

type CreateSubAccountParams = {
  name: string;
  email: string;
  mobile: string;
  country: string;
};

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
