import { ReactNode } from "react";

export type CardProps = {
  className?: string;
  children?: ReactNode;
};

const Card = ({ children, className }: CardProps) => {
  return (
    <div className={`bg-white p-4 rounded-md shadow-sm ${className}`}>{children}</div>
  );
};

export default Card;
