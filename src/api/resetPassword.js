import axiosClient from "./axiosClient";

const forgotPassword=(data)=>{
    const url ='/user/forgot-password';
    return axiosClient.post(url,data);
}

const resetPassword=(data)=>{
    const url ='/resetpassword';
    return axiosClient.post(url,data);
}

export {forgotPassword, resetPassword}