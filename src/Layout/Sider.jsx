import React from "react";
import { Menu, Layout } from "antd";
import { DesktopOutlined, CompassOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Locations", "location", <CompassOutlined />),
  getItem("Classes", "class", <DesktopOutlined />),
];
export const Sider = () => {
  const [collapsed, setCollapsed] = React.useState(false);
  const navigate = useNavigate();
  return (
    <Layout.Sider
      theme="light"
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      breakpoint="lg"
    >
      <Menu
        theme="light"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={items}
        onClick={(item) => {
          switch (item.key) {
            default:
              navigate("/locations");
          }
        }}
      />
    </Layout.Sider>
  );
};
