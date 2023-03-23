import axios from "axios";

const mutations = {
  async createConversionQuote(destinationCurrency: string, amount: string) {
    const response = await axios.post<CurrencyQuote>("/api/currency/convert", {
      destinationCurrency,
      amount,
    });

    return response.data;
  },
};

export default mutations;
