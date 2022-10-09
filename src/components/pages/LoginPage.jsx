import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useDispatch, useSelector  } from 'react-redux';
import { fetchLogin, } from '../../freatures/auth/authSlice';
import { useNavigate  } from 'react-router-dom';
import './LoginPage.css';
import Footer from './Footer';

const schema = yup.object({
  email: yup.string().email('Must be a valid email').max(255).required('Email is required'),
  password: yup.string().max(255).required('Password is required'),
}).required();

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginStatus = useSelector(state=>state.auth.status);
  const currentUser = useSelector(state=>state.auth.currentUser);
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  useEffect(()=>{
    if(loginStatus === "succeeded"){
      console.log(currentUser)
      localStorage.setItem('name',currentUser.name);
      localStorage.setItem('email',currentUser.email)
      return navigate();
    }
    
  },[loginStatus])
  const onSubmit = (data) => {
    dispatch(fetchLogin(JSON.stringify(data)));
  };
  return (
   
    <div className="Login">
      <div className='form-box'>
        <div className='button-box'>
          <div id='btn'></div>
            <a href="/login" className='Login-btn'>Login</a>
            <a href="/register" className='Register-btn'>Register</a>          
          </div>            
        <div className='social-icons'>
             <img src="https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.344/static/media/google-logo.e086107b.svg" alt=""></img> 
             <img src="https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.344/static/media/microsoft-logo.42b61fa1.svg" alt=""></img>
             <img src="https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.344/static/media/apple-logo.4f2453fb.svg" alt=""></img>
        </div>
          {(loginStatus == "failed")?<p style={{color: "red", textAlign:"center"}}>Incorrect email or password!</p>:"" }

         <form onSubmit={handleSubmit(onSubmit)} id='login' className='input-group' >
            <input {...register("email")} type='email' className="input-box" placeholder='Enter your email' required></input>
            <p>{errors.email?.message}</p>
            <input {...register("password")} type='password' className="input-box" placeholder='Enter your password' required></input>
            <p>{errors.password?.message}</p>
            <button type='submit' id="loginSubmit" className="submit-btn3">{loginStatus==='loading'?'Logging...':'Login'}</button>
            <a href="/forgotpassword" className='forgot'><i>Forgot your password ?</i></a>
         </form>
        </div> 
 <Footer />
      </div>
  
 )
}

export default LoginPage