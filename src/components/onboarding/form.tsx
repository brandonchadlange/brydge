import pages from "@/common/pages";
import Button from "@/components/Button";
import Input from "@/components/input";
import OverlayLoader, { useOverlayLoader } from "@/components/overlay-loader";
import EntityRegistrationService from "@/frontend/services/entity-registration";
import states from "@/frontend/utility/nigerian-states";
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
const Street = FormField("street");
const HouseNumber = FormField("houseNumber");
const Zipcode = FormField("zipCode");
const City = FormField("city");
const OperationalAddressField = FormField("operationalAddress");

const MerchantFormFields = (props: FormFieldsProps) => {
  return (
    <>
      <RegisteredNameField />
      <RegistrationNumberField />
      <BVNField />
      <Street />
      <HouseNumber />
      <Zipcode />
      <City />
      <Input.Select name="state" >
          {states.length &&
            states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
      </Input.Select>

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
    "street",
    "houseNumber",
    "zipCode",
    "city",
    "state",
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
