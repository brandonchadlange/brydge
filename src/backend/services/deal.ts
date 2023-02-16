import { DealCreateDTO } from "../dto/deal/deal-create";
import DealRepository, { DealAccountInformation } from "../repositories/deal";

const getDealById = async (dealId: string) => {
  return DealRepository.getDealById(dealId);
};

const getDealByAccountId = async (accountId: string) => {
  return DealRepository.getDealByAccountId(accountId);
};

const createDeal = async (data: DealCreateDTO) => {
  return DealRepository.createDeal(data);
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
  getDealById,
  getDealByAccountId,
  createDeal,
  setDealAccountId,
  setDealAccountInformation,
};

export default DealService;
