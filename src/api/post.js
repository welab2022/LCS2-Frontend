import React from "react";
import { refreshCookie } from "./refreshCookie";

export const usePost = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [result, setResult] = React.useState({});
  const fetchPost = async (path, data) => {
    setIsLoading(true);
    setIsError(false);
    const response = await fetch("http://localhost:8081/api/" + path, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "X-API-Key": "sWOmNsF8Ht9lE9wMU9cW7w==n",
      },
      credentials: "include",
      body: JSON.stringify(data),
    })
      .then((res) => {
        setIsLoading(false);
        if (!res.ok) setIsError(true);
        return res.json();
      })
      .catch((err) => {
        setIsError(true);
        setIsLoading(false);
      });
    setResult(response);
    return response;
  };

  return { isLoading, isError, fetchPost, result };
};
