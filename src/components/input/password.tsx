// import { DetailedHTMLProps, InputHTMLAttributes } from "react";

type CustomPasswordInputProps = {
  placeholder?: string;
};

type PasswordInputProps = CustomPasswordInputProps;

const PasswordInput = (props: PasswordInputProps) => {
  return (
    <>
      <input
        type="password"
        className="w-full px-5 py-2 border rounded-lg focus:outline-none focus:border-dark-300 focus:ring-0 focus:ring-dark-300"
        placeholder={props.placeholder}
      />
    </>
  );
};

export default PasswordInput;
