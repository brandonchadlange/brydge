import { DealCreateDTO } from "../dto/deal/deal-create";
import DealRepository, { DealAccountInformation } from "../repositories/deal";

const createDeal = async (data: DealCreateDTO) => {
  return DealRepository.createDeal(data);
};

const getDealByAccountId = async (accountId: string) => {
  return DealRepository.getDealByAccountId(accountId);
};

const setDealAccountId = async (dealId: string, accountId: string) => {
  return DealRepository.setDealAccountId(dealId, accountId);
};

const setDealAccountInformation = async (
  dealId: string,
  data: DealAccountInformation
) => {
  return await DealRepository.setDealAccountInformation(dealId, data);
};

const DealService = {
  createDeal,
  getDealByAccountId,
  setDealAccountId,
  setDealAccountInformation,
};

export default DealService;
