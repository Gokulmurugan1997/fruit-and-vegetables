import React, { useEffect } from "react";
import  Button  from "react-bootstrap/Button";
import Form from "react-bootstrap/Form"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ApiRoutes from "../utils/ApiRoutes";
import AxiosService from "../utils/AxiosService";
import toast from "react-hot-toast";
import { useCallback } from "react";

function Signup()  {
    let navigate = useNavigate()
useEffect(()=>{
    sessionStorage.clear()
},[])

let handleSignin = useCallback(async(e)=>{
    e.preventDefault()
    try {
        let formData = new FormData(e.target)
        let data = Object.fromEntries(formData)

        if(data.email&&data.password&& data.name){
                let res = await AxiosService.post(ApiRoutes.SIGNUP.path, data)
        
        if(res.status===200){
            
            toast.success(res.data.message) 
            navigate("/login")
        }
    }else{
        toast.error("input Name Email and Password")
    }
    } catch (error) {
        toast.error(error.response.data.message||error.message)
    }
},[])
return <div className="container1">
<div  className='login_wrapper'>
<div className='login_header'>
<h1>Sign In</h1>
</div>
        <Form onSubmit={handleSignin} action="/action_page.php" method="post">
        <Form.Group>
        <Form.Label className="data">Name</Form.Label>
        <Form.Control type="Name" placeholder="Name" name='name' required/>
      </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="data">Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name='email' required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="data">Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name='password' required/>
            </Form.Group>
  
            <Button variant="primary" type="submit">
                Submit
            </Button>
   
        </Form>
    </div>
    </div>
}


export default Signup

