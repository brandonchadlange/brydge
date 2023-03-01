import prismaClient from "../prisma";

const getMerchantByEntityId = (entityId: string) => {
  return prismaClient.merchant.findFirst({
    where: {
      entityId: entityId,
    },
  });
};

const createMerchant = (data: CreateMerchantDetail) => {
  return prismaClient.merchant.create({
    data: {
      entityId: data.entityId,
      registeredName: data.registeredName,
      registeredCompanyNumber: data.registeredCompanyNumber,
      bankVerificationNumber: data.bankVerificationNumber,
      operationalAddressId: data.operationalAddressId,
      utilityBillId: data.utilityBillId,
    },
  });
};

const MerchantRepository = {
  getMerchantByEntityId,
  createMerchant,
};

export default MerchantRepository;
