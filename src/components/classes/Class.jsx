import React from 'react'
import { Link } from "react-router-dom";
import "./Class.css"

const Class = ({item}) => {
  return (
    <tr>
        <td>{item.ClassID}</td>
        <td>{item.Course}</td>
        <td>{item.Teacher}</td>
        <td>{item.Location}</td>
        <td>{item.Class_title}</td>   
        <td>{item.Class_date}</td>   
        <td>{item.Class_time}</td>
      <div className='class-page'>
        <div className='update'>
          <button className="update-btn"><Link style={{ textDecoration: 'none', color: 'rgba(26, 0, 0, 1)'}} to={"/classes/" + item.ClassID}>Update</Link></button>
        </div>
        <div className='delete2'> 
          <button className="delete-btn2" type='submit'>Delete</button> 
        </div> </div>
      </tr>
  )
}

export default Class