import { ReactNode } from "react";

export type CardProps = {
  children?: ReactNode;
};

const Card = (props: CardProps) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-sm">{props.children}</div>
  );
};

export default Card;
