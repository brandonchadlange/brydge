import axios from "axios";

type EmailRegistrationData = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

const mutations = {
  async createConversionQuote(destinationCurrency: string, amount: string) {
    const response = await axios.post<CurrencyQuote>("/api/currency/convert", {
      destinationCurrency,
      amount,
    });

    return response.data;
  },
  async registerWithEmail(data: EmailRegistrationData) {
    const response = await axios.post("/api/register/", data);

    return response.data;
  },
};

export default mutations;
