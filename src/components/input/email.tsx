// import { DetailedHTMLProps, InputHTMLAttributes } from "react";

type CustomEmailInputProps = {
  placeholder?: string;
};

type EmailInputProps = CustomEmailInputProps;

const EmailInput = (props: EmailInputProps) => {
  return (
    <>
      <input
        type="email"
        className="w-full px-5 py-2 my-3 border-2 rounded-lg focus:outline-none focus:border-dark-300 focus:ring-1 focus:ring-dark-300"
        placeholder={props.placeholder}
      />
    </>
  );
};

export default EmailInput;
