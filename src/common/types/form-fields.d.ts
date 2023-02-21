declare type FormField =
  | "businessName"
  | "registrationNumber"
  | "bankVerificationNumber"
  | "operationalAddress";

declare type FormFieldValidation = {
  rule: any;
};

declare type FormFieldProperties = {
  component: ComponentType<any>;
  name: string;
  label: string;
};
