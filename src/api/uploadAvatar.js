import axios from "axios";

export const uploadAvatarMutation = async ({ formData }) => {
  return await axios({
    method: "post",
    url: "http://localhost:8081/api/auth/upload",
    data: formData,
    headers: {
      "Content-Type": "multipart/form-data",
      "X-API-Key": "sWOmNsF8Ht9lE9wMU9cW7w==n",
    },
    withCredentials: true,
  });
};
export const getAdminInfoQuery = ({ email }) => {
  return axios({
    method: "get",
    url: `http://localhost:8081/api/auth/user/${email}`,
    headers: {
      "Content-Type": "multipart/form-data",
      "X-API-Key": "sWOmNsF8Ht9lE9wMU9cW7w==n",
    },
    withCredentials: true,
  });
};
export const getAdminAvatar = ({ email }) => {
  return axios({
    method: "get",
    url: `http://localhost:8081/api/auth/avatar/${email}`,
    headers: {
      "Content-Type": "multipart/form-data",
      "X-API-Key": "sWOmNsF8Ht9lE9wMU9cW7w==n",
    },
    withCredentials: true,
  });
};

export const changePasswordMutation = async ({
  email,
  old_password,
  new_password,
}) => {
  return await axios({
    method: "post",
    url: "http://localhost:8081/api/auth/changepwd",
    data: {
      email,
      old_password,
      new_password,
    },
    headers: {
      "Content-Type": "multipart/form-data",
      "X-API-Key": "sWOmNsF8Ht9lE9wMU9cW7w==n",
    },
    withCredentials: true,
  });
};
