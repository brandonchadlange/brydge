import pages from "@/common/pages";
import Button from "@/components/Button";
import Input from "@/components/input";
import OverlayLoader, { useOverlayLoader } from "@/components/overlay-loader";
import EntityRegistrationService from "@/frontend/services/entity-registration";
import showToast from "@/frontend/utility/show-toast";
import FormField from "@/utils/useFormField";
import useFormValidation from "@/utils/useFormValidator";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";

type EntityRegistrationFormProps = {
  entityType: EntityType;
};

type FormFieldsProps = {
  setFieldValue: (field: string, value: any) => void;
};

const RegisteredNameField = FormField("registeredName");
const RegistrationNumberField = FormField("registeredCompanyNumber");
const BVNField = FormField("bankVerificationNumber");
const OperationalAddressField = FormField("operationalAddress");

const MerchantFormFields = (props: FormFieldsProps) => {
  return (
    <>
      <RegisteredNameField />
      <RegistrationNumberField />
      <BVNField />
      <OperationalAddressField />

      <Input.File name="utilityBill" id="utilityBill" />

      <Button type="submit" full>
        Submit
      </Button>
    </>
  );
};

const InstitutionFormFields = (props: FormFieldsProps) => {
  return (
    <>
      <RegisteredNameField />
      <RegistrationNumberField />
      <BVNField />
      <OperationalAddressField />

      <Input.File name="utilityBill" id="utilityBill" />

      <Button type="submit" full>
        Submit
      </Button>
    </>
  );
};

const IndividualFormFields = (props: FormFieldsProps) => {
  return (
    <>
      <RegistrationNumberField />
      <BVNField />
      <OperationalAddressField />

      <Input.File name="utilityBill" id="utilityBill" />

      <Button type="submit" full>
        Submit
      </Button>
    </>
  );
};

const EntityTypeValidationRulesMap: Record<EntityType, FormField[]> = {
  merchant: [
    "registeredName",
    "registeredCompanyNumber",
    "bankVerificationNumber",
  ],
  institution: [
    "registeredName",
    "registeredCompanyNumber",
    "bankVerificationNumber",
  ],
  individual: [
    "registeredName",
    "registeredCompanyNumber",
    "bankVerificationNumber",
  ],
};

const EntityTypeFieldsComponentMap: Record<
  EntityType,
  (props: FormFieldsProps) => JSX.Element
> = {
  merchant: MerchantFormFields,
  institution: InstitutionFormFields,
  individual: IndividualFormFields,
};

const EntityRegistrationForm = (props: EntityRegistrationFormProps) => {
  const router = useRouter();
  const overlayLoader = useOverlayLoader();
  const FormComponent = EntityTypeFieldsComponentMap[props.entityType];
  const validatorRules = EntityTypeValidationRulesMap[props.entityType];
  const validationSchema = useFormValidation(validatorRules);

  const onFormSubmit = async (data: any) => {
    overlayLoader.show();
    await EntityRegistrationService.registerEntity(props.entityType, data);
    overlayLoader.hide();
    showToast("Success 🎉");
    router.push(pages.dashboard());
  };

  return (
    <>
      <Formik
        initialValues={{}}
        onSubmit={onFormSubmit}
        validationSchema={validationSchema}
      >
        {({ setFieldValue }) => (
          <Form>
            <FormComponent setFieldValue={setFieldValue} />
          </Form>
        )}
      </Formik>
      <OverlayLoader controller={overlayLoader} />
    </>
  );
};

export default EntityRegistrationForm;
