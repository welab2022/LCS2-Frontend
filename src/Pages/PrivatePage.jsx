import React from "react";
import { useNavigate } from "react-router";

export const PrivatePage = ({ children }) => {
  const navigate = useNavigate();
  const email = localStorage.getItem("email");

  React.useEffect(() => {
    if (!email) navigate("login");
  }, [email, navigate]);

  return email && children;
};
