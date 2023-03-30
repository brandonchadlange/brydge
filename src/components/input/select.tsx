import { useField } from "formik";
import { ReactNode } from "react";
type CustomSelectInputProps = {
  placeholder?: string;
  name: string;
  children: ReactNode;
};

type SelectInputProps = CustomSelectInputProps;

const SelectInput = (props: SelectInputProps) => {
  const [field, meta] = useField(props);

  return (
    <>
      <select
        className="mb-2 w-full px-5 py-2 border rounded-lg focus:outline-none focus:border-dark-300 focus:ring-1 focus:ring-dark-300"
        placeholder={props.placeholder}
        {...field}
        {...props}
      >
        {props.children}
      </select>
      {meta.touched && meta.error ? (
        <div className="text-red-500">{meta.error}</div>
      ) : null}
    </>
  );
};

export default SelectInput;
