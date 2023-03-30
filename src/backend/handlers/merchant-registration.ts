import MerchantRepository from "../repositories/merchant";

const handleMerchantRegistration = async (entityId: string, data: any) => {
  console.log(data, entityId);

  try {
    await MerchantRepository.createMerchant({
      entityId: entityId,
      registeredName: data.registeredName,
      registeredCompanyNumber: data.registeredCompanyNumber,
      bankVerificationNumber: data.bankVerificationNumber,
      operationalAddressId: "clf2wsw7500051whe298id8ce",
      utilityBillId: "clf2wsfiy00031whex8liu1k7",
    });
  } catch (err) {
    console.log(err);
  }
};

export default handleMerchantRegistration;
