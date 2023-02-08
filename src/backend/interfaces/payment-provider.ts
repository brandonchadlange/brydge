export interface IPaymentProvider {
  createAccount: () => void;
  fundAccount: () => void;
}
