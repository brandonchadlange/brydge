import prismaClient from '../prisma';

const getUserBusinesses = async (userId: string) => {
  const businesses = await prismaClient.businessUser.findMany({
    where: {
      userId: userId,
    },
    select: {
      business: true,
    },
  });

  return businesses.map(e => e.business);
};

const BusinessRepository = {
  getUserBusinesses,
};

export default BusinessRepository;
