import {
  Balance,
  Beneficiary,
  VirtualAccount,
  WalletTransaction,
} from "@prisma/client";
import axios from "axios";

const queries = {
  async getEntityVerified() {
    const response = await axios.request<boolean>({
      method: "GET",
      url: "/api/user/entity/verify",
    });

    return response.data;
  },
  async getWalletBallances() {
    const response = await axios.request<
      (Balance & {
        virtualAccount: VirtualAccount;
      })[]
    >({
      method: "GET",
      url: "/api/wallet/balances",
    });

    return response.data;
  },
  async getWalletTransactions() {
    const response = await axios.request<WalletTransaction[]>({
      method: "GET",
      url: "/api/wallet/transactions",
    });

    return response.data;
  },
  async getBeneficiaries() {
    const response = await axios.request<Beneficiary[]>({
      method: "GET",
      url: "/api/beneficiary",
    });

    return response.data;
  },
  async getBeneficiary(id: string) {
    const response = await axios.request<any>({
      method: "GET",
      url: "/api/beneficiary/" + id,
    });

    return response.data;
  },
  async getBanksByCountryCode(countryCode: string) {
    const response = await axios.request<any[]>({
      method: "GET",
      url: "/api/bank/" + countryCode,
    });

    return response.data;
  },
};

export default queries;
