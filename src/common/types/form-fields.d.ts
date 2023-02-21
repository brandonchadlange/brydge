declare type FormField =
  | "businessName"
  | "registrationNumber"
  | "bankVerificationNumber"
  | "operationalAddress"
  | "state"
  | "utilityBill"
  | "meansOfId"
  | "bankStatement";

declare type FormFieldValidation = {
  rule: any;
};

declare type FormFieldProperties = {
  component: ComponentType<any>;
  name: string;
  label: string;
  options?: Array<any>
};
