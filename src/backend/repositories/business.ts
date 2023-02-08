import prismaClient from "../prisma";
import { BusinessCreateDTO } from "../dto/business/business-create";

const getBusinessById = async (businessId: string) => {
  return prismaClient.business.findFirst({
    where: {
      id: businessId,
    },
  });
};

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
      meansOfIdUrl: data.meansOfIdUrl,
      bankStatementUrl: data.bankStatementUrl,
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

const approveBusiness = async (businessId: string) => {
  await prismaClient.business.update({
    where: {
      id: businessId,
    },
    data: {
      approved: true,
    },
  });
};

const setSubAccountId = async (businessId: string, subAccountId: string) => {
  await prismaClient.business.update({
    where: {
      id: businessId,
    },
    data: {
      subAccountId: subAccountId,
    },
  });
};

const BusinessRepository = {
  getBusinessById,
  getUserBusinesses,
  createBusiness,
  createBusinessUser,
  approveBusiness,
  setSubAccountId,
};

export default BusinessRepository;
