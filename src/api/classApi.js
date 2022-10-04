import axiosClient from "./axiosClient";


const getClass = (data)=>{
    const url ='/class';
    return axiosClient.get(url,data);
}

const getAllClass = ()=>{
    const url ='/allclass';
    return axiosClient.get(url);
}

const updateClass = (data)=>{
    const url ='/updateclass';
    return axiosClient.post(url,data);
}
const createClass = (data)=>{
    const url ='/createclass';
    return axiosClient.post(url,data);
}

const deleteClass = (data)=>{
    const url ='/classes';
    return axiosClient.delete(url,data);
}

export {getClass,getAllClass,updateClass,deleteClass,createClass}