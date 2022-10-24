import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import axiosClient from "../api/axiosClient";

export const Login = () => {
  let navigate = useNavigate();
  const auth = useMutation((values) => {
    return axiosClient.post("/signin", values);
  });

  const onFinish = (values) => {
    auth.mutate(values);
  };

  React.useEffect(() => {
    if (auth.isSuccess) {
      console.log(auth.data.data);
      const user = auth.data.data;
      localStorage.setItem("email", user.Data.email);
      localStorage.setItem(
        "name",
        `${user.Data.first_name} ${user.Data.last_name}`
      );
      localStorage.setItem("API", user.API);

      navigate("/");
    }
  }, [auth]);
  return (
    <div className="relative w-screen min-h-screen m-0 p-0 bg-[#e5e7eb]">
      <div className="absolute w-[500px] m-auto top-[150px] left-0 right-0 pt-[100px] pb-[100px] pl-[50px] pr-[50px] bg-[white]">
        {auth.error && (
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

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 6, span: 18 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
            <Button
              id="login"
              type="primary"
              htmlType="submit"
              style={{ width: "100%" }}
              loading={auth.isLoading}
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
