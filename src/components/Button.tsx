import React from "react";
import { CgSpinner } from "react-icons/cg";

type Props = {
  type: "button" | "submit" | "reset" | undefined;
  className?: string;
  children: any;
  loading?: boolean;
  full?: boolean;
};

const Button = ({ loading, className, children, full, ...rest }: Props) => {
  return (
    <button
      className={`flex justify-center px-5 py-2 text-center text-white transition ease-in-out rounded-full bg-dark hover:bg-dark-400 ${
        full && "w-full"
      } ${className}`}
      {...rest}
      onClick={(e) => {}}
    >
      {loading ? <CgSpinner className="w-6 h-6 animate-spin" /> : children}
    </button>
  );
};

export default Button;
