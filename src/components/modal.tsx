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
        <div className="w-96 bg-white absolute shadow-xl">{props.children}</div>
      </>
    );
  }

  return <></>;
};

export default Modal;
