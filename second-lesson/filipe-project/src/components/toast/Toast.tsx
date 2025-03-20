import { FC, useContext } from "react";
import { Notification } from "./Notification";

import "./toast.css";
import { NotificationContext } from "../../contexts/NotificationContextProvider";

const Toast: FC = () => {
  const { notifications } = useContext(NotificationContext);

  return (
    <div className="toast-section">
      {notifications.map((x) => (
        <Notification {...x} />
      ))}
    </div>
  );
};

export { Toast };
