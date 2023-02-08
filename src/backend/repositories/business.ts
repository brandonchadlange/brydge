import prismaClient from "../prisma";
import { BusinessCreateDTO } from "../dto/business/business-create";

const getUserBusinesses = async (userId: string) => {
  const businesses = await prismaClient.businessUser.findMany({
    where: {
      userId: userId,
    },
    select: {
      business: true,
    },
  });

  return businesses.map((e) => e.business);
};

const createBusiness = async (data: BusinessCreateDTO) => {
  return prismaClient.business.create({
    data: {
      registeredName: data.registeredName,
      bankVerificationNumber: data.bankVerificationNumber,
      operationalAddress: data.operationalAddress,
      utilityBillUrl: data.utilityBillUrl,
      registrationNumber: data.registrationNumber,
      state: data.state,
    },
  });
};

const createBusinessUser = async (businessId: string, userId: string) => {
  return prismaClient.businessUser.create({
    data: {
      businessId: businessId,
      userId: userId,
    },
  });
};

const BusinessRepository = {
  getUserBusinesses,
  createBusiness,
  createBusinessUser,
};

export default BusinessRepository;
