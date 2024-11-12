import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import toast from "react-hot-toast";
import ApiRoutes from "../../utils/ApiRoutes";
import AxiosService from "../../utils/AxiosService";
import React, { useState } from "react";



function SellerForgetPassword() {
    let[email, setEmail] = useState()

let handleMail = async(e)=>{
    e.preventDefault()

    try {
        let res = await AxiosService.post(ApiRoutes.SELLERFORGETPASSWORD.path,{email})
        if(res.status===200){
            toast.success("mail sent")
        }
        else{toast.success("mail not sent")}
    } catch (error) {
        toast.error(error.response.data.message)
    }
}


  return <div className="container1">
    <div  className='login_wrapper'>
  <div className='login_header'>
  <h1>ForgetPassword</h1>
  </div>
  <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label className="data">Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>
   
    <Button variant="primary" type="submit" onClick={handleMail}>
      Submit
    </Button>
  
    </div>
  </div>
}

export default SellerForgetPassword