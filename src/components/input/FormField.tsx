import { ReactNode } from 'react';

export interface FormFieldProps {
  className?: string;
  label?: ReactNode;
  labelClasses?: string;
  description?: ReactNode;
  children?: ReactNode;
};

const FormField = (props: FormFieldProps) => {
  return (
    <>
      <div className={`mb-2 ${props.className}`}>
        <label>
          <div className={props.labelClasses}>{props.label}</div>
          {props.children}
        </label>
        <span className="text-xs text-dark-50 tracking-tight">{props.description}</span>
      </div>
    </>
  );
};

export default FormField;
