type BeneficiaryCountry = "US" | "KE";
type BeneficiaryType = "individual" | "corporate";

declare type Address = {
  country: string;
  state: string;
  zip: string;
  city: string;
  street: string;
};

declare type KenyaBeneficiaryDetail = {
  accountNumber: string;
  accountHolderName: string;
  swiftCode: string;
  sortCode: string;
  email: string;
  bankName: string;
  bankCode: string;
};

declare type KenyaCorporateDetail = KenyaBeneficiaryDetail;

declare type KenyaIndividualDetail = KenyaBeneficiaryDetail & {
  firstName: string;
  lastName: string;
};

declare type UnitedStatesCorporateDetail = {
  address: Address;
  bank: {
    id: string;
    address: Address;
  };
  accountNumber: string;
  accountHolderName: string;
  swiftCode: string;
  routingNumber: string;
  email: string;
};

declare type AddBeneficiaryRequest = {
  country: BeneficiaryCountry;
  type: BeneficiaryType;
  detail:
    | KenyaCorporateDetail
    | KenyaIndividualDetail
    | UnitedStatesCorporateDetail;
};
