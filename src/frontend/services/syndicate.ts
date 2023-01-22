import endpoints from "@/frontend/config/api-endpoints";
import fetchDataAs from "../utility/fetch-data-as";

const getSyndicates = async () => {
  const endpoint = endpoints.syndicate.getSynidicates();
  const response = await fetchDataAs<any, any>(endpoint, (data) => data);
  return response.data;
};

const createStructuredSyndicate = async () => {
  const endpoint = endpoints.syndicate.createStructuredSyndicate();
};

const syndicateService = {
  getSyndicates,
};

export default syndicateService;
