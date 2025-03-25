import { useReducer } from "react";
import { v4 } from "uuid";
import { ToastNotification } from "../types/ToastNotification";

export interface INotification extends ToastNotification {
  id: string;
}

export type NotificationReducerActions =
  | {
      action: "add";
      body: ToastNotification;
    }
  | {
      action: "remove";
      body: { id: string };
    };

const notificationReducer = (
  notifications: INotification[],
  payload: NotificationReducerActions
) => {
  switch (payload.action) {
    case "add":
      const notification = {
        ...payload.body,
        id: v4(),
      };

      return [...notifications, notification];
    case "remove":
      return notifications.filter((x) => x.id != payload.body.id);
  }
};

const useNotificationActions = () => {
  const [notifications, dispatch] = useReducer(notificationReducer, []);

  return {
    notifications,
    dispatch,
  };
};

export { useNotificationActions };
