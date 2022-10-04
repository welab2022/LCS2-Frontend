import React ,{ useEffect, useState }from 'react'
import { useParams } from "react-router";
import MainPage from '../Layout/MainPage'
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./Location.css"
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { createLocation, getLocations, updateLocation } from '../../api/locationApi';


const schema = yup.object({
  Address: yup.string(),
  Status: yup.boolean()
}).required();
export const LocationForm = () =>{
    const [currentLocation, setCurrentLocation] = useState()
    const params = useParams();
    const { register, handleSubmit,reset } = useForm({
      defaultValues: currentLocation,
      resolver: yupResolver(schema)
    });
    const [status, setStatus] = useState(0);// 0 not respone, 1 successfull, 2 failed
    const onSubmit = data => {
      if(params.id ==="new"){
        console.log(data)
        createLocation(JSON.stringify(data)).then(respone =>{
          setStatus(1);
          reset();
          setTimeout(() => {
            setStatus(0)
          }, 2000);
          })
        .catch(e=>{
          setStatus(2);
         
          setTimeout(() => {
            setStatus(0)
          }, 2000);
        }

        );
      }
      else{
        updateLocation(JSON.stringify(data),params.id).
        then(respone =>{
          setStatus(1);
         
          setTimeout(() => {
            setStatus(0)
          }, 2000);
          })
        .catch(e=>{
          setStatus(2);
         
          setTimeout(() => {
            setStatus(0)
          }, 2000);
        }

        );
      }
      
    }
    useEffect(()=>{
      getLocations().then(respone=>{
        if(params.id!=="new"){
            const dataLocation = respone.find(e=>e.LocationID==params.id)
            setCurrentLocation(dataLocation);
            reset(currentLocation)
        }
        
      }).catch(e=>{console.log(e)})
    },[])
    return ( <MainPage>
    {/* <Link to="/students" className="btn btn-outline-success p-1">Back</Link> */}
    <div className="container-sm  shadow p-5 " >
      <div className="mx-auto" style={{color: "red ",width:"100px"}}>
      {status=== 1?  "Successful!":(status==2?"Failed!": "")}
      </div>
      <h2>{params.id ==="new"?"New location": "update location"}</h2>
      <form onSubmit={handleSubmit(onSubmit)} >
         <div className="mb-3">
            <label className="form-label">Address</label>
            <input {...register("Address")} type="text" className="form-control" defaultValue={params.id ==="new"?"":currentLocation?.Address}  required />
           
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">Status</label>
              <select {...register("Status")} className="form-select" defaultValue={currentLocation?.Status} >  
           
                <option value={true}>Open</option>
                <option value={false}>Close</option>
              
              </select>
            
          </div>
          
          <div className="create-back" >
            <button id="submit" type="submit" className="create-btn">{params.id ==="new"?"Create":"Update"}</button>
            <button className="back-btn"><Link style={{ textDecoration: 'none', color: 'rgba(26, 0, 0, 1)'}} to="/locations">Back to Locations Page</Link></button>
          </div>
          
        </form>
  </div>
      </MainPage>
)
}
