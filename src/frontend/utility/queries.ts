import { Balance, WalletTransaction } from "@prisma/client";
import axios from "axios";

const queries = {
  async getWalletBallances() {
    const response = await axios.request<Balance[]>({
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
};

export default queries;
