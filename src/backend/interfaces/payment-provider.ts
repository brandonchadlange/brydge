import { Business, Deal } from "@prisma/client";

export interface IPaymentProvider {
  onBusinessAccountApproved: (business: Business) => void;
  onDealCreate: (deal: Deal) => void;
  fundVirtualAccount: () => void;
}
