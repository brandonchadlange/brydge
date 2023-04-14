type FincraPayoutEvent = "payout.successful" | "payout.failed";

type FincraPayoutEventPayload = {
  event: FincraPayoutEvent;
  data: {
    id: number;
    virtualAccount: string;
    amountCharged: number;
    amountReceived: number;
    recipient: {
      name: string;
      accountNumber: string;
      type: string;
      email: string;
    };
    fee: number;
    rate: number;
    paymentScheme: string;
    paymentDestination: string;
    sourceCurrency: string;
    destinationCurrency: string;
    status: string;
    createdAt: string;
    updatedAt: string;
    reference: string;
    reason: string;
    traceId: null;
    valuedAt: null;
  };
};

type FincraCollectionEvent = "collection.successful" | "collection.failed";

type FincraCollectionEventPayload = {
  event: FincraCollectionEvent;
  data: {
    business: string;
    virtualAccount: string;
    sourceCurrency: string;
    destinationCurrency: string;
    sourceAmount: number;
    destinationAmount: number;
    amountReceived: number;
    fee: number;
    customerName: string;
    settlementDestination: string;
    status: string;
    initiatedAt: Date;
    createdAt: Date;
    updatedAt: Date;
    reference: string;
  };
};

type FincraVirtualAccountEvent =
  | "virtualaccount.approved"
  | "virtualaccount.declined";

type FincraVirtualAccountEventPayload = {
  event: FincraVirtualAccountEvent;
  data: {};
};
