import * as Yup from "yup";

const FormFieldValidationMap: Record<FormField, FormFieldValidation> = {
  businessName: {
    rule: Yup.string().required("Business name is required"),
  },
  bankVerificationNumber: {
    rule: "",
  },
  operationalAddress: {
    rule: "",
  },
  registrationNumber: {
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
