import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Breadcrumb, Space, Table, Button, Modal, notification } from "antd";
import React from "react";
import { useGet, usePost } from "../api";
import { useNavigate } from "react-router-dom";

import { Layout } from "../Layout/Layout";

export const Users = () => {
  let navigate = useNavigate();
  const {
    fetchPost,
    isLoading: resetPasswordLoading,
    result: resetPasswordResult,
  } = usePost();
  const { confirm } = Modal;
  const { fetchGet, isLoading, result } = useGet();
  const openNotificationWithIcon = (type, message = "", des = "") => {
    notification[type]({
      message: message,
      description: des,
    });
  };
  const showConfirm = () => {
    confirm({
      title: "Do you Want to delete this loaction?",
      icon: <ExclamationCircleOutlined />,
      onOk() {
        console.log("OK");
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };
  const resetPassword = (email) => {
    fetchPost("auth/resetpwd", {
      email: email,
    });
  };
  const columns = [
    {
      title: "User",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Last active",
      dataIndex: "updated_at",
      key: "updated_at",
    },
    {
      title: "Status",
      dataIndex: "active",
      key: "active",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => resetPassword(record.email)}>
            Reset password
          </Button>
          <Button onClick={showConfirm}>Delete</Button>
        </Space>
      ),
    },
  ];
  React.useEffect(() => {
    fetchGet("auth/listusers");
    // eslint-disable-next-line
  }, []);
  React.useEffect(() => {
    if (resetPasswordResult.error) {
      openNotificationWithIcon("error", resetPasswordResult.error);
    }
  }, [resetPasswordResult]);
  return (
    <Layout>
      <Breadcrumb style={{ marginLeft: "16px" }}>
        <Breadcrumb.Item>Users</Breadcrumb.Item>
      </Breadcrumb>
      <div className="p-[24px] min-h-[360px] bg-white m-[24px]">
        <Button onClick={() => navigate("/users/add")} type="primary" danger>
          add user
        </Button>
        <div>
          {result && (
            <Table
              loading={isLoading || resetPasswordLoading}
              columns={columns}
              dataSource={result.error ? null : result}
            />
          )}
        </div>
      </div>
    </Layout>
  );
};
