import { Link } from "react-router-dom";
import React from 'react';
import './menu.css';

const Menu = () => {
    const handleLogout = ()=>{
        localStorage.clear();
        window.location.replace("/login");
      }
    return (
    
      <div id="menu" className="menu">
        <aside>
            <div className="top">
                <div className="logo">
                    <img width="202" height="76" src="https://chiphan.com/wp-content/uploads/2022/03/cropped-test-2.png" class="custom-logo" alt="" sizes="100vw"></img>
                </div>
            </div>
            <hr className="hr-top"></hr>
            <div className="sidebar">
                <a href='/locations' className="active">
                    <i class="fas fa-location-arrow"></i>
                    <h3>Locations</h3>
                </a>
                <a href="/enrollments">
                    <i class="fas fa-file-signature"></i>
                    <h3>Entrollments</h3>
                </a>
                <a href="/courses">                   
                    <i class="fas fa-book"></i>
                    <h3>Courses</h3>
                </a>
                <a href="/students">                    
                    <i class="fas fa-user-graduate"></i>
                    <h3>Students</h3>
                </a>
                <a href="/kitas">
                    <i class="fas fa-certificate"></i>
                    <h3>Kitas</h3>
                </a>
                <a href="/equipments">
                    <i class="fas fa-tools"></i>
                    <h3>Equipments</h3>
                </a>
                <a href="/classes">
                    <i class="fas fa-chalkboard-teacher"></i>
                    <h3>Classes</h3>
                </a>
                <a href="/users">
                    <i class="fas fa-user-edit"></i>
                    <h3>Users</h3>
                </a>
                <hr className="hr-bot"></hr>
                <a href="#" onClick={handleLogout}>
                <i class="fas fa-sign-out-alt"></i>   
                    <h3>Logout</h3>
                </a>
            </div>

        </aside> 
    </div>
    )
  }
  
  export default Menu