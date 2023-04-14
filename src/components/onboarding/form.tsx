import pages from "@/common/pages";
import Button from "@/components/Button";
import Input from "@/components/input";
import OverlayLoader, { useOverlayLoader } from "@/components/overlay-loader";
import EntityRegistrationService from "@/frontend/services/entity-registration";
import showToast from "@/frontend/utility/show-toast";
import formField from "@/utils/useFormField";
import useFormValidation from "@/utils/useFormValidator";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import FormField from "../input/FormField";

type EntityRegistrationFormProps = {
  entityType: EntityType;
};

type FormFieldsProps = {
  setFieldValue: (field: string, value: any) => void;
};

const RegisteredNameField = formField("registeredName");
const RegistrationNumberField = formField("registeredCompanyNumber");
const BVNField = formField("bankVerificationNumber");
const Street = formField("street");
const HouseNumber = formField("houseNumber");
const Zipcode = formField("zipCode");
const City = formField("city");
const State = formField("state");
const DateOfBirth = formField("dateOfBirth");

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
      <State />

      <FormField label="Utility Bill">
        <Input.File
          setFieldValue={props.setFieldValue}
          name="utilityBillId"
          id="utilityBillId"
        />
      </FormField>

      <FormField label="Company registration">
        <Input.File
          setFieldValue={props.setFieldValue}
          name="companyRegistrationId"
          id="companyRegistrationId"
        />
      </FormField>

      <FormField label="Memorandum of Understanding">
        <Input.File
          setFieldValue={props.setFieldValue}
          name="memorandumOfUnderstandingId"
          id="memorandumOfUnderstandingId"
        />
      </FormField>

      <FormField label="Article of Association">
        <Input.File
          setFieldValue={props.setFieldValue}
          name="articleOfAssociationId"
          id="articleOfAssociationId"
        />
      </FormField>

      <FormField label="Certificate of Incorporation">
        <Input.File
          setFieldValue={props.setFieldValue}
          name="certificateOfIncorporationId"
          id="certificateOfIncorporationId"
        />
      </FormField>

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
      <Street />
      <HouseNumber />
      <Zipcode />
      <City />
      <State />

      <FormField label="Utility Bill">
        <Input.File
          setFieldValue={props.setFieldValue}
          name="utilityBillId"
          id="utilityBillId"
        />
      </FormField>

      <FormField label="Company registration">
        <Input.File
          setFieldValue={props.setFieldValue}
          name="companyRegistrationId"
          id="companyRegistrationId"
        />
      </FormField>

      <FormField label="Memorandum of Understanding">
        <Input.File
          setFieldValue={props.setFieldValue}
          name="memorandumOfUnderstandingId"
          id="memorandumOfUnderstandingId"
        />
      </FormField>

      <FormField label="Article of Association">
        <Input.File
          setFieldValue={props.setFieldValue}
          name="articleOfAssociationId"
          id="articleOfAssociationId"
        />
      </FormField>

      <FormField label="Certificate of Incorporation">
        <Input.File
          setFieldValue={props.setFieldValue}
          name="certificateOfIncorporationId"
          id="certificateOfIncorporationId"
        />
      </FormField>

      <Button type="submit" full>
        Submit
      </Button>
    </>
  );
};

const IndividualFormFields = (props: FormFieldsProps) => {
  return (
    <>
      <BVNField />
      <DateOfBirth />
      <Street />
      <HouseNumber />
      <Zipcode />
      <City />
      <State />

      <FormField label="Utility Bill">
        <Input.File
          setFieldValue={props.setFieldValue}
          name="utilityBillId"
          id="utilityBillId"
        />
      </FormField>

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
    "street",
    "houseNumber",
    "zipCode",
    "city",
    "state",
  ],
  individual: [
    "registeredName",
    "registeredCompanyNumber",
    "bankVerificationNumber",
    "street",
    "houseNumber",
    "zipCode",
    "dateOfBirth",
    "city",
    "state",
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
    console.log(data);
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
