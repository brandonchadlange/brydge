import prismaClient from "../prisma";

const handleMerchantRegistration = async (entityId: string, data: any) => {
  return prismaClient.merchant.create({
    data: {
      entityId,
      ...data,
    },
  });
};

export default handleMerchantRegistration;
