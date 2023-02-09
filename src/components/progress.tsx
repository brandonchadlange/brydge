interface ProgressProps {
  className?: string;
  value: number;
};

const Progress = ({ className, value }: ProgressProps) => {
  return (
    <div className={`bg-gray-300 rounded-lg h-2 ${className}`}>
      <div className="bg-blue-500 rounded-lg h-2" style={{ width: `${value}%` }}></div>
    </div>
  );
};

export default Progress;
