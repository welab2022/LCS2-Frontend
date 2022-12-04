import React from "react";
import { Button, Form, Input, notification } from "antd";
import { useNavigate } from "react-router-dom";
import { usePost } from "../api";
import { Layout } from "../Layout/Layout";

export const AddUser = () => {
  let navigate = useNavigate();
  const { fetchPost, isLoading, result } = usePost();
  const email = localStorage.getItem("email");
  const openNotificationWithIcon = (type, message = "", des = "") => {
    notification[type]({
      message: message,
      description: des,
    });
  };
  const onFinish = (values) => {
    fetchPost("auth/adduser", values);
  };

  React.useEffect(() => {
    if (email !== "admin@example.com") {
      navigate("/");
    }
  }, [email, navigate]);
  React.useEffect(() => {
    if (result.Status === "error") {
      openNotificationWithIcon("error", result.Message);
    } else if (result.Status === "User added!") {
      openNotificationWithIcon("success", "Add user successfully");
      navigate("/");
    }
  }, [result, navigate]);
  return (
    <Layout>
      <div className="relative w-screen min-h-screen m-0 p-0 bg-[#e5e7eb]">
        <div className="absolute w-[700px] m-auto top-[150px] left-0 right-0 pt-[100px] pb-[100px] pl-[50px] pr-[50px] bg-[white]">
          <h1 className="text-center text-[40px] mb-[30px]">Add User</h1>

          <Form
            name="AddUser"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email",
                  min: 8,
                },
              ]}
            >
              <Input type="email" placeholder="Enter your email" />
            </Form.Item>

            <Form.Item
              label="First name"
              name="first_name"
              rules={[
                {
                  required: true,
                  message: "Please input first name",
                },
              ]}
            >
              <Input placeholder="Enter your first name" />
            </Form.Item>
            <Form.Item
              label="Last name"
              name="last_name"
              rules={[
                {
                  required: true,
                  message: "Please input last name",
                },
              ]}
            >
              <Input placeholder="Enter your last name" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message:
                    "Please input password again with minimum 8 character!",
                  min: 8,
                },
              ]}
            >
              <Input.Password placeholder="Enter your password again" />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
              <Button
                id="AddUser"
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
                loading={isLoading}
              >
                AddUser
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Layout>
  );
};
