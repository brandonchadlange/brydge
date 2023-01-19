import endpoints from "@/config/api-endpoints";
import fetchDataAs from "../utility/fetch-data-as";

export type Provider = {
  id: string;
  name: string;
  signinUrl: string;
  type: string;
};

type ProviderRecord = Record<any, Provider>;

const getProviders = async () => {
  const endpoint = endpoints.auth.getProviders();
  const response = await fetchDataAs<ProviderRecord, Provider[]>(
    endpoint,
    (data) => Object.values(data)
  );
  return response.data;
};

const authService = {
  getProviders,
};

export default authService;
