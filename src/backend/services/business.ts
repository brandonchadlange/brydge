import { BusinessCreateDTO } from "../dto/business/business-create";
import BusinessRepository from "../repositories/business";

const getUserBusinesses = async (userId: string) => {
  return BusinessRepository.getUserBusinesses(userId);
};

const createBusiness = async (data: BusinessCreateDTO, userId: string) => {
  const newBusiness = await BusinessRepository.createBusiness(data);

  await BusinessRepository.createBusinessUser(newBusiness.id, userId);

  return newBusiness;
};

const BusinessService = { getUserBusinesses, createBusiness };

export default BusinessService;
