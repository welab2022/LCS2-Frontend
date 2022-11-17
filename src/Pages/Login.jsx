import React from "react";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { usePost } from "../api";

export const Login = () => {
  let navigate = useNavigate();
  const { fetchPost, isLoading, isError, result } = usePost();
  const onFinish = (values) => {
    fetchPost("auth/signin", values);
  };
  React.useEffect(() => {
    if (result.Status === "success") {
      localStorage.setItem("email", result.Data.email);
      localStorage.setItem(
        "name",
        `${result.Data.first_name} ${result.Data.last_name}`
      );
      navigate("/");
    }
  }, [result, navigate]);

  return (
    <div className="relative w-screen min-h-screen m-0 p-0 bg-[#e5e7eb]">
      <div className="absolute w-[500px] m-auto top-[150px] left-0 right-0 pt-[100px] pb-[100px] pl-[50px] pr-[50px] bg-[white]">
        {isError && (
          <div className="text-center text-[red] text-[20px] font-bold">
            Login failed, please try again!
          </div>
        )}
        <h1 className="text-center text-[40px] mb-[30px]">
          Learning System Center
        </h1>

        <Form
          name="basic"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input type="email" placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
            <Button
              id="login"
              type="primary"
              htmlType="submit"
              style={{ width: "100%" }}
              loading={isLoading}
            >
              Login
            </Button>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
            <div className="flex justify-between">
              <p>Forgot password</p>
              <p>Register</p>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
