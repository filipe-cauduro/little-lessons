import { FC } from "react";

import { Layout } from "../layout/Layout";

import "../../globals.css";
import { Page } from "../page/Page";
import { Sidebar } from "../sidebar/Sidebar";
import { Toast } from "../toast/Toast";
import { NotificationContextProvider } from "../../contexts/NotificationContextProvider";

const App: FC = () => (
  <NotificationContextProvider>
    <Layout>
      <Toast />
      <Sidebar />
      <Page />
    </Layout>
  </NotificationContextProvider>
);
export { App };
