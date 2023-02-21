import Input from "@/components/input";
import applyFormField from "@/components/input/apply-form-field";

const BusinessName: FormFieldProperties = {
  component: Input.Text,
  name: "businessName",
  label: "Business Name",
};

const RegistrationNumber: FormFieldProperties = {
  component: Input.Text,
  name: "registrationNumber",
  label: "Registration Number",
};

const BankVerificationNumber: FormFieldProperties = {
  component: Input.Text,
  name: "bankVerificationNumber",
  label: "BVN",
};

const OperationalAddress: FormFieldProperties = {
  component: Input.TextArea,
  name: "operationalAddress",
  label: "Address",
};

const FormFieldMap: Record<FormField, FormFieldProperties> = {
  businessName: BusinessName,
  registrationNumber: RegistrationNumber,
  bankVerificationNumber: BankVerificationNumber,
  operationalAddress: OperationalAddress,
};

const useFormField = (field: FormField) => {
  const { component, name, label } = FormFieldMap[field];
  return applyFormField(component, name, label);
};

export default useFormField;
