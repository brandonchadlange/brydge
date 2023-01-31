import { ReactNode } from 'react';

export type FormFieldProps = {
  label?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
};

const FormField = (props: FormFieldProps) => {
  return (
    <>
      <div className="mb-2 ">
        <label>
          <span>{props.label}</span>
          {props.children}
        </label>
        <span className="text-xs text-dark-50 tracking-tight">{props.description}</span>
      </div>
    </>
  );
};

export default FormField;
