import prismaClient from "../prisma";

const createPayout = () => {
  return prismaClient.walletTransaction.create({
    data: {
      date: new Date(),
      transactionType: 1,
      description: "",
      initialValueInCents: 0,
      newValueInCents: 0,
      reference: "",
      status: 0,
      value: 0,
      balanceId: "",
    },
  });
};

const WalletService = {
  createPayout,
};

export default WalletService;
