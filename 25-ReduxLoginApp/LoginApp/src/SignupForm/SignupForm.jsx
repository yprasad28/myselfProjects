import React from 'react'
import { useDispatch } from 'react-redux'
import { testRegisterDetails } from '../Reducers/LoginSlice'
// import { useNavigate } from "react-router-dom";

const SignupForm = () => {
    const dispatch = useDispatch()
    // const navigate  = useNavigate()

    const [registerDetails,setregisterDetails] = useState({
        FirstName: "",
        LastName: "",
        email: "",
        password: ""
    })

    function registerUserDetails(event){
        const name = event.target.name
        const value = event.target.value
        setregisterDetails({...registerDetails, [name] : value})
    }

    function registerSubmit(event){
        event.preventDefault();
        console.log(registerDetails,"registered")

        dispatch(testRegisterDetails({firstname : "Im hardcode Registered"}))
        
    }
  return (
    <div>
      <>
 <div>
   <div class="mb-3">
     <label for="exampleFormControlInput1" class="form-label">
       FirstName
     </label>
     <input
       type="email"
       class="form-control"
       id="exampleFormControlInput1"
       placeholder="name@example.com"
       onChange={registerUserDetails}
       name  = "FirstName"
     />
</div>
<div>
     <label for="inputPassword5" class="form-label">
       LastName
     </label>
     <input
       type="password"
       id="inputPassword5"
       class="form-control"
       aria-describedby="passwordHelpBlock"
       onChange={registerUserDetails}
       name  = "LastName"
     />
     <input
       type="email"
       id="inputPassword5"
       class="form-control"
       aria-describedby="passwordHelpBlock"
       onChange={registerUserDetails}
       name  = "email"
     />
      <input
       type="password"
       id="inputPassword5"
       class="form-control"
       aria-describedby="passwordHelpBlock"
       onChange={registerUserDetails}
       name  = "password"
     />

     
     </div>
     <button className="btn btn-primary" onClick={registerSubmit}>Login</button>
   </div>
 </>
    </div>
  )
}

export default SignupForm
