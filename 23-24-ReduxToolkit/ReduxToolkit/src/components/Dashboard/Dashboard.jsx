import React from 'react'
import { useSelector } from 'react-redux'

const Dashboard = () => {

  const loginData = useSelector(globalstore => globalstore)
  console.log("Dashboard", loginData.LoginFormSlice.presentState.user)
  return (
    <div>
      <h1>Welcome {loginData.LoginFormSlice.presentState.user}</h1>
    </div>
  )
}

export default Dashboard