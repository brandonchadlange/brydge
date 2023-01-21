import { ReactNode } from "react";

type GridColumns = 2 | 3;

export type GridProps = {
  columns: GridColumns;
  children?: ReactNode;
};

const GridLayout = (props: GridProps) => {
  if (props.columns === 2) {
    return <div className="grid grid-cols-2 gap-4">{props.children}</div>;
  }

  if (props.columns === 3) {
    return <div className="grid grid-cols-3 gap-4">{props.children}</div>;
  }

  return <></>;
};

export default GridLayout;
