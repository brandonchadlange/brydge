import Button from "@/components/Button";
import Input from "@/components/input/";
import applyFormField from "@/components/input/apply-form-field";
import OverlayLoader, { useOverlayLoader } from "@/components/overlay-loader";
import useFormField from "@/utils/useFormField";
import useFormValidation from "@/utils/useFormValidator";
import { Form, Formik } from "formik";
import OnboardingLayout from "./_layout";

const BusinessNameField = useFormField("businessName");
const RegistrationNumberField = useFormField("registrationNumber");
const BVNField = useFormField("bankVerificationNumber");
const OperationalAddressField = useFormField("operationalAddress");
const StateField = applyFormField(Input.Select, "state", "State");

const merchantFormValidation = useFormValidation([
  "businessName",
  "bankVerificationNumber",
]);

const MerchantRegistration = () => {
  const overlayLoader = useOverlayLoader();

  const onFormSubmit = (data: any) => {
    console.log(data);

    overlayLoader.show();
  };

  return (
    <OnboardingLayout>
      <Formik
        initialValues={{}}
        onSubmit={onFormSubmit}
        // initialValues={getBusinessForm()}
        validationSchema={merchantFormValidation}
        // onSubmit={onSubmit}
      >
        {({ errors, setFieldValue, values, setFieldTouched }) => (
          <Form>
            <BusinessNameField />
            <RegistrationNumberField />
            <BVNField />
            <OperationalAddressField />
            <StateField />

            <Input.File name="utilityBill" id="utilityBill" />

            <Button type="submit" full>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
      <OverlayLoader controller={overlayLoader} />
    </OnboardingLayout>
  );
};

export default MerchantRegistration;
