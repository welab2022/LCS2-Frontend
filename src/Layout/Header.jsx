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
import { useMutation, useQuery } from "@tanstack/react-query";
import { getAdminInfoQuery, uploadAvatarMutation } from "../api/uploadAvatar";

export const Header = () => {
  let navigate = useNavigate();
  const [openModal, setOpenModal] = React.useState(false);
  const [file, setFile] = React.useState();
  const { name, email } = useLocalStore();
  const { fetchPost } = usePost();
  const { mutateAsync: handleUploadApi } = useMutation(uploadAvatarMutation);
  const { data, refetch: getAdminInfo } = useQuery(
    ["getAdminInfo"],
    () => getAdminInfoQuery({ email }),
    {
      enabled: false,
    }
  );
  const opts = [
    {
      title: "Edit Profile",
      cb: () => {
        setOpenModal(true);
        getAdminInfo();
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
  const itemDropdownUpload = (
    <div className="bg-gray-300 ">
      <label
        className="cursor-pointer"
        onChange={(e) => setFile(e.target.files[0])}
        htmlFor="file-upload"
      >
        Change Photo
        <input name="" type="file" id="file-upload" hidden />
      </label>
      <p className="cursor-pointer" onClick={() => setFile()}>
        Remove Photo
      </p>
    </div>
  );
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
          <p>Profile Photo</p>
          <div className="flex items-center">
            <div>
              <p className="font-semibold">Upload avatar</p>
              <div className="flex items-center">
                <Dropdown overlay={itemDropdownUpload} placement="topRight">
                  <div>
                    {file ? (
                      <img
                        className="w-[100px] h-[100px] object-cover"
                        src={URL.createObjectURL(file)}
                        alt="avatar"
                      />
                    ) : (
                      <div className="w-[100px] h-[100px] flex justify-center items-center bg-gray-300">
                        <PlusOutlined className="mr-1" /> Upload
                      </div>
                    )}
                  </div>
                </Dropdown>
                <p className="ml-[30px]">{data?.data?.email}</p>
              </div>
            </div>
          </div>
          <p className="border-t-[1px] border-gray-200 mt-[10px]">About you</p>
          <div className="mt-2">
            <p className="font-semibold">Full name</p>
            <Input
              placeholder="Full name"
              value={data?.data?.first_name + " " + data?.data?.last_name}
            />
          </div>
          <div>
            <p className="font-semibold">Password</p>
            <div className="flex justify-between">
              <Input.Password
                style={{ width: 250 }}
                placeholder="Password"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
              <Button>Change Password</Button>
            </div>
          </div>
          <div className="flex justify-center mt-[20px]">
            <p className="text-[10px]">Learning System Center</p>
          </div>
          <p>Last login: {data?.data?.last_login?.split("T")[0]}</p>
          <p>
            Password changed at:{" "}
            {data?.data?.password_changed_at?.split("T")[0]}
          </p>
        </div>
      </Modal>
    </>
  );
};
