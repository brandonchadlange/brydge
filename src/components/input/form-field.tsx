import { ReactNode } from "react";

export type FormFieldProps = {
  label?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
};

const FormField = (props: FormFieldProps) => {
  return (
    <>
      <label>
        <span>{props.label}</span>
        {props.children}
      </label>
      <span className="text-xs">{props.description}</span>
    </>
  );
};

export default FormField;
