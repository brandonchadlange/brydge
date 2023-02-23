import { ComponentType } from "react";
import FormField from "./FormField";

type ApplyFormFieldProps = {
  name: string;
  label: string;
  placeholder?: string;
  description?: string;
};

function applyFormField<T>(
  InputField: ComponentType<any>,
  props: ApplyFormFieldProps
) {
  const AppliedFormField = () => {
    return (
      <FormField label={props.label} description={props.description}>
        <InputField name={props.name} placeholder={props.placeholder} />
      </FormField>
    );
  };

  return AppliedFormField;
}

export default applyFormField;
