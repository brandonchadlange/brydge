import DealRepository from "../repositories/deal";

const getMerchantDeal = async () => {
  const activeDeal = await DealRepository.getMerchantActiveDeal("");

  if (activeDeal !== null) {
    return activeDeal;
  }

  const pendingDeal = await DealRepository.getMerchantPendingDeal("");

  if (pendingDeal !== null) {
    return pendingDeal;
  }

  return null;
};

const DealService = {
  getMerchantDeal,
};

export default DealService;
