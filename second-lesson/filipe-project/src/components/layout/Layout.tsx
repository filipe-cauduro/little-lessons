import { FC, ReactNode } from "react";

import "./layout.css";

interface ILayout {
  children?: ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => (
  <div className="template-grid">{children}</div>
);

export { Layout };
