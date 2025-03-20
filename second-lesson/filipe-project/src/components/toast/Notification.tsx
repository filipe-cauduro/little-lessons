import { FC, useContext } from "react";
import { getToastNotificationDefaultText } from "./utils";
import { X } from "@mynaui/icons-react";

import "./notification.css";
import {
  INotification,
  NotificationContext,
} from "../../contexts/NotificationContextProvider";

const Notification: FC<INotification> = ({ id, title, content, type }) => {
  const titleText = getToastNotificationDefaultText(type);

  const { clearNotification } = useContext(NotificationContext);

  return (
    <div className={`toast-notification-container ${type}`}>
      <button
        className="toast-notification-close"
        onClick={() => clearNotification(id)}
      >
        <X />
      </button>
      <h4>{title ?? titleText}</h4>
      <p>{content}</p>
    </div>
  );
};

export { Notification };
