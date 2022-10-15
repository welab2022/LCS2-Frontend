import React from "react";
import { Header } from "./Header";
import { Sider } from "./Sider";
import { Footer } from "./Footer";
import { Layout as AntLayout } from "antd";

export const Layout = (props) => {
  return (
    <AntLayout
      style={{
        minHeight: "100vh",
      }}
    >
      <Header></Header>

      <AntLayout>
        <Sider></Sider>
        <AntLayout>
          <AntLayout.Content style={{ margin: "16px 0" }}>
            {props.children}
          </AntLayout.Content>
          <Footer></Footer>
        </AntLayout>
      </AntLayout>
    </AntLayout>
  );
};
