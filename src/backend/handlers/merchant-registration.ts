import MerchantRepository from "../repositories/merchant";

const handleMerchantRegistration = async (entityId: string, data: any) => {
  try {
    await MerchantRepository.createMerchant({
      entityId: entityId,
      registeredName: data.registeredName,
      registeredCompanyNumber: data.registeredCompanyNumber,
      bankVerificationNumber: data.bankVerificationNumber,
      operationalAddressId: data.operationalAddressId,
      utilityBillId: "clg17ayhu00021wo96nb95w3c",
    });
  } catch (err) {
    console.log(err);
  }
};

export default handleMerchantRegistration;
