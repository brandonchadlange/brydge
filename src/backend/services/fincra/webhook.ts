import prismaClient from "@/backend/prisma";

export enum FincraWebhookState {
  Unhandled,
  Error,
  Success,
}

type FincraWebhookResponse = ServiceResponse<any, FincraWebhookState>;

const handlePayout = async (data: FincraPayoutEventPayload) => {
  if (data.event === "payout.failed") {
    // Possibly create a failed transaction here???
    return;
  }

  // const balance = await prismaClient.balance.findFirst({
  //   where: {
  //     virtualAccountId: data.data.virtualAccount,
  //   },
  // });

  // await prismaClient.walletTransaction.create({
  //   data: {
  //     date: data.data.createdAt,
  //     description: "Funds recieved",
  //     initialValueInCents: balance!.valueInCents,
  //     value: data.data.amountReceived * 100,
  //     newValueInCents: balance!.valueInCents + data.data.amountReceived * 100,
  //     reference: data.data.reference,
  //     status: 1,
  //     transactionType: 1,
  //     balanceId: balance!.id,
  //   },
  // });

  // await prismaClient.balance.update({
  //   where: {
  //     id: balance!.id,
  //   },
  //   data: {
  //     valueInCents: balance!.valueInCents + data.data.amountReceived * 100,
  //   },
  // });
};

const handleCollection = async (data: FincraCollectionEventPayload) => {
  if (data.event === "collection.failed") {
    // Possibly create a failed transaction here???
    return;
  }

  const balance = await prismaClient.balance.findFirst({
    where: {
      virtualAccountId: data.data.virtualAccount,
    },
  });

  await prismaClient.walletTransaction.create({
    data: {
      date: data.data.createdAt,
      description: "Funds recieved",
      initialValueInCents: balance!.valueInCents,
      value: data.data.amountReceived * 100,
      newValueInCents: balance!.valueInCents + data.data.amountReceived * 100,
      reference: data.data.reference,
      status: 1,
      transactionType: 1,
      balanceId: balance!.id,
    },
  });

  await prismaClient.balance.update({
    where: {
      id: balance!.id,
    },
    data: {
      valueInCents: balance!.valueInCents + data.data.amountReceived * 100,
    },
  });
};

const handleVirtualAccount = async (data: FincraVirtualAccountEventPayload) => {
  console.log("Virtual account issued!");
};

const handleFincraWebhookEvent = async (data: {
  event: string;
  data: any;
}): Promise<FincraWebhookResponse> => {
  if (data.event.includes("payout")) {
    await handlePayout(data as FincraPayoutEventPayload);
  }

  if (data.event.includes("collection")) {
    await handleCollection(data as FincraCollectionEventPayload);
  }

  if (data.event.includes("virtualaccount")) {
    await handleVirtualAccount(data as FincraVirtualAccountEventPayload);
  }

  return {
    state: FincraWebhookState.Unhandled,
    data: {},
  };
};

export default handleFincraWebhookEvent;
