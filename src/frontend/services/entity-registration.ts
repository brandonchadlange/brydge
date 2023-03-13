import axios from "axios";
import endpoints from "../config/api-endpoints";

const registerEntity = async (entityType: EntityType, data: any) => {
  const url = endpoints.registration(entityType);
  const response = await axios.post(url, data);
  return response;
};

const EntityRegistrationService = {
  registerEntity,
};

export default EntityRegistrationService;
