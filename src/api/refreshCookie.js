export const refreshCookie = async () => {
  await fetch("http://localhost:8081/api/auth/refresh", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "X-API-Key": "sWOmNsF8Ht9lE9wMU9cW7w==n",
    },
    credentials: "include",
  });
};
