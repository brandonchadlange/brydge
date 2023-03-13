import { useState } from "react";
import { Bars } from "react-loader-spinner";
import Overlay from "./overlay";

type OverlayLoaderController = {
  showing: boolean;
  show: () => void;
  hide: () => void;
};

type OverlayLoaderProps = {
  controller: OverlayLoaderController;
};

const OverlayLoader = (props: OverlayLoaderProps) => {
  const { showing } = props.controller;

  if (!showing) {
    return <></>;
  }

  return (
    <Overlay show>
      <div className="h-full flex flex-col align-middle">
        <Bars
          height="80"
          width="80"
          color="#1d1d1d"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass="m-auto"
          visible={true}
        />
      </div>
    </Overlay>
  );
};

export default OverlayLoader;

export const useOverlayLoader = (): OverlayLoaderController => {
  const [showing, setShowing] = useState(false);

  return {
    showing,
    show() {
      setShowing(true);
    },
    hide() {
      setShowing(false);
    },
  };
};
