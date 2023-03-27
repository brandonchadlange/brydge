// import { DetailedHTMLProps, InputHTMLAttributes } from "react";

import { useField } from "formik";
import { InputHTMLAttributes } from "react";
import applyInput from "./apply-input";

interface EmailInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  name: string;
}
const EmailInput = (props: EmailInputProps) => {
  const [field, meta] = useField(props);
  return (
    <>
      <input
        type="email"
        placeholder={props.placeholder}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className=" text-xs text-red-500 ">{meta.error}</div>
      ) : null}
    </>
  );
};


export default applyInput(EmailInput);

