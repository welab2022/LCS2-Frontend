import axiosClient from "./axiosClient";



const importLocation=(data)=>{
    const url ='/importlocation';
    return axiosClient.post(url,data);
}
const getLocations =()=>{
    const url="/locations";
    return axiosClient.get(url);
}

const getLocation =(id)=>{
    const url="/location"+ id;
    return axiosClient.get(url);
}
const createLocation =(data)=>{
    const url="/location";
    return axiosClient.post(url,data);
}



const updateLocation = (data,param)=>{
    const url ='/location/edit/' + param;
    return axiosClient.put(url,data);
}
const deleteLocation = (id)=>{
    const url ='/location/'+id;
    return axiosClient.delete(url);
}
export {importLocation, getLocations,getLocation,updateLocation,createLocation,deleteLocation}