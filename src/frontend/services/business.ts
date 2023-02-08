import { CreateBusinessSchema } from "@/common/schemas/business/create-business";
import endpoints from "@/frontend/config/api-endpoints";
import post from "../utility/post";

const createBusiness = async (data: CreateBusinessSchema) => {
  const endpoint = endpoints.syndicate.createStructuredSyndicate();
  const response = await post<CreateBusinessSchema, any>(endpoint, data);
  return response.data;
};

const businessService = {
  createBusiness,
};

export default businessService;
