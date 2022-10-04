import React from 'react'
import './Location.css';
import { Link } from "react-router-dom";
import { deleteLocation } from '../../api/locationApi';

const Location = ({item}) => {
  const handleDelete = async()=>{
   await deleteLocation(item.LocationID).then(res=>{
    window.location.reload();
   }).catch(e=>console.log(e))
   
  }
  return (
    <tr>
        <td>{item.LocationID}</td>
        <td>{item.Address}</td>
        <td>{item.Status?"Open": "Close"}</td>
        <td>{item.CreatedAt}</td>
        <div className='location-page'>
          
        <button className="update-student-btn"><Link style={{ textDecoration: 'none', color: 'rgba(26, 0, 0, 1)'}} to={"/locations/" + item.LocationID}>Update</Link></button>
          <div className='delete1'>
           <button className="delete-btn1" type='submit' onClick={handleDelete}>Delete</button>
          </div>
        </div>
    </tr>
  )
}

export default Location