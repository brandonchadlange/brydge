// import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { useField } from "formik";
import { HiOutlineDocumentArrowUp } from "react-icons/hi2";
import applyInput from "./apply-input";
import documentService from "@/frontend/services/document";
import { useState } from "react";
import Progress from "../progress";

type CustomFileInputProps = {
  placeholder?: string;
  name: string;
  id: string;
  setFieldValue: (field: string, value: any) => void;
};

type FileInputProps = CustomFileInputProps;

const FileInput = (props: FileInputProps) => {
  const [file, setFile] = useState<any>();
  const [field, meta] = useField(props.name);
  const [progress, setProgress] = useState(0);
  const [inProgress, setInProgress] = useState(false);

  const onFieldChange = async (value: any) => {
    const file = value.target.files[0];
    setInProgress(true);

    const documentDetails = await documentService.uploadDocument(
      file,
      (value) => {
        setProgress(value);

        if (value === 100) {
          setTimeout(() => {
            setInProgress(false);
          }, 500);
        }
      }
    );

    setFile(file);
    props.setFieldValue(props.name, documentDetails.id);
  };

  return (
    <>
      <div className="flex px-5 py-3 mt-2 mb-4 border-2 border-dashed rounded-lg font-primary bg-blue-50 border-blue">
        <label htmlFor={props.name}>
          <HiOutlineDocumentArrowUp className="w-10 h-10 cursor-pointer text-blue" />
        </label>
        <input
          type="file"
          id={props.id}
          placeholder={props.placeholder}
          className={"invisible hidden"}
          onChange={onFieldChange}
        />
        <div className="flex flex-col ml-3 border-red-500 borde">
          <p className="font-bold text-md">
            {file?.name ? file.name : "Click to upload"}
          </p>
          <p className="text-sm text-blue">Max 10MB</p>
        </div>
        {meta.value && (
          <span className="text-md text-right whitespace-nowrap">
            {meta.value.name}
          </span>
        )}
      </div>
      {inProgress && <Progress value={progress} />}
      {meta.touched && meta.error ? (
        <div className="text-red-500">{meta.error}</div>
      ) : null}
    </>
  );
};

export default applyInput(FileInput);
