import React from "react";
import { SearchOutlined, BellOutlined } from "@ant-design/icons";
import {
  Layout,
  AutoComplete,
  Input,
  Avatar,
  Menu,
  Dropdown,
  notification,
} from "antd";
import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import useLocalStore from "../../hook/useLocalStorage";
import { usePost } from "../../api";
import { useQuery } from "@tanstack/react-query";
import { getAdminAvatar, getAdminInfoQuery } from "../../api/uploadAvatar";
import ModalEditInfo from "./component/modalEditInfo";
import ModalChangePassword from "./component/modalChangePassword";

export const Header = () => {
  let navigate = useNavigate();
  const [openModal, setOpenModal] = React.useState(false);
  const [openModalChangePassword, setOpenModalChangePassword] =
    React.useState(false);

  const { name, email } = useLocalStore();
  const { fetchPost } = usePost();

  const { data, refetch: getAdminInfo } = useQuery(
    ["getAdminInfo"],
    () => getAdminInfoQuery({ email }),
    {
      enabled: false,
    }
  );
  const {
    fetchPost: fetchResetPassword,
    // isLoading: resetPasswordLoading,
    result: resetPasswordResult,
  } = usePost();
  const { data: resultAvatar, refetch: getAvatar } = useQuery(
    ["getAdminAvatar"],
    () => getAdminAvatar({ email }),
    {
      enabled: false,
    }
  );
  const resetPassword = (email) => {
    fetchResetPassword("auth/resetpwd", {
      email: email,
    });
  };
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
    {
      title: "Reset password",
      cb: () => {
        resetPassword(email);
      },
    },
  ];
  if (email === "admin@example.com") {
    opts.push({
      title: "Users",
      cb: () => {
        navigate("/users");
      },
    });
  }
  //useEffect
  React.useEffect(() => {
    getAvatar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  React.useEffect(() => {
    if (resetPasswordResult.error) {
      openNotificationWithIcon("error", resetPasswordResult.error);
    }
  }, [resetPasswordResult]);
  //render item

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
      <div
        onClick={() => navigate("/")}
        className="flex justify-between border-b-[1px] cursor-pointer"
      >
        <Avatar size="large" src={resultAvatar?.data?.Base64} />
        <div>
          <p>Nguyen quoc dung</p>
          <p>admin@example.com</p>
        </div>
      </div>
      {menu}
    </div>
  );
  const openNotificationWithIcon = ({ type, description }) => {
    notification[type]({
      message: "Notification Change Password",
      description: description,
    });
  };

  //function

  return (
    <>
      <Layout.Header>
        <div className="flex justify-between items-center w-full max-h-[64px]">
          <div className="flex justify-between items-center w-[400px]">
            <div className="flex justify-between items-center">
              <Avatar size="large" shape="square" src={logo} />
              <span className="font-bold text-[32px] text-center ml-3 text-[white]">
                LCS
              </span>
            </div>
          </div>

          <div className="text-[white] max-h-[64px]">
            <AutoComplete
              style={{ width: "100%", maxWidth: "250px", marginRight: "20px" }}
            >
              <Input suffix={<SearchOutlined />} placeholder="Quick search" />
            </AutoComplete>
            <BellOutlined className="text-[32px] mr-4" />
            <Dropdown overlay={profile} placement="bottomRight" arrow>
              <Avatar size="large" src={resultAvatar?.data?.Base64} />
            </Dropdown>
            <span id="login" className="ml-2 font-bold">
              {name}
            </span>
          </div>
        </div>
        {menu}
      </Layout.Header>
      <ModalEditInfo
        openNotificationWithIcon={openNotificationWithIcon}
        getAvatar={getAvatar}
        openModal={openModal}
        setOpenModal={setOpenModal}
        resultAvatar={resultAvatar}
        data={data}
        setOpenModalChangePassword={setOpenModalChangePassword}
      />
      <ModalChangePassword
        openModalChangePassword={openModalChangePassword}
        openNotificationWithIcon={openNotificationWithIcon}
        setOpenModalChangePassword={setOpenModalChangePassword}
      />
    </>
  );
};
