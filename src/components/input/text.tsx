import React, { InputHTMLAttributes } from 'react';
import { useField } from 'formik';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  name: string;
};

const TextInput = (props: TextInputProps) => {
  const [field, meta] = useField(props);

  return (
    <>
      <input
        type="text"
        className="w-full px-5 py-2 border-2 rounded-lg focus:outline-none focus:border-dark-300 focus:ring-1 focus:ring-dark-300"
        placeholder={props.placeholder}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? <div className=" text-xs text-red-500 ">{meta.error}</div> : null}
    </>
  );
};

export default TextInput;
