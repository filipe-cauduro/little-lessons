import { createContext, FC, ReactNode } from "react";
import {
  INotification,
  NotificationReducerActions,
  useNotificationActions,
} from "../hooks/useNotificationActions";

interface NotificationContextProps {
  notifications: INotification[];
  dispatch: (payload: NotificationReducerActions) => void;
}

const NotificationContext = createContext<NotificationContextProps>({
  notifications: [],
  dispatch: () => {},
});

const NotificationContextProvider: FC<{ children?: ReactNode }> = ({
  children,
}) => {
  const { notifications, dispatch } = useNotificationActions();

  return (
    <NotificationContext.Provider value={{ notifications, dispatch }}>
      {children}
    </NotificationContext.Provider>
  );
};

export { NotificationContextProvider, NotificationContext };
