declare type FormField =
  | "email"
  | "password"
  | "firstName"
  | "lastName"
  | "registeredName"
  | "registeredCompanyNumber"
  | "bankVerificationNumber"
  | "operationalAddress"
  | "street"
  | "houseNumber"
  | "zipCode"
  | "city"
  | "state";

declare type FormFieldValidation = {
  rule: any;
};

declare type FormFieldProperties = {
  component: ComponentType<any>;
  name: string;
  label: string;
  placeholder?: string;
  options?: Array<any>;
};
