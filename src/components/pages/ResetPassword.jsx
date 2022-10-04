import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {useParams } from "react-router-dom";
import { resetPassword } from '../../api/resetPassword';


const schema = yup.object({
  password: yup.string().max(255).required('Password is required'),
  passwordConfirmation: yup.string()
     .oneOf([yup.ref('password'), null], 'Passwords must match')
}).required();
const ResetPassword = () => {
  let params = useParams()
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const [isSending, setIsSending]= React.useState(false)
  const emailForgot = localStorage.getItem("emailForgot")
  const onSubmit = (data,e) => {
    e.preventDefault();
    setIsSending(true);
    resetPassword(JSON.stringify({Token: params.id, Password: data.password,Email: emailForgot}))
    .then(res=>{
      setIsSending(false)
      alert("successfull, return to login page!")
      // window.location.replace("/");
      
    })
    .catch(e=>{
      alert("faild")
      setIsSending(false)
    })
    
  }
  return (
    <div className="container-sm  shadow p-5 "  >
        <h2>Reset Password</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input {...register("password")} type="password" className="form-control"  required/>
              <p>{errors.password?.message}</p>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
              <input {...register("passwordConfirmation")} type="password" className="form-control"  required/>
              <p style={{color: "red"}}>{errors.passwordConfirmation?.message}</p>
            </div>
            
            <div className="mb-3 d-flex justify-content-between" >
              <button type="submit" style={isSending?{pointerEvents: "none"}:{}} className="btn btn-outline-success w-100" >{isSending?"Sending...":"Reset password"}</button>
            </div>
            
          </form>
    </div>
  )
}

export default ResetPassword