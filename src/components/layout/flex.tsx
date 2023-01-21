import { ReactNode } from "react";

export type FlexProps = {
  children?: ReactNode;
};

const FlexLayout = (props: FlexProps) => {
  return <div className="flex justify-between">{props.children}</div>;
};

export default FlexLayout;
