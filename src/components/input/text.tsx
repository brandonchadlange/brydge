// import { DetailedHTMLProps, InputHTMLAttributes } from "react";

import { useForm } from "react-hook-form";

type CustomTextInputProps = {
  placeholder?: string;
};

type TextInputProps = CustomTextInputProps;

const TextInput = (props: TextInputProps) => {
  const { register } = useForm();
  // const fieldDetail = register("", {});

  return (
    <>
      <input
        type="text"
        className="w-full px-5 py-2 border-2 rounded-lg focus:outline-none focus:border-dark-300 focus:ring-1 focus:ring-dark-300"
        placeholder={props.placeholder}
        // {...fieldDetail}
      />
    </>
  );
};

export default TextInput;
