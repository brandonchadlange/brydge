import { DealApprovalStatus } from "@/common/enums/deal";
import prismaClient from "../prisma";

const getMerchantActiveDeal = (merchantId: string) => {
  return prismaClient.deal.findFirst({
    where: {
      merchantId: merchantId,
      approvalStatus: DealApprovalStatus.active,
    },
  });
};

const getMerchantPendingDeal = (merchantId: string) => {
  return prismaClient.deal.findFirst({
    where: {
      merchantId: merchantId,
      approvalStatus: DealApprovalStatus.pending,
    },
  });
};

const createDeal = () => {
  return prismaClient.deal.create({
    data: {
      name: "",
      description: "",
      merchantId: "",
      orderNumber: "",
      orderValueInCents: 0,
      orderValueCurrency: "",
      requestedAmount: 0,
      startDate: new Date(),
      endDate: new Date(),
      managementFee: 0,
      paymentTerms: 0,
      returnOnInvestment: 0,
      approvalStatus: DealApprovalStatus.pending,
    },
  });
};

const DealRepository = {
  getMerchantActiveDeal,
  getMerchantPendingDeal,
  createDeal,
};

export default DealRepository;
