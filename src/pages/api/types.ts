export interface Member {
  id: string;
  name: string;
  dealId: string;
  image: string;
  carryPercent: string;
  status: string;
};

export interface Deal {
  id: string;
  name: string;
  createdDate: number | Date;
  description: string;
  competed: number;
  amount: number;
  currency: string;
  goalAmount: number;
  members: Member[];
}
