import React from "react";
import { refreshCookie } from "./refreshCookie";

export const useGet = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [result, setResult] = React.useState(undefined);
  const fetchGet = async (path) => {
    setIsLoading(true);
    setIsError(false);
    const respone = await fetch("http://localhost:8081/api/" + path, {
      headers: {
        "Content-type": "application/json",
        "X-API-Key": "sWOmNsF8Ht9lE9wMU9cW7w==n",
      },
      credentials: "include",
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
    setResult(respone);
    return respone;
  };

  return { isLoading, isError, fetchGet, result };
};
