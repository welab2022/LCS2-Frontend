import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { forgotPassword } from '../../api/resetPassword';
import './ForgotPassword.css';
import Footer from './Footer';

const schema = yup.object({
  email: yup.string().email('Must be a valid email').max(255).required('Email is required'),
}).required();

const ForgotPassword = () => {
  const [isSending, setIsSending]= React.useState(false)
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  }); 
  

  const onSubmit = (data,e) => {
      e.preventDefault();
      setIsSending(true);
      localStorage.setItem("emailForgot", data.email)
      forgotPassword(JSON.stringify(data))
      .then(res=>{
        setIsSending(false)
        alert("successfull, please check your email!");
        window.location.replace("/login");
      })
      .catch(e=>{
        alert("faild")
        setIsSending(false)
      })
  }

  return (
    <div className="ForgotP">
        <div className='form-box2'>       
         <div className='Title-name'>
         <img width="202" height="76" src="https://chiphan.com/wp-content/uploads/2022/03/cropped-test-2.png" class="custom-logo" alt="" sizes="100vw"></img>
          <hr className='line1'></hr>
          <h3>Forgot Password</h3>
          </div>  
          <form onSubmit={handleSubmit(onSubmit)} id='forgot' className='input-group2'>          
            <label htmlFor="exampleInputEmail1" className="form-label"> <i class="fas fa-lock">Email address:</i></label>
            <input {...register("email")} type='email' className="input-box2" aria-describedby="emailHelp" placeholder='Enter your email' required></input>
            <p>{errors.email?.message}</p>
              <button type='submit' style={isSending?{pointerEvents: "none"}:{}} className="submit-btn2">{isSending?"Sending...":"Send"}</button>
            <hr></hr>
            <a href='/Login' className='accounts2'><ul>Back to Login</ul></a>
          </form>
        </div> 
        <Footer/>
    </div>

      )
  }
export default ForgotPassword