import React from 'react'
import { useState } from 'react';
import {  useSelector  } from 'react-redux';
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    
    const currentUser = useSelector(state=>state.auth.currentUser);
    const nameLS = localStorage.getItem('name');
    const emailLS = localStorage.getItem('email');
    const handleToggle =()=>{
        document.getElementById('toggle').classList.toggle('show')
    }
    const handleMain = ()=>{
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
  return (
    <div className='Navbar'>
        <header>
          <div className='button'>
              <button className="btn" onClick={handleMain} ><i class="fas fa-bars"></i></button>
            </div>
            
            <div className="Collapse-menu" >
              <ul className="navbar-menu" onClick={handleToggle} id='menu'>
            <div className=" dropdown-toggle" >
              --------
            </div>
              <ul id='toggle' className="dropdown-menu" aria-labelledby="navbarDropdown">
               <li><a className="dropdown-item" href="#">Students</a></li>
                <li><a className="dropdown-item" href="#">Courses</a></li>
                 </ul>
              </ul>
            </div>

            <div className='search-container'>
              <form action='#' method='get' className='search-bar'>
                <input type="search" placeholder="Search for Enrollments, Courses, Students, etc" />
                <button className="btn" type="submit"><i class="fas fa-search"></i></button>
              </form>
            </div>

            <div onClick={togleMyaccount} className='User-account' id='account'>
                <div className='account-dropdown'>
                  <img className="rounded-circle" style={{cursor: 'pointer'}} src="https://avatars.githubusercontent.com/u/84139131?v=4" alt="" height="55px" width="55px"/>
                    <div className='account-content'>
                      <Link to="/myaccount"><a href='#' onClick={togleMyaccount}> My Account</a></Link>
                      <a href='#' onClick={handleLogout}>Create a Team</a>
                      <a href='#' onClick={handleLogout}>Log out</a>
                    </div>
                  </div>
                <div>
                    <h5>{currentUser?currentUser.name:(nameLS?nameLS:" ")}</h5>
                    <small>{currentUser?currentUser.email:(emailLS?emailLS:" ")}</small>
                </div>
              
            </div>
        </header>
    </div>
  )
}
export default Navbar




