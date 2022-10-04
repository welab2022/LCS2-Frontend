import React ,{ useState } from 'react'
import { useParams } from "react-router";
import MainPage from '../Layout/MainPage'
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {newClass, updateClassData} from "../../data.js";
import { updateClass,createClass } from '../../api/classApi';


const ClassForm = () => {
    const params = useParams();
    const [data, setData] = useState(newClass);
    const [status, setStatus] = useState(0);// 0 not respone, 1 successfull, 2 failed
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
      if(params.id ==="new"){
        createClass(data).then(respone =>{
          setStatus(2);
         
          setTimeout(() => {
            setStatus(0)
          }, 500);
          })
        .catch(e=>{
          setStatus(2);
         
          setTimeout(() => {
            setStatus(0)
          }, 500);
        }

        );
      }
      else{
        updateClass(data).
        then(respone =>{
          setStatus(2);
         
          setTimeout(() => {
            setStatus(0)
          }, 500);
          })
        .catch(e=>{
          setStatus(2);
         
          setTimeout(() => {
            setStatus(0)
          }, 500);
        }

        );
      }
      
    }
  return (
    <MainPage>
    <div className="container-sm  shadow p-5 " >
        <div className="mx-auto" style={{color: "red ",width:"100px"}}>
        {status=== 1?  "Successful!":(status===2?"Failed!": "")}
        </div>
        <h2>{params.id ==="new"?"New class": "update class"}</h2>
        <form onSubmit={handleSubmit(onSubmit)} >
        <div className="mb-3">
              <label htmlFor="" className="form-label">Course</label>
                <select {...register("course")} defaultValue={params.id ==="new"?"":updateClassData.course} className="form-select" id="inputGroupSelect01">
                {       
                     data.courses?.map((item)=> <option value={item.id}>{item.title}</option>)
                  }
                  
                </select>
              
            </div>
            <div className="mb-3">
              <label htmlFor="" className="form-label">Teacher</label>
                <select {...register("teacher")} defaultValue={params.id ==="new"?"":updateClassData.teacher} className="form-select" id="inputGroupSelect01">  
                {       
                     data.teachers?.map((item)=> <option value={item.id}>{item.name}</option>)
                  }
                </select>
              
            </div>
            <div className="mb-3">
              <label htmlFor="" className="form-label">Location</label>
                <select {...register("location")} defaultValue={params.id ==="new"?"":updateClassData.location} className="form-select" id="inputGroupSelect01">
                  
                {       
                     data.locations?.map((item)=> <option value={item.id}>{item.address}</option>)
                  }
                </select>
              
            </div>
            <div className="mb-3">
              <label htmlFor="" className="form-label">Title</label>
              <input {...register("title")} type="text" className="form-control" defaultValue={params.id ==="new"?"":updateClassData.title} required />
              
            </div>
            <div className="mb-3">
              <label htmlFor="" className="form-label">Date</label>
              <input {...register("date")} type="text" className="form-control" defaultValue={params.id ==="new"?"":updateClassData.date}  required />
              
            </div>
            <div className="mb-3">
              <label htmlFor="" className="form-label">Time</label>
              <input {...register("time")} type="text" className="form-control" defaultValue={params.id ==="new"?"":updateClassData.time} required />
              
            </div>
            
            <div className="create-back" >
              <button id="submit" type="submit" className="create-btn">{params.id ==="new"?"Create":"Update"}</button>
              <button className="back-btn"><Link style={{ textDecoration: 'none', color: 'rgba(26, 0, 0, 1)'}} to="/classes">Back to Main Page</Link></button>
            </div>
            
            
            
          </form>
    </div>
        </MainPage>
  )
}

export default ClassForm