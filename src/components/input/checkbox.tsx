// import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { useField } from 'formik';
import { ReactNode } from 'react';
type CustomCheckboxInputProps = {
  placeholder?: string;
  name: string;
};

type CheckboxInputProps = CustomCheckboxInputProps;

const MyCheckbox = ({ children, ...props }: { children: ReactNode; props: CheckboxInputProps }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <>
      <label htmlFor="acceptedTerms" className="flex flex-row justify-between mt-4">
        <input className="mr-4 rounded-full" type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? <div className="text-red-500 mb-8">{meta.error}</div> : null}
    </>
  );
};

export default MyCheckbox;
