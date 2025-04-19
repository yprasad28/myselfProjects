import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


import "./Login.css";
import { testLoginDetails } from "../../features/auth/LoginFormSlice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginUserDetails, setLoginUserDetails] = useState({
    username: "",
    password: "",
  });
 debugger 
 const username = useSelector((state) => state.auth)
 console.log("globalState", username)
 function handleUserDetails(event){
  const name= event.target.name 
  const value= event.target.value
  setLoginUserDetails({...loginUserDetails, 
    
    [name]: value});
 }
 console.log("after update", loginUserDetails)

 function handleSubmit(event){
  event.preventDefault();
  console.log("onClick", loginUserDetails)

  
  dispatch(testLoginDetails({username:loginUserDetails.username, password:loginUserDetails.password}))
  if(loginUserDetails.username === "Prasad@gmail.com" && loginUserDetails.password === "123456"){
    alert("Login Successful")
     navigate("/dashboard")
  } else {
    alert("Invalid Credentials")
  }
  
 }

  return (
    <div>
      <>
        <div class="center">
          <h1>Login </h1>

          <form method="post">
            <div class="txt_field">
              <input
                type="text"
                onChange={handleUserDetails}
                name="username"
                required
              />
              <span></span>
              <label>Username</label>
            </div>
            <div class="txt_field">
              <input
                type="password"
                onChange={handleUserDetails}
                name="password"
                required
              />
              <span></span>
              <label>Password</label>
            </div>
            <div class="pass">Forgot Password?</div>
            <input type="submit" onClick={handleSubmit} value="Login" />
            <div class="signup_link">
              Not a member? <a href="#">Signup</a>
            </div>
          </form>
        </div>
      </>
    </div>
  );
};

export default LoginForm;
