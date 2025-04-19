import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { testLoginUserDetails } from "../Reducers/LoginSlice";
import "./LoginForm.css";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate  = useNavigate()

  const [loginUserDetails, setloginUserDetails] = useState({
    username: "",
    password: "",
    name: "",
  });

  const globalData = useSelector((globalStoreData) => globalStoreData);

  function handleUserDetails(event) {
    console.log("handleUserDetails");

    const name = event.target.name;
    const value = event.target.value;
    setloginUserDetails({
      ...loginUserDetails,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("handleSubmit");
    debugger;
    dispatch(
      testLoginUserDetails({
        username: loginUserDetails.username,
        password: loginUserDetails.password,
        name: loginUserDetails.name,
      })
    );
    if (
      loginUserDetails.username === globalData.LoginFormSlice.username &&
      loginUserDetails.password === globalData.LoginFormSlice.password
    ) {
      alert("Login Successful");
      navigate("/dashboard")
    } else {
      alert("Invalid Credentials");
    }
  }
  return (
    <div>
      <>
        {/* <div class="container">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address {loginUserDetails.name}
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              onChange={handleUserDetails}
              name="username"
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
              name="password"
            />
            <input
              type="name"
              id="inputPassword5"
              class="form-control"
              aria-describedby="passwordHelpBlock"
              onChange={handleUserDetails}
              name="name"
            />
          </div>
          <button className="btn btn-primary" onClick={handleSubmit}>
            Login
          </button>
        </div> */}

        <div class="center">
          <h1>Login {loginUserDetails.name}</h1>
          <form method="post">
            <div class="txt_field">
              <input
                type="email"
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
