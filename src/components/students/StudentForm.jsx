import React ,{ useEffect, useState }from 'react'
import { useParams } from "react-router";
import MainPage from '../Layout/MainPage'
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { updateStudent,createStudent, getStudent } from '../../api/studentApi.js';
import "./Students.css"


const StudentForm = () => {
    const [currentStudent, setCurrentStudent] = useState()
    const params = useParams();
    const { register, handleSubmit,reset } = useForm({
      defaultValues: currentStudent,
    });
    const [status, setStatus] = useState(0);// 0 not respone, 1 successfull, 2 failed
    const onSubmit = data => {
      if(params.id ==="new"){
        createStudent(JSON.stringify(data)).then(respone =>{
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
      else{

        updateStudent(JSON.stringify(data),params.id).
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
      getStudent(params.id).then(respone=>{
        setCurrentStudent(respone);
        reset(currentStudent)
      }).catch(e=>{console.log(e)})
    },[params.id])
  return (
    <MainPage>
      {/* <Link to="/students" className="btn btn-outline-success p-1">Back</Link> */}
      <div className="container-sm  shadow p-5 " >
        <div className="mx-auto" style={{color: "red ",width:"100px"}}>
        {status=== 1?  "Successful!":(status===2?"Failed!": "")}
        </div>
        <h2>{params.id ==="new"?"New student": "update student"}</h2>
        <form onSubmit={handleSubmit(onSubmit)} >
           <div className="mb-3">
              <label className="form-label">First Name</label>
              <input {...register("First_name")} type="text" className="form-control" defaultValue={params.id ==="new"?"":currentStudent?.First_name}  required />
             
            </div>
            <div className="mb-3">
              <label className="form-label">Last Name</label>
              <input {...register("Last_name")} type="text" className="form-control" defaultValue={params.id ==="new"?"":currentStudent?.Last_name}  required />
            </div>
            <div className="mb-3">
              <label className="form-label">Birthday</label>
              <input {...register("DoB")} type="date" className="form-control" defaultValue={params.id ==="new"?"":currentStudent?.DoB}
           min="1950-01-01" max="2018-12-31"  required />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="form-label">Gender</label>
                <select {...register("Gender")} className="form-select" defaultValue={params.id ==="new"?"":currentStudent?.Gender} >  
             
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                
                </select>
              
            </div>
            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input {...register("PhoneNo")} type="tel" className="form-control" pattern="[0-9]{10}" defaultValue={params.id ==="new"?"":currentStudent?.PhoneNo}  required />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input {...register("Email")} type="email" className="form-control" defaultValue={params.id ==="new"?"":currentStudent?.email} required />
            </div>
           
            <div className="mb-3">
              <label className="form-label">Note</label>
              <input {...register("Note")} type="text" className="form-control"  defaultValue={params.id ==="new"?"":currentStudent?.Note}/>
             
            </div>
            
            {/* <div className="mb-3 d-flex" >
              <button id="submit" type="submit" className="btn btn-outline-success w-100">Save</button>

            </div> */}
            
            <div className="create-back" >
              <button id="submit" type="submit" className="create-btn">{params.id ==="new"?"Create":"Update"}</button>
              <button className="back-btn"><Link style={{ textDecoration: 'none', color: 'rgba(26, 0, 0, 1)'}} to="/classes">Back to Main Page</Link></button>
            </div>
            
          </form>
    </div>
        </MainPage>
  )
}

export default StudentForm