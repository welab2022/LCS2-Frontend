import React from 'react'
import { deleteUser } from '../../api/userApi'
import './Users.css'

const User = ({item}) => {
  const handleDelete = async()=>{
    await deleteUser(item.email).then(res=>{
     window.location.reload();
    }).catch(e=>console.log(e))
    
   }
  return (
    <tr>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <div className='func-btn'>
          <div className='delete'>
            <button className="delete-btn" type='submit' onClick={handleDelete}>Delete</button>
          </div>
        </div>
    </tr>
  )
}

export default User