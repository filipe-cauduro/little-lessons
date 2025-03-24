import { v4 } from "uuid";
import { createContext, FC, ReactNode, useEffect, useReducer } from "react";
import { ToastNotification } from "../types/ToastNotification";

export interface INotification extends ToastNotification {
  id: string;
  progress: number;
  paused: boolean;
}

interface NotificationContextProps {
  notifications: INotification[];
  dispatch: (payload: NotificationReducerActions) => void;
}

type NotificationReducerActions =
  | {
      action: "add";
      body: ToastNotification;
    }
  | {
      action: "remove";
      body: { id: string };
    }
  | {
      action: "update-progress";
    }
  | {
      action: "pause";
      body: {
        id: string;
      };
    }
  | {
      action: "play";
      body: {
        id: string;
      };
    };

const notificationScreenTimeInMS = 3000;
const notificationCyclesAmount = 10;
const notificationUpdateCycleInMS =
  notificationScreenTimeInMS / notificationCyclesAmount;

const NotificationContext = createContext<NotificationContextProps>({
  notifications: [],
  dispatch: () => {},
});

const notificationReducer = (
  notifications: INotification[],
  payload: NotificationReducerActions
) => {
  switch (payload.action) {
    case "add":
      const notification = {
        ...payload.body,
        id: v4(),
        progress: 0,
        paused: false,
      };

      return [...notifications, notification];
    case "remove":
      return notifications.filter((x) => x.id != payload.body.id);
    case "update-progress":
      const newNotifications = notifications.map((x) =>
        x.paused
          ? x
          : { ...x, progress: x.progress + 1 / notificationCyclesAmount }
      );
      return newNotifications.filter((x) => x.progress < 1);
    case "pause":
      return notifications.map((x) =>
        x.id == payload.body.id ? { ...x, paused: true } : x
      );
    case "play":
      return notifications.map((x) =>
        x.id == payload.body.id ? { ...x, paused: false } : x
      );
  }
};

const NotificationContextProvider: FC<{ children?: ReactNode }> = ({
  children,
}) => {
  const [notifications, dispatch] = useReducer(notificationReducer, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (notifications.length == 0) return;

      dispatch({ action: "update-progress" });
    }, notificationUpdateCycleInMS);

    return () => clearInterval(interval);
  }, [notifications]);

  return (
    <NotificationContext.Provider value={{ notifications, dispatch }}>
      {children}
    </NotificationContext.Provider>
  );
};

export { NotificationContextProvider, NotificationContext };
