// import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { useField } from 'formik';
import { ChangeEvent } from 'react';
import { HiOutlineDocumentArrowUp } from 'react-icons/hi2';
type CustomTextInputProps = {
  placeholder?: string;
  name: string;
  id: string;
  onBlur: () => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

type TextInputProps = CustomTextInputProps;

const FileInput = (props: TextInputProps) => {
  const [field, meta] = useField(props);

  return (
    <>
      <div className="flex px-5 py-3 mt-2 mb-4 border-2 border-dashed rounded-lg font-secondary bg-blue-50 border-blue">
        <label htmlFor={props.name}>
          <HiOutlineDocumentArrowUp className="w-10 h-10 cursor-pointer text-blue" />
        </label>
        <input type="file" {...field} {...props} className={'invisible hidden'} />
        <div className="flex flex-col ml-3 border-red-500 borde">
          <p className="font-bold text-md">{meta.value?.name ? meta.value?.utilityBill?.name : 'Click to upload'}</p>
          <p className="text-sm text-blue">Max 10MB</p>
        </div>
        {meta.value && <span className="text-md text-right whitespace-nowrap">{meta.value.name}</span>}
      </div>
      {meta.touched && meta.error ? <div className="text-red-500">{meta.error}</div> : null}
    </>
  );
};

export default FileInput;
