import { v4 } from "uuid";
import { createContext, FC, ReactNode, useState } from "react";
import { ToastNotification } from "../types/ToastNotification";

export interface INotification extends ToastNotification {
  id: string;
}

interface NotificationContextProps {
  notifications: INotification[];
  notify: (notification: ToastNotification) => void;
  clearNotification: (id: string) => void;
}

const NotificationContext = createContext<NotificationContextProps>({
  notifications: [],
  notify: () => {},
  clearNotification: () => {},
});

const NotificationContextProvider: FC<{ children?: ReactNode }> = ({
  children,
}) => {
  const [notifications, setNotifications] = useState<INotification[]>([]);

  const notify = (toastInfo: ToastNotification) => {
    const notification = {
      ...toastInfo,
      id: v4(),
    };

    setNotifications((notifications) => [...notifications, notification]);
  };

  const clearNotification = (id: string) => {
    setNotifications((notifications) =>
      notifications.filter((x) => x.id != id)
    );
  };

  return (
    <NotificationContext.Provider
      value={{ notifications, notify, clearNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export { NotificationContextProvider, NotificationContext };
