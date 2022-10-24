import React from "react";
import { useNavigate } from "react-router";

export const PrivatePage = ({ children }) => {
  const navigate = useNavigate();
  const isLogin = localStorage.getItem("API");
  React.useEffect(() => {
    if (!isLogin) navigate("login");
  }, [isLogin]);

  return isLogin && children;
};
