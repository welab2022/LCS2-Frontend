import React from "react";
import { SearchOutlined, BellOutlined } from "@ant-design/icons";
import {
  Layout,
  AutoComplete,
  Input,
  Avatar,
  Menu,
  Dropdown,
  Modal,
} from "antd";
import { useNavigate } from "react-router-dom";
import useLocalStore from "../hook/useLocalStorage";
import axios from "axios";

export const Header = () => {
  let navigate = useNavigate();
  const [openModal, setOpenModal] = React.useState(false);
  const [file, setFile] = React.useState();
  const { name } = useLocalStore();

  const opts = [
    {
      title: "Edit Profile",
      cb: () => {
        setOpenModal(true);
      },
    },
    {
      title: "Logout",
      cb: () => {
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
  const profile = (
    <div className="p-4 w-[300px] border-[1px] border-black">
      <p>Account</p>
      <div className="flex justify-between border-b-[1px] border-black">
        <Avatar
          size="large"
          src={"https://avatars.githubusercontent.com/u/84139131?v=4"}
        />
        <div>
          <p>Nguyen quoc dung</p>
          <p>admin@example.com</p>
        </div>
      </div>
      {menu}
    </div>
  );
  //function
  const handleSubmitModal = () => {
    console.log({ file });
    const formData = new FormData();
    formData.append("file", file);
    fetch("http://localhost:8081/api/auth/upload", {
      method: "POST",
      headers: {
        "Content-type": "multipart/form-data",
        "X-API-Key": "sWOmNsF8Ht9lE9wMU9cW7w==n",
        // Cookie: "a47c768b-99a0-44b8-9f59-8e09c3315bf5",
      },
      credentials: "include",
      body: formData,
    });
  };
  return (
    <div>
      <Layout.Header>
        <div className="flex justify-between items-center w-full max-h-[64px]">
          <div className="flex justify-between items-center w-[400px]">
            <div className="flex justify-between font-bold text-[32px] text-center  text-[white]  ">
              LCS
            </div>
            <AutoComplete style={{ width: "100%", maxWidth: "250px" }}>
              <Input suffix={<SearchOutlined />} placeholder="Quick search" />
            </AutoComplete>
          </div>
          <div className="text-[white] max-h-[64px]">
            <BellOutlined className="text-[32px] mr-4" />
            <Dropdown overlay={profile} placement="bottomRight" arrow>
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
      <Modal
        title="Edit your profile"
        open={openModal}
        onOk={handleSubmitModal}
        onCancel={() => setOpenModal(false)}
      >
        <div>
          <input
            id="originalFileName"
            type="file"
            required
            label="Document"
            name="originalFileName"
            onChange={async (e) => {
              console.log({ e });
              setFile(e.target.files[0]);
            }}
            size="small"
            variant="standard"
          />
        </div>
      </Modal>
    </div>
  );
};
