import { ComponentType } from "react";
import FormField from "./FormField";

function applyFormField<T>(
  InputField: ComponentType<any>,
  name: string,
  label: string,
  options?: Array<any>,
  description?: string
) {
  const AppliedFormField = () => {
    return (
      <FormField label={label} description={description}>
       {options ? 
        (<InputField name={name}> {options.map(option =>(
            <option key={option} value={option}>
              {option}
            </option>))}
          </InputField>) 
          : <InputField name={name}  />} 
      </FormField>
    );
  };

  return AppliedFormField;
}

export default applyFormField;
