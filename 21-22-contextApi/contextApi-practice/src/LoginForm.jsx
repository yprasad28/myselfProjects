import React, { createContext, useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Dashboard from './Dashboard'

const LoginForm = () => {
    const [username,setUsername] = useState("")
      const [password,setPassword] = useState("")
      const navigate = useNavigate()
    
    
      function enterUser(event){
        setUsername(event.target.value)
      }
    
      function enterPassword(event){
        setPassword(event.target.value)
      }
    
      function onClickButton(){
        console.log("Clicked button")
        if(username === "Prasad" && password === "123123"){
          alert("LoginSuccesfully")
          navigate('/dash')
        }
        else{
            alert("Invalid Credentials")
        }
      }
  return (
    <>
    <div className="container">
      <label for="exampleFormControlInput1" class="form-label">
        Email address
      </label>
      <input
        type="email"
        class="form-control"
        onChange={enterUser}
        id="exampleFormControlInput1"
        placeholder="name@example.com"
      />
    </div>
    <label for="inputPassword5" class="form-label">
      Password
    </label>
    <input
      type="password"
      id="inputPassword5"
      class="form-control"
      onChange={enterPassword}
      aria-describedby="passwordHelpBlock"
    />
    <div id="passwordHelpBlock" class="form-text">
      Your password must be 8-20 characters long, contain letters and numbers,
      and must not contain spaces, special characters, or emoji.
    </div>
    <button className="btn btn-primary" onClick={onClickButton}>Login</button> <br/>
    {username} <br/>
    {/* {password} */}
    <ParentContext/>
    {/* <Dashboard userId={username} passId = {password}/> */}
  </>
  )
}

export default LoginForm


export const dataContext = createContext()
const isGraduted = "yes in 2024"

function ParentContext(){
  return (
    <dataContext.Provider value={isGraduted}>
      <Dashboard />
    </dataContext.Provider>
  )
}