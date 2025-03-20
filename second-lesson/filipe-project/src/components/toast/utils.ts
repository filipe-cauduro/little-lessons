import { ToastNotification } from "../../types/ToastNotification";

const getToastNotificationDefaultText = (type: ToastNotification["type"]) => {
  switch (type) {
    case "success":
      return "Success";
    case "warn":
      return "Warning";
    case "danger":
      return "Error";
    case "info":
    default:
      return "";
  }
};

export { getToastNotificationDefaultText };
