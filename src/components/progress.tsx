export type FormFieldProps = {
  value: number;
};

const Progress = (props: FormFieldProps) => {
  const value = `${props.value}%`;

  return (
    <div className="bg-gray-300 rounded-lg h-2 mb-8">
      <div className="bg-blue-500 rounded-lg h-2" style={{ width: value }}></div>
    </div>
  );
};

export default Progress;
