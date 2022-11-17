import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Breadcrumb, Space, Table, Button, Modal } from "antd";
import React, { useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { axiosAuthorized } from "../api/axiosClient";
import { CSVLink } from "react-csv";
import { useReactToPrint } from "react-to-print";
import { Layout } from "../Layout/Layout";

export const Locations = () => {
  const { confirm } = Modal;
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

  const columns = [
    {
      title: "LocationID",
      dataIndex: "LocationID",
      key: "id",
    },
    {
      title: "Address",
      dataIndex: "Address",
      key: "address",
    },
    {
      title: "Status",
      dataIndex: "Status",
      key: "status",
      render: (_, record) => {
        if (record.Status) return <p>Open</p>;
        return <p>Close</p>;
      },
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
  const componentRef = useRef();

  const { isLoading, error, data } = useQuery(
    ["getLocation"],
    async () => {
      return await axiosAuthorized.get("/locations");
    },
    {
      onSuccess: (res) => {
        const result = {
          status: res.status + "-" + res.statusText,
          headers: res.headers,
          data: res.data,
        };
        console.log({ result });
      },
    }
  );
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <Layout>
      <Breadcrumb style={{ marginLeft: "16px" }}>
        <Breadcrumb.Item>Locations</Breadcrumb.Item>
      </Breadcrumb>
      <div className="p-[24px] min-h-[360px] bg-white m-[24px]">
        {data?.data && !error && (
          <CSVLink
            filename={"Location.csv"}
            data={data?.data}
            className="btn btn-primary"
          >
            Export to CSV
          </CSVLink>
        )}
        <Button onClick={handlePrint} type="primary" danger>
          {" "}
          Export to PDF{" "}
        </Button>

        <div ref={componentRef}>
          <Table
            loading={isLoading}
            columns={columns}
            dataSource={data?.data}
          />
        </div>
      </div>
    </Layout>
  );
};
