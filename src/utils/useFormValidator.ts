import * as Yup from "yup";

const FormFieldValidationMap: Record<FormField, FormFieldValidation> = {
  registeredName: {
    rule: Yup.string().required("Business name is required"),
  },
  registeredCompanyNumber: {
    rule: Yup.string().required("Registration number is required"),
  },
  bankVerificationNumber: {
    rule: Yup.string()
      .required("BVN is required")
      .matches(/^[0-9]+$/, "Must be only digits")
      .test(
        "bvn",
        "Must be exactly 11 characters",
        (val) => val?.length === 11
      ),
  },
  operationalAddress: {
    rule: "",
  },
  email: {
    rule: Yup.string().required("Email is required").email(),
  },
  password: {
    rule: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#.\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
  },
  firstName: {
    rule: Yup.string()
      .required("First name is required")
      .min(2, "Must be at least 2 characters"),
  },
  lastName: {
    rule: Yup.string()
      .required("Last name is required")
      .min(2, "Must be at least 2 characters"),
  },
  street: {
    rule: Yup.string().required("Street is required"),
  },
  houseNumber: {
    rule: Yup.string().required("House number is required"),
  },
  dateOfBirth: {
    rule: Yup.date().required("Date of birth is required"),
  },
  zipCode: {
    rule: Yup.string(),
  },
  city: {
    rule: Yup.string().required("City is required"),
  },
  state: {
    rule: Yup.string(),
  },
  companyRegistration: {
    rule: Yup.string().required("Utility bill is required"),
  },
};

const useFormValidation = (fields: FormField[]) => {
  const rules: any = {};

  fields.forEach((field) => {
    const validationRule = FormFieldValidationMap[field].rule;
    rules[field] = validationRule;
  });

  return Yup.object().shape({
    ...rules,
  });
};

export default useFormValidation;
