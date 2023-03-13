import React, { InputHTMLAttributes } from "react";
import { useField } from "formik";
import applyInput from "./apply-input";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  name: string;
}

const TextInput = (props: TextInputProps) => {
  const [field, meta] = useField(props);

  return (
    <>
      <input
        type="text"
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

export default applyInput(TextInput);
