import type { Deal } from "@prisma/client";

declare type CreateMerchantRequest = {
  registeredName: string;
  registeredCompanyNumber: string;
  bankVerificationNumber: number;
  operationalAddressId: string;
  utilityBillId: string;
};

declare type MerchantState = {
  deals: {
    active: Deal | null;
    pending: Deal | null;
  };
};
