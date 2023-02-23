import prismaClient from "../prisma";

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
  createMerchant,
};

export default MerchantRepository;
