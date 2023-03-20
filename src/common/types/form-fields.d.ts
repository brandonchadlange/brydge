declare type FormField =
  | "email"
  | "password"
  | "registeredName"
  | "registeredCompanyNumber"
  | "bankVerificationNumber"
  | "operationalAddress";

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
