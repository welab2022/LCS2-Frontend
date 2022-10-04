import axiosClient from "./axiosClient";


const loginApi =(data)=> {
    const url ='/login';
    return axiosClient.post(url,data);
}

export default loginApi;