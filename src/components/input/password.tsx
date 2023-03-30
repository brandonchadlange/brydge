

import { useField } from "formik";
import { InputHTMLAttributes } from "react";
import applyInput from "./apply-input";

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  name: string;
}
const PasswordInput = (props: PasswordInputProps) => {
  const [field, meta] = useField(props);
  return (
    <>
      <input
        type="password"
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


export default applyInput(PasswordInput);


