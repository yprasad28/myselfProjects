import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { testLoginUserDetails } from "../../../Redux-toolkit/Reducers/LoginFormSlice";
// import { useDispatch } from 'react-redux';
// import { increment } from './Redux-toolkit/Reducers/LoginFormSlice';import React from 'react'

const LoginForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [loginUserDetails, setLoginUserDetails] =  useState({
    username:"",
    password:""
  })
debugger
  function handleUserDetails(event){
    console.log(event.target.value)
    const name = event.target.name
    setLoginUserDetails({...loginUserDetails, [name] : event.target.value})
  }


  function handleSubmit(event){
    event.preventDefault()
    dispatch(testLoginUserDetails({username: loginUserDetails.username, password: loginUserDetails.password}))
    if(loginUserDetails.username === username && loginUserDetails.password === password){
      navigate("/Dashboard")
      
    } else {
      alert("Invalid Credentials")
    }

  }
  return (
    <div>
       <>
    <div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          onChange={handleUserDetails}
          name  = "username"
        />
</div>
<div>
        <label for="inputPassword5" class="form-label">
          Password
        </label>
        <input
          type="password"
          id="inputPassword5"
          class="form-control"
          aria-describedby="passwordHelpBlock"
          onChange={handleUserDetails}
          name  = "password"
        />

        
        </div>
        <button className="btn btn-primary" onClick={handleSubmit}>Login</button>
      </div>
    </>
      
    </div>
  )
}

export default LoginForm

