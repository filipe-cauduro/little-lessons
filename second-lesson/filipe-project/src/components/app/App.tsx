import { FC } from "react";

import { Layout } from "../layout/Layout";

import "../../globals.css";
import { Page } from "../page/Page";
import { Sidebar } from "../sidebar/Sidebar";

const App: FC = () => (
  <Layout>
    <Sidebar />
    <Page />
  </Layout>
);
export { App };
