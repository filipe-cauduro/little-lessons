import { FC, useContext, useEffect, useState } from "react";
import { getToastNotificationDefaultText } from "./utils";
import { X } from "@mynaui/icons-react";

import "./notification.css";
import { NotificationContext } from "../../contexts/NotificationContextProvider";
import { INotification } from "../../hooks/useNotificationActions";

const notificationDurationSeconds = 5;

const Notification: FC<INotification> = ({ id, title, content, type }) => {
  const titleText = getToastNotificationDefaultText(type);

  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPaused) return;

      setProgress((progress) => {
        const updatedProgress = progress + 1 / 10;

        if (updatedProgress >= 1) dispatch({ action: "remove", body: { id } });

        return updatedProgress;
      });
    }, (notificationDurationSeconds * 1000) / 10);

    return () => clearInterval(interval);
  }, [isPaused]);

  const { dispatch } = useContext(NotificationContext);

  return (
    <>
      <div
        className={`toast-notification-container ${type}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
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
        ></span>
      </div>
    </>
  );
};

export { Notification };
