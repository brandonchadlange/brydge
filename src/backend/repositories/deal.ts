import { DealCreateDTO } from "../dto/deal/deal-create";
import prismaClient from "../prisma";

const createDeal = (data: DealCreateDTO) => {
  return prismaClient.deal.create({
    data: {
      id: "",
      businessId: data.businessId,
      name: data.name,
      fundAmount: data.fundAmount,
      expectedReturn: data.expectedReturn,
      expectedTenure: data.expectedTenure,
    },
  });
};

const DealRepository = {
  createDeal,
};

export default DealRepository;
