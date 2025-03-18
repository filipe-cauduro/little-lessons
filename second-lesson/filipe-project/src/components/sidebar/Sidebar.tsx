import { FC } from "react";

import "./sidebar.css";

const Sidebar: FC = () => (
  <div className="sidebar">
    <div className="navigation-link navigation-link-active">ChatGPT</div>
    <div className="navigation-link">Ollama</div>
    <div className="navigation-link">Deepseek</div>
  </div>
);

export { Sidebar };
