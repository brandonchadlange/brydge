import { ReactNode, useState } from "react";
import Overlay from "./overlay";

export type SlideoutProps = {
  children?: ReactNode;
  show: boolean;
  setShow: (show: boolean) => void;
};

const Slideout = (props: SlideoutProps) => {
  const hideOverlay = () => {
    props.setShow(false);
  };

  if (props.show) {
    return (
      <>
        <Overlay show={props.show} onClick={hideOverlay}></Overlay>
        <div className="w-96 h-screen bg-white absolute right-0 top-0 shadow-xl">
          {props.children}
        </div>
      </>
    );
  }

  return <></>;
};

export default Slideout;