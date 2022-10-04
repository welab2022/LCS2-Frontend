import axiosClient from "./axiosClient";
export const updateUser = (data,param)=>{
    const url ='/user/' + param;
    return axiosClient.put(url,data);
}
export const createUser = (data)=>{
    const url ='/user' ;
    return axiosClient.post(url,data);
}

export const getUsers = ()=>{
    const url='/users';
    return axiosClient.get(url);
}

export const deleteUser = (param)=>{
    const url='/user/'+param;
    return axiosClient.delete(url);
}