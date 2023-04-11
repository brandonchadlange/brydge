declare type FormField =
  | "email"
  | "password"
  | "firstName"
  | "lastName"
  | "dateOfBirth"
  | "registeredName"
  | "registeredCompanyNumber"
  | "bankVerificationNumber"
  | "operationalAddress"
  | "street"
  | "houseNumber"
  | "zipCode"
  | "city"
  | "state"
  | "companyRegistration";

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
