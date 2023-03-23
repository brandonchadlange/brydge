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
        <Overlay
          show={props.show}
          onClick={() => props.setShow(false)}
        ></Overlay>
        <div className="h-screen w-screen fixed top-0 left-0 grid place-content-center">
          <div className="w-[450px] bg-white shadow-md rounded-lg p-8">
            {props.children}
          </div>
        </div>
      </>
    );
  }

  return <></>;
};

export default Modal;
