import { ReactNode, useState } from "react";
import Overlay from "./overlay";

export type ModalProps = {
  children?: ReactNode;
  show: boolean;
  setShow: (show: boolean) => void;
};

const Modal = (props: ModalProps) => {
  const hideOverlay = () => {
    props.setShow(false);
  };

  if (props.show) {
    return (
      <>
        <Overlay show={props.show} onClick={hideOverlay}></Overlay>
        <div className="w-96  bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl shadow-xl">{props.children}</div>
      </>
    );
  }

  return <></>;
};

export default Modal;
