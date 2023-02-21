import MerchantRepository from "../repositories/merchant";

const handleMerchantRegistration = (entityId: string, data: any) => {
  MerchantRepository.createMerchant();
};

export default handleMerchantRegistration;
