import { ComponentType } from "react";
import FormField from "./FormField";

function applyFormField<T>(
  InputField: ComponentType<any>,
  name: string,
  label: string,
  description?: string
) {
  const AppliedFormField = () => {
    return (
      <FormField label={label} description={description}>
        <InputField name={name} />
      </FormField>
    );
  };

  return AppliedFormField;
}

export default applyFormField;
