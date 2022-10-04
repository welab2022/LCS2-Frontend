import axiosClient from "./axiosClient";


const getStudent = (id)=>{
    const url ='/student/'+id;
    return axiosClient.get(url);
}

const getAllStudent = ()=>{
    const url ='/students';
    return axiosClient.get(url);
}

const updateStudent = (data,param)=>{
    const url ='/student/' + param;
    return axiosClient.put(url,data);
}
const createStudent = (data)=>{
    const url ='/student';
    return axiosClient.post(url,data);
}

const deleteStudent = (param)=>{
    const url ='/student/'+param;
    return axiosClient.delete(url);
}

export {getStudent,getAllStudent,updateStudent,deleteStudent,createStudent}