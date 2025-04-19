import React, { useContext } from 'react'
import { dataContext } from './LoginForm'

const Dashboard = () => {
    debugger
    const dataReceived = useContext(dataContext)
    console.log("dataReceived: ", dataReceived)
  return (
    <div>
      {/* <h1>im Dashboard {userId}</h1>
      
      <h3>{passId}</h3> */}
      <h3>im dashboard</h3>
    </div>
  )
}

export default Dashboard
