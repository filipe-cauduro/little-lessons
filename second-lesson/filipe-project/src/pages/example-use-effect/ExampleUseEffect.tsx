import { useEffect, useState } from "react";

import "./example-use-effect.css";

const Child = () => {
  useEffect(() => {
    console.log("on-mount: shown");

    return () => console.log("on-unmount: hidden");
  }, []);

  return <h2>Child</h2>;
};

const ExampleUseEffect = () => {
  const [show, setShow] = useState(true);

  const hide = () => {
    setShow(false);
    setTimeout(() => setShow(true), 1000);
  };

  return (
    <div className="use-effect-container">
      <div className="child-container">{show ? <Child /> : <></>}</div>
      <button className="action-button" onClick={hide}>
        hide
      </button>
    </div>
  );
};

export { ExampleUseEffect };
