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
