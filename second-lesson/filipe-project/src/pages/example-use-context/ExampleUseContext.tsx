import { useContext, useState } from "react";
import { NotificationContext } from "../../contexts/NotificationContextProvider";
import { ToastNotification } from "../../types/ToastNotification";

const ExampleUseContext = () => {
  const [text, setText] = useState(
    `{ "type": "success", "content": "heey", "progress": 0.5 }`
  );

  const { dispatch } = useContext(NotificationContext);

  const onClick = () => {
    try {
      const obj = JSON.parse(text);
      if (!obj) return;

      dispatch({ action: "add", body: obj as ToastNotification });
    } catch (e) {
      console.error(e);
      return;
    }
  };

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={({ target }) => setText(target.value)}
        style={{ width: "400px" }}
      />
      <button onClick={onClick}>Add toast</button>
    </>
  );
};

export { ExampleUseContext };
