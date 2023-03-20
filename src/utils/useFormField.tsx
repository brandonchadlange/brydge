import Input from "@/components/input";
import applyFormField from "@/components/input/apply-form-field";

const Email: FormFieldProperties = {
  component: Input.Email,
  name: "email",
  label: "",
  placeholder: "Email address",
};

const Password: FormFieldProperties = {
  component: Input.Password,
  name: "password",
  label: "",
  placeholder: "Password",
};

const RegisteredName: FormFieldProperties = {
  component: Input.Text,
  name: "registeredName",
  label: "Registered Name",
  placeholder: "Name of company",
};

const RegistrationNumber: FormFieldProperties = {
  component: Input.Text,
  name: "registeredCompanyNumber",
  label: "RC Number",
  placeholder: "Enter RC number",
};

const BankVerificationNumber: FormFieldProperties = {
  component: Input.Number,
  name: "bankVerificationNumber",
  label: "Bank Verification Number",
  placeholder: "Enter BVN",
};

const OperationalAddress: FormFieldProperties = {
  component: Input.TextArea,
  name: "operationalAddress",
  label: "Address",
  placeholder: "Enter operational address",
};

const FormFieldMap: Record<FormField, FormFieldProperties> = {
  email: Email,
  password: Password,
  registeredName: RegisteredName,
  registeredCompanyNumber: RegistrationNumber,
  bankVerificationNumber: BankVerificationNumber,
  operationalAddress: OperationalAddress,
};

const useFormField = (field: FormField) => {
  const { component, ...fieldDetail } = FormFieldMap[field];
  return applyFormField(component, fieldDetail);
};

export default useFormField;
