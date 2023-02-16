import { DealCreateDTO } from "../dto/deal/deal-create";
import prismaClient from "../prisma";

export type DealAccountInformation = {
  accountNumber: string;
  accountName: string;
  bankName: string;
};

const getDealById = async (dealId: string) => {
  return prismaClient.deal.findFirst({
    where: {
      id: dealId,
    },
  });
};

const getDealByAccountId = async (accountId: string) => {
  return prismaClient.deal.findFirst({
    where: {
      accountId: accountId,
    },
  });
};

const createDeal = (data: DealCreateDTO) => {
  return prismaClient.deal.create({
    data: {
      businessId: data.businessId,
      name: data.name,
      fundAmount: data.fundAmount,
      expectedReturn: data.expectedReturn,
      expectedTenure: data.expectedTenure,
    },
  });
};

const setDealAccountId = async (dealId: string, accountId: string) => {
  return await prismaClient.deal.update({
    where: {
      id: dealId,
    },
    data: {
      accountId: accountId,
    },
  });
};

const setDealAccountInformation = async (
  dealId: string,
  data: DealAccountInformation
) => {
  return await prismaClient.deal.update({
    where: {
      id: dealId,
    },
    data: {
      accountNumber: data.accountNumber,
      accountName: data.accountName,
      bankName: data.bankName,
    },
  });
};

const DealRepository = {
  getDealById,
  getDealByAccountId,
  createDeal,
  setDealAccountId,
  setDealAccountInformation,
};

export default DealRepository;
