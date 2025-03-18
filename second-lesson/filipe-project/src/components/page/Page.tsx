import { FC } from "react";

import "./page.css";
import { Dialog } from "../../pages/dialog/Dialog";

const Page: FC = () => (
  <div className="page">
    <Dialog />
    {/* <ExampleUseMemo /> */}
    {/* <ExampleUseReducer /> */}
    {/* <ExampleUseEffect /> */}
  </div>
);

export { Page };
