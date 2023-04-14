import toast, { ToastPosition, ToastType } from "react-hot-toast";

interface ShowToastProps {
  type?: ToastType;
  position?: ToastPosition;
  durationInMs?: number;
}

const defaultToastProps: ShowToastProps = {
  type: "success",
  durationInMs: 2000,
  position: "top-right",
};

const showToast = (message: string, props?: ShowToastProps) => {
  const { type, position, durationInMs } = props || defaultToastProps;

  const toastOptions = {
    position: position,
    duration: durationInMs,
  };

  if (type === "error") {
    toast.error(message, {
      ...toastOptions,
    });

    return;
  }

  toast.success(message, toastOptions);
};

export default showToast;
