import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Breadcrumb, Space, Table, Button, Modal } from "antd";
import React from "react";
import { useGet } from "../api";

import { Layout } from "../Layout/Layout";

export const Users = () => {
  const { confirm } = Modal;
  const { fetchGet, isLoading, isError, result } = useGet();
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

  const addUser = () => {};
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
          <Button>update</Button>
          <Button onClick={showConfirm}>Delete</Button>
        </Space>
      ),
    },
  ];
  React.useEffect(() => {
    fetchGet("auth/listusers");
  }, []);
  console.log({ result });
  return (
    <Layout>
      <Breadcrumb style={{ marginLeft: "16px" }}>
        <Breadcrumb.Item>Users</Breadcrumb.Item>
      </Breadcrumb>
      <div className="p-[24px] min-h-[360px] bg-white m-[24px]">
        <div>
          {result && (
            <Table
              loading={isLoading}
              columns={columns}
              dataSource={result.error ? null : result}
            />
          )}
        </div>
      </div>
    </Layout>
  );
};
