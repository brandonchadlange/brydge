// import { DetailedHTMLProps, InputHTMLAttributes } from "react";

type CustomDateInputProps = {
  placeholder?: string;
};

type DateInputProps = CustomDateInputProps;

const DateInput = (props: DateInputProps) => {
  return (
    <>
      <input
        type="date"
        className="w-full px-5 py-2 my-3 border-2 rounded-lg focus:outline-none focus:border-dark-300 focus:ring-1 focus:ring-dark-300"
        placeholder={props.placeholder}
      />
    </>
  );
};

export default DateInput;
