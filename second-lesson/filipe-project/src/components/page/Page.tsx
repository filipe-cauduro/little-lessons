import { FC } from "react";

import "./page.css";
import { Dialog } from "../../pages/dialog/Dialog";
import { ExampleUseContext } from "../../pages/example-use-context/ExampleUseContext";

const Page: FC = () => (
  <div className="page">
    {/* <Dialog /> */}
    {/* <ExampleUseMemo /> */}
    {/* <ExampleUseReducer /> */}
    {/* <ExampleUseEffect /> */}
    <ExampleUseContext />
  </div>
);

export { Page };
