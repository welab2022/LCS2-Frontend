import React from "react";
import { SearchOutlined, BellOutlined } from "@ant-design/icons";
import { Layout, AutoComplete, Input, Avatar, Menu, Dropdown } from "antd";
import { useNavigate } from "react-router-dom";
import useLocalStore from "../hook/useLocalStorage";
import axiosClient from "../api/axiosClient";

export const Header = () => {
  let navigate = useNavigate();
  const { name } = useLocalStore();

  const opts = [
    {
      title: "Logout",
      cb: () => {
        axiosClient.post("/logout");
        window.localStorage.removeItem("email");
        window.localStorage.removeItem("API");
        window.localStorage.removeItem("name");

        navigate("/");
      },
    },
  ];
  const menu = (
    <Menu>
      {opts.map((item, key) => {
        return (
          <Menu.Item key={key} onClick={item.cb}>
            {item.title}
          </Menu.Item>
        );
      })}
    </Menu>
  );
  return (
    <Layout.Header>
      <div className="flex justify-between items-center w-full max-h-[64px]">
        <div className="flex justify-between items-center w-[400px]">
          <div className="flex justify-between font-bold text-[32px] text-center  text-[white]  ">
            LCS
          </div>
          <AutoComplete
            style={{ width: "100%", maxWidth: "250px" }}
            // filterOption={false}
            // options={options}
            // onSearch={(value) => setValue(value)}
            // onSelect={(_val, option) => {
            //   push(option.label.props.to);
            // }}
          >
            <Input suffix={<SearchOutlined />} placeholder="Quick search" />
          </AutoComplete>
        </div>

        {/* <Dropdown  placement="bottomRight" arrow>
      
    </Dropdown> */}
        <div className="text-[white] max-h-[64px]">
          <BellOutlined className="text-[32px] mr-4" />
          <Dropdown overlay={menu} placement="bottomRight" arrow>
            <Avatar
              size="large"
              src={"https://avatars.githubusercontent.com/u/84139131?v=4"}
            />
          </Dropdown>

          <span id="login" className="ml-2 font-bold">
            {name}
          </span>
        </div>
      </div>
    </Layout.Header>
  );
};
