import Input from "@/components/input";
import applyFormField from "@/components/input/apply-form-field";
import states from "@/frontend/utility/nigerian-states";

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

const State: FormFieldProperties = {
  component: Input.Select,
  name: "state",
  label: "State",
  options: states,
};
const UtilityBill: FormFieldProperties = {
  component: Input.File,
  name: "state",
  label: "State",
};
const MeansOfId: FormFieldProperties = {
  component: Input.File,
  name: "state",
  label: "State",
};
const BankStatement: FormFieldProperties = {
  component: Input.File,
  name: "state",
  label: "State",
};

const FormFieldMap: Record<FormField, FormFieldProperties> = {
  businessName: BusinessName,
  registrationNumber: RegistrationNumber,
  bankVerificationNumber: BankVerificationNumber,
  operationalAddress: OperationalAddress,
  state: State,
  utilityBill: UtilityBill,
  meansOfId: MeansOfId,
  bankStatement: BankStatement
};

const useFormField = (field: FormField) => {
  const { component, name, label, options } = FormFieldMap[field];
  return applyFormField(component, name, label, options);
};

export default useFormField;
