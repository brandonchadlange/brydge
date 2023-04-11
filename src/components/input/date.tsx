import { useField } from "formik";
import applyInput from "./apply-input";

type CustomDateInputProps = {
  placeholder?: string;
  name: string;
};

type DateInputProps = CustomDateInputProps;

const DateInput = (props: DateInputProps) => {
  const [field, meta] = useField(props);

  return (
    <>
      <input
        type="date"
        {...field}
        {...props}
        />
        {meta.touched && meta.error ? (
          <div className=" text-xs text-red-500 ">{meta.error}</div>
        ) : null}
    </>
  );
};

export default applyInput(DateInput);
