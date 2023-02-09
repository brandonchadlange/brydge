import React, { ButtonHTMLAttributes } from 'react';
import { CgSpinner } from 'react-icons/cg';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
  children: any;
  loading?: boolean;
  disabled?: boolean;
  full?: boolean;
};

const Button = ({ loading, className, children, full, ...rest }: Props) => {
  return (
    <button
      className={`flex justify-center mt-4 px-5 py-2 text-center text-white transition ease-in-out rounded-full bg-dark hover:bg-dark-400 ${
        full && 'w-full'
      } ${className}`}
      {...rest}
    >
      {loading ? <CgSpinner className="w-6 h-6 animate-spin" /> : children}
    </button>
  );
};

export default Button;
