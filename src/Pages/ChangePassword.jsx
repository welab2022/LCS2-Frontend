import React from "react";
import { Button, Form, Input, notification } from "antd";
import { useNavigate } from "react-router-dom";
import { usePost } from "../api";
import { Layout } from "../Layout/Layout";
import useLocalStore from "../hook/useLocalStorage";

export const ChangePassword = () => {
  let navigate = useNavigate();
  const { email } = useLocalStore();
  const { fetchPost, isLoading, result } = usePost();
  const openNotificationWithIcon = (type, message = "", des = "") => {
    notification[type]({
      message: message,
      description: des,
    });
  };
  const onFinish = (values) => {
    console.log({ values });
    if (values.new_password !== values.confirm_password) {
      openNotificationWithIcon("warning", "New password not match");
      return;
    }
    delete values.confirm_password;
    fetchPost("auth/changepwd", {
      email: email,
      ...values,
    });
  };
  React.useEffect(() => {
    if (result.error) {
      openNotificationWithIcon("error", "Fail to change password");
    }
    if (result.Status) {
      openNotificationWithIcon("success", "Password changed successfully");
      navigate("/");
    }
  }, [result, navigate]);
  return (
    <Layout>
      <div className="relative w-screen min-h-screen m-0 p-0 bg-[#e5e7eb]">
        <div className="absolute w-[700px] m-auto top-[150px] left-0 right-0 pt-[100px] pb-[100px] pl-[50px] pr-[50px] bg-[white]">
          <h1 className="text-center text-[40px] mb-[30px]">Change password</h1>

          <Form
            name="changePassword"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="Current password"
              name="old_password"
              rules={[
                {
                  required: true,
                  message:
                    "Please input your password with minimum 8 character!",
                  min: 8,
                },
              ]}
            >
              <Input.Password placeholder="Enter your password" />
            </Form.Item>

            <Form.Item
              label="New password"
              name="new_password"
              rules={[
                {
                  required: true,
                  message:
                    "Please input new password with minimum 8 character!",
                  min: 8,
                },
              ]}
            >
              <Input.Password placeholder="Enter your new password" />
            </Form.Item>
            <Form.Item
              label="Confirm password"
              name="confirm_password"
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
                id="ChangePassword"
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
                loading={isLoading}
              >
                ChangePassword
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Layout>
  );
};
