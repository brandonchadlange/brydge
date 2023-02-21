import prismaClient from "../prisma";

const createMerchant = () => {
  return prismaClient.merchant.create({
    data: {
      entityId: "",
      registeredName: "",
      registeredCompanyNumber: "",
      bankVerificationNumber: 0,
      operationalAddressId: "",
      utilityBillId: "",
    },
  });
};

const MerchantRepository = {
  createMerchant,
};

export default MerchantRepository;
