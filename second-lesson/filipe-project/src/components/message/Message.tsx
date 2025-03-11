import { FC } from "react";

import "./message.css";

export interface IMessage {
  text: string;
  author: "current_user" | "other_user";
}

const Message: FC<IMessage> = ({ author, text }) => {
  return (
    <div
      className={
        author == "other_user"
          ? "message-dialog-other-user-container"
          : "message-dialog-current-user-container"
      }
    >
      <p
        className={
          author == "other_user"
            ? "message-dialog-other-user"
            : "message-dialog-current-user"
        }
      >
        {text}
      </p>
    </div>
  );
};

export { Message };
