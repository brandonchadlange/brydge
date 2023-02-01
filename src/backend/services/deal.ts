import { DealCreateDTO } from "../dto/deal/deal-create";
import DealRepository from "../repositories/deal";

const createDeal = async (data: DealCreateDTO) => {
  return DealRepository.createDeal(data);
};

const DealService = { createDeal };

export default DealService;
