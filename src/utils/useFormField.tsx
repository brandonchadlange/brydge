import Input from "@/components/input";
import applyFormField from "@/components/input/apply-form-field";

const FirstName: FormFieldProperties = {
  name: "firstName",
  component: Input.Text,
  label: "",
  placeholder: "First Name",
};

const LastName: FormFieldProperties = {
  name: "lastName",
  component: Input.Text,
  label: "",
  placeholder: "Last Name",
};

const DateOfBirth: FormFieldProperties = {
  name: "dateOfBirth",
  component: Input.Date,
  label: "Date of Birth",
  placeholder: "",
};

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
  placeholder: "RC number",
};

const Street: FormFieldProperties = {
  component: Input.Text,
  name: "street",
  label: "Street",
  placeholder: "Street",
};

const HouseNumber: FormFieldProperties = {
  component: Input.Text,
  name: "houseNumber",
  label: "House number",
  placeholder: "House number",
};

const City: FormFieldProperties = {
  component: Input.Text,
  name: "city",
  label: "City",
  placeholder: "City",
};
 const CompanyRegistration: FormFieldProperties = {
  component: Input.File,
  name: "companyRegistration",
  label: "Company Registration",
 };

const ZipCode: FormFieldProperties = {
  component: Input.Text,
  name: "zipCode",
  label: "Zipcode",
  placeholder: "Zipcode",
};

const State: FormFieldProperties = {
  component: Input.Text ,
  name: "state",
  label: "State",
  placeholder: "State",
};

const BankVerificationNumber: FormFieldProperties = {
  component: Input.Number,
  name: "bankVerificationNumber",
  label: "Bank Verification Number",
  placeholder: "BVN",
};

const OperationalAddress: FormFieldProperties = {
  component: Input.TextArea,
  name: "operationalAddress",
  label: "Address",
  placeholder: "",
};

const FormFieldMap: Record<FormField, FormFieldProperties> = {
  email: Email,
  password: Password,
  registeredName: RegisteredName,
  registeredCompanyNumber: RegistrationNumber,
  bankVerificationNumber: BankVerificationNumber,
  operationalAddress: OperationalAddress,
  companyRegistration: CompanyRegistration,
  firstName: FirstName,
  lastName: LastName,
  dateOfBirth: DateOfBirth,
  street: Street,
  houseNumber: HouseNumber,
  city: City,
  zipCode: ZipCode,
  state: State,
};

const FormField = (field: FormField) => {
  const { component, ...fieldDetail } = FormFieldMap[field];
  return applyFormField(component, fieldDetail);
};

export default FormField;
