import React from "react";
import {
  SearchOutlined,
  BellOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  PlusOutlined,
} from "@ant-design/icons";
import {
  Layout,
  AutoComplete,
  Input,
  Avatar,
  Menu,
  Dropdown,
  Modal,
  Upload,
  Button,
} from "antd";
import { useNavigate } from "react-router-dom";
import useLocalStore from "../hook/useLocalStorage";
import { usePost } from "../api";
import { useMutation } from "@tanstack/react-query";
import { uploadAvatarMutation } from "../api/uploadAvatar";

export const Header = () => {
  let navigate = useNavigate();
  const [openModal, setOpenModal] = React.useState(false);
  const [file, setFile] = React.useState();
  const { name, email } = useLocalStore();
  const { fetchPost } = usePost();
  const { mutateAsync: handleUploadApi } = useMutation(uploadAvatarMutation);
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
        fetchPost("auth/logout", {
          email: email,
        });
        window.localStorage.removeItem("email");
        window.localStorage.removeItem("name");
        navigate("/");
      },
    },
    {
      title: "Change password",
      cb: () => {
        navigate("/changepassword");
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
    <div className="p-4 w-[300px] border-[1px] border-black bg-white">
      <p>Account</p>
      <div className="flex justify-between border-b-[1px]">
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
  const handleSubmitModal = async () => {
    const formData = new FormData();
    formData.append("file", file);
    await handleUploadApi({ formData });
    setOpenModal(false);
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
  return (
    <>
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
        {menu}
      </Layout.Header>
      <Modal
        title="Edit your profile"
        open={openModal}
        onOk={handleSubmitModal}
        onCancel={() => setOpenModal(false)}
        okText={<div>Edit</div>}
      >
        <div className="p-4">
          <div className="flex items-center">
            <div>
              <p className="font-semibold">Upload avatar</p>
              <Upload
                name="originalFileName"
                beforeUpload={() => {
                  return false;
                }}
                onPreview={onPreview}
                showUploadList={false}
                onChange={(e) => {
                  setFile(e.file);
                }}
              >
                {file ? (
                  <img
                    src={URL.createObjectURL(file)}
                    alt="avatar"
                    className="w-[100px] h-[100px] object-cover"
                  />
                ) : (
                  <div className="w-[100px] h-[100px] flex justify-center items-center bg-gray-300">
                    <PlusOutlined className="mr-1" /> Upload
                  </div>
                )}
              </Upload>
            </div>
            <div className="ml-8">
              <Button onClick={() => setFile()}>Delete Image</Button>
            </div>
          </div>
          <div className="mt-2">
            <p className="font-semibold">Username</p>
            <Input placeholder="Username" />
          </div>
          <div>
            <p className="font-semibold">Password</p>
            <Input.Password
              placeholder="Password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </div>
          <div>
            <p className="font-semibold">Confirm Password</p>
            <Input.Password
              placeholder="Confirm Password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </div>
        </div>
      </Modal>
    </>
  );
};
