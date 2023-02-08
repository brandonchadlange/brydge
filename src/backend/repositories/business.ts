import prismaClient from "../prisma";

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

const createBusiness = async () => {
  return prismaClient.business.create({
    data: {},
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
