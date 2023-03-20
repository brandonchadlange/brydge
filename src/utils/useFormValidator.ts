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
        "Must be exactly 10 characters",
        (val) => val?.length === 10
      ),
  },
  operationalAddress: {
    rule: "",
  },
  email: {
    rule: "",
  },
  password: {
    rule: "",
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
