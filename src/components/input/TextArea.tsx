// import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { useField } from "formik";
type CustomTextInputProps = {
  placeholder?: string;
  name: string;
};

type TextAreaInputProps = CustomTextInputProps;

const TextAreaInput = (props: TextAreaInputProps) => {
  const [field, meta] = useField(props);

  return (
    <>
      <textarea
        className="w-full px-5 py-2 border rounded-lg focus:outline-none focus:border-dark-300 focus:ring-1 focus:ring-dark-300"
        placeholder={props.placeholder}
        cols={20}
        rows={5}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-red-500">{meta.error}</div>
      ) : null}
    </>
  );
};

export default TextAreaInput;
