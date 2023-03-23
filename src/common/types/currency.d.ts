// "sourceCurrency": "NGN",
// "destinationCurrency": "USD",
// "sourceAmount": 0.20625000000000002,
// "destinationAmount": 100,
// "action": "receive",
// "transactionType": "disbursement",
// "fee": 1050,
// "initialAmount": 100,
// "quotedAmount": 0.20625000000000002,
// "rate": 484.8484848484848,
// "amountToCharge": 2.371875,
// "amountToReceive": 100,
// "reference": "96a235a1-e808-4aa2-953a-3590caba0495",
// "expireAt": "2023-03-22T16:54:17.057Z"

declare type CurrencyQuote = {
  sourceCurrency: string;
  destinationCurrency: string;
  sourceAmount: number;
  destinationAmount: number;
  action: string;
  transactionType: string;
  fee: number;
  initialAmount: number;
  quotedAmount: number;
  rate: number;
  amountToCharge: number;
  amountToReceive: number;
  reference: string;
  expireAt: Date;
};
