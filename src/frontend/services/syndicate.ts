import { CreateStructuredSyndicateSchema } from "@/common/schemas/syndicate/create-structured-syndicate";
import endpoints from "@/frontend/config/api-endpoints";
import fetchDataAs from "../utility/fetch-data-as";
import post from "../utility/post";

const getSyndicates = async () => {
  const endpoint = endpoints.syndicate.getSynidicates();
  const response = await fetchDataAs<any, any>(endpoint, (data) => data);
  return response.data;
};

const createStructuredSyndicate = async (
  data: CreateStructuredSyndicateSchema
) => {
  const endpoint = endpoints.syndicate.createStructuredSyndicate();
  const response = await post<CreateStructuredSyndicateSchema, any>(
    endpoint,
    data
  );
  return response.data;
};

const syndicateService = {
  getSyndicates,
  createStructuredSyndicate,
};

export default syndicateService;
