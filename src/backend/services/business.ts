import { BusinessCreateDTO } from "../dto/business/business-create";
import BusinessRepository from "../repositories/business";

const getBusinessById = async (businessId: string) => {
  return BusinessRepository.getBusinessById(businessId);
};

const getUserBusinesses = async (userId: string) => {
  return BusinessRepository.getUserBusinesses(userId);
};

const createBusiness = async (data: BusinessCreateDTO, userId: string) => {
  const newBusiness = await BusinessRepository.createBusiness(data);

  await BusinessRepository.createBusinessUser(newBusiness.id, userId);

  return newBusiness;
};

const approveBusiness = async (businessId: string) => {
  return BusinessRepository.approveBusiness(businessId);
};

const setSubAccountId = async (businessId: string, subAccountId: string) => {
  return BusinessRepository.setSubAccountId(businessId, subAccountId);
};

const BusinessService = {
  getBusinessById,
  getUserBusinesses,
  createBusiness,
  approveBusiness,
  setSubAccountId,
};

export default BusinessService;
