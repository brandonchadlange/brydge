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
        className="w-full px-5 py-2 border rounded-lg focus:outline-none focus:border-dark-300 focus:ring-0 focus:ring-dark-300"
        placeholder={props.placeholder}
      />
    </>
  );
};

export default EmailInput;
