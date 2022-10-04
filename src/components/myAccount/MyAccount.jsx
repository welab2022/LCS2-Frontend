import React, { useState } from 'react'
import Menu from '../Layout/Menu'
import './myAccount.css'
import { Link } from "react-router-dom";
import {  useSelector  } from 'react-redux';
import { updateUser } from '../../api/userApi';

const MyAccount = () => {
  const nameLS = localStorage.getItem('name');
  const emailLS = localStorage.getItem('email');
  const [tab, setTab] = useState(true);
  const [nameDisplay, setNameDisplay] = useState(nameLS);

  const name =React.useRef()
  const currentUser = useSelector(state=>state.auth.currentUser);
  const handleMenu = ()=>{
    document.getElementById('main').classList.toggle('active');
    document.getElementById('menu').classList.toggle('active');
  
    }
    const togleMyaccount = ()=>{
      document.getElementById('account-menu').classList.toggle('active-display');
    }
    const handleLogout = ()=>{
      localStorage.clear();
      window.location.replace("/login");
      
    }
    const profileHandle =()=>{
      setTab(true)
    }
    const activeHandle =()=>{
      setTab(false)
    }
  
    const handleUpdateName = ()=>{
      updateUser(JSON.stringify({Name: name.current.value}),emailLS).then(res=>{
        localStorage.setItem("name",name.current.value)
        alert("successful")
        setNameDisplay(name.current.value)
      }).catch(e=>{
        alert("failed")
      })
    }
  return (
    <div className='mainpage'>
    <Menu></Menu>
    <div id='main' className='main'>
      <nav className="navbar navbar-expand-sm bg-light ">
                  <div className="container-fluid d-flex justify-content-between">
                    <button className="btn btn-outline-success" onClick={handleMenu}>Menu</button>
                    <div className="position-relative " style={{cursor: 'pointer'}} >
                      <div onClick={togleMyaccount} className="navbar-nav d-flex flex-row" id="account">
                            <img className="rounded-circle" src="https://avatars.githubusercontent.com/u/84139131?v=4" alt="" height="40px" width="40px"/>
                            <div  >
                            <p className="my-auto ms-3 "  style={{fontWeight: "bold"}}>{currentUser?currentUser.name:(nameLS?nameDisplay:" ")}</p>
                            <p className="my-auto ms-3 ">{currentUser?currentUser.email:(emailLS?emailLS:" ")}</p>
                            </div>                      
                      </div>
                      <div id="account-menu" className="list-group list-group-flush my-account-dropdown">
                      <Link style={{ textDecoration: 'none' }} to="/myaccount"><span className="list-group-item p-3 my-account-dropdown-item">My account</span></Link>
                        <span className="list-group-item p-3 my-account-dropdown-item" onClick={handleLogout}>Sign out</span>
                      </div>
                    </div>
                  </div>
      </nav>
      <div className="my-account">
        <div className='avatar-box d-flex flex-row'>
          <img className="rounded-circle" src="https://avatars.githubusercontent.com/u/84139131?v=4" alt="" height="150px" width="150px"/>
          <div className='name-box'>
            <h2 className="my-auto  ">{currentUser?currentUser.name:(nameLS?nameDisplay:" ")}</h2>
            <span>Member since 2022</span>
          </div>

        </div>
      <div className="myaccount-content">
        <span className='account-tab' style={tab?{fontWeight: "bold"}:{}} onClick={profileHandle}>Profile</span>
        <span className='account-tab'style={!tab?{fontWeight: "bold"}:{}} onClick={activeHandle}>Active</span>
        <hr />
        {tab?<div className="profile">
              <table className='table'>
                        <tbody>
                        <tr>
                              <td><b>Name</b></td>
                              <td><input ref={name} name="Name" defaultValue={nameDisplay}></input></td>
                              <td><botton className="btn btn-outline-success p-0" onClick={handleUpdateName}>Change</botton></td>
                          </tr> 
                          <tr>
                              <td><b>Email</b></td>
                              <td>{currentUser?currentUser.email:(emailLS?emailLS:" ")}</td>
                              
                          </tr>
                          <tr>
                              <td><b>Password</b></td>
                              <td>**************</td>
                              <td><button className="btn btn-outline-success p-0">Reset password</button></td>
                          </tr>   
                        </tbody>
                    </table>
            </div>:
          <div className="active"></div>
          }
          
        </div>
        {/* <form  >
          <div className="mb-3 ">
                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                <input type="text" className="form-control w-50" value={currentUser.name} required />
                <button id="submit" type="submit" className="btn btn-outline-success">Cancel</button>
                <button id="submit" type="submit" className="btn btn-outline-success">Change</button>
                
              </div>
             
             
   
          </form> */}
      </div>
      
    </div>
    
  </div>
  )
}

export default MyAccount