import React from 'react'
import { Link } from "react-router-dom";
import { deleteStudent } from '../../api/studentApi';
import "./Students.css"


const Student = ({item}) => {
  
    const handleDelete = async()=>{
     await deleteStudent(item.StudentID).then(res=>{
      window.location.reload();
     }).catch(e=>console.log(e))
     
    }
  return (
    <tr>
        <td>{item.StudentID}</td>
        <td>{item.Last_name + " " + item.First_name}</td>
        <td>{item.DoB}</td>
        <td>{item.Gender}</td>
        <td>{item.email}</td>   
        <td>{item.PhoneNo}</td>   
        <td>{item.Note}</td>   
        <div className='student-page'>
        <div className='update1'>
          <button className="update-student-btn"><Link style={{ textDecoration: 'none', color: 'rgba(26, 0, 0, 1)'}} to={"/students/" + item.StudentID}>Update</Link></button>
        </div>
        <div className='delete3'> 
          <button className="delete-btn3" type='submit' onClick={handleDelete}>Delete</button> 
        </div> </div>
    </tr>
  )
}

export default Student