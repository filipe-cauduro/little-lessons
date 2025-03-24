import { FC, useContext } from "react";
import { getToastNotificationDefaultText } from "./utils";
import { X } from "@mynaui/icons-react";

import "./notification.css";
import {
  INotification,
  NotificationContext,
} from "../../contexts/NotificationContextProvider";

const Notification: FC<INotification> = ({
  id,
  title,
  content,
  type,
  progress,
}) => {
  const titleText = getToastNotificationDefaultText(type);

  const { dispatch } = useContext(NotificationContext);

  return (
    <>
      <div
        className={`toast-notification-container ${type}`}
        onMouseEnter={() => dispatch({ action: "pause", body: { id } })}
        onMouseLeave={() => dispatch({ action: "play", body: { id } })}
      >
        <button
          className="toast-notification-close"
          onClick={() => dispatch({ action: "remove", body: { id } })}
        >
          <X />
        </button>
        <h4>{title ?? titleText}</h4>
        <p>{content}</p>
        <span
          style={{
            backgroundColor: "green",
            minWidth: `${progress * 100}%`,
            height: "8px",
          }}
        >
          {progress}
        </span>
      </div>
    </>
  );
};

export { Notification };
