import { MouseEventHandler, ReactNode, useState } from "react";

export type OverlayProps = {
  show: boolean;
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
};

const Overlay = (props: OverlayProps) => {
  if (props.show) {
    return (
      <div
        onClick={props.onClick}
        className="h-screen w-screen fixed top-0 left-0 bg-black bg-opacity-20 animate-fade"
      >
        {props.children}
      </div>
    );
  }

  return <></>;
};

export default Overlay;
