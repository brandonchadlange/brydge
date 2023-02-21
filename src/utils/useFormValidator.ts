import states from "@/frontend/utility/nigerian-states";
import * as Yup from "yup";


const FILE_SIZE = 10000 * 1024;

const SUPPORTED_FORMATS = ["application/pdf"];

const FormFieldValidationMap: Record<FormField, FormFieldValidation> = {
  businessName: {
    rule: Yup.string().required("Business name is required"),
  },
  registrationNumber: {
    rule: Yup.string().required(
      "Registration number is required"
    ),
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
    rule: Yup.string().required("Address is required"),
  },
  state: {
    rule: Yup.string()
    .required("State is required")
    .oneOf(states, "Select state"),
  },
   utilityBill: {
    rule: Yup.mixed()
    .required("Please upload your utility bill")
    .test(
      "fileSize",
      "File is too large",
      (value) => value?.size <= FILE_SIZE
    )
    .test("fileType", "Unsupported file format", (value) =>
      SUPPORTED_FORMATS.includes(value?.type)
    ),
   },
   meansOfId: {
    rule: Yup.mixed()
    .required("Please upload your utility bill")
    .test(
      "fileSize",
      "File is too large",
      (value) => value?.size <= FILE_SIZE
    )
    .test("fileType", "Unsupported file format", (value) =>
      SUPPORTED_FORMATS.includes(value?.type)
    ),
   },
   bankStatement: {
    rule: Yup.mixed()
    .required("Please upload your utility bill")
    .test(
      "fileSize",
      "File is too large",
      (value) => value?.size <= FILE_SIZE
    )
    .test("fileType", "Unsupported file format", (value) =>
      SUPPORTED_FORMATS.includes(value?.type)
    ),
   }
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
