import { toast } from "react-toastify";

export const ToastError = (msg: string) => {
  return toast.error(msg, {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    theme: "colored",
  });
};
