import MerchantRepository from "../repositories/merchant";

const handleMerchantRegistration = async (
  entityId: string,
  data: CreateMerchantRequest
) => {
  await MerchantRepository.createMerchant({
    entityId: entityId,
    registeredName: data.registeredName,
    registeredCompanyNumber: data.registeredCompanyNumber,
    bankVerificationNumber: data.bankVerificationNumber,
    operationalAddressId: "cleepyq2s00021wyt30y5ohow",
    utilityBillId: "cleepy5it00001wytxhv2wa5z",
  });
};

export default handleMerchantRegistration;
