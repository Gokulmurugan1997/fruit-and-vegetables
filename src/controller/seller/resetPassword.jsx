import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import ApiRoutes from "../../utils/ApiRoutes";
import AxiosService from "../../utils/AxiosService";
import { useNavigate } from 'react-router-dom';

function SellerResetPassword() {
    let[password, setPassword] = useState()
    let[confirmPassword, setConfirmPassword] = useState()
    let token = useParams()
    let navigate = useNavigate()

    let handleMail = async(e)=>{
        e.preventDefault()
        try {
          if(password===confirmPassword){
            let res = await AxiosService.post(ApiRoutes.SELLERRESETPASSWORD.path,{password, token})
            if(res.status===200){
                toast.success("password changed")
                navigate('/seller/login')
            }
            else{toast.error("something wrong")}
          }else{toast.error("password and confirmPassword not same")
          }
        
        } catch (error) {
            toast.error(error.response.data.message||error.message)
        }
    }
  return <div className='container1'>
    <div  className='login_wrapper'>
  <div className='login_header'>
  <h1>ResetPassword</h1>

  </div>

    <Form.Group className="mb-3" controlId="formBasicEmail" action="/action_page.php" method="post">
      <Form.Label className='data'>New Password</Form.Label>
      <Form.Control type="password" placeholder="Enter New password" name='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} required/>
      <Form.Label className='data'>ConfirmPassword</Form.Label>
      <Form.Control type="password" placeholder="Confirm password" name='confirmPassword' value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}} required/>
    </Form.Group>

    <Button variant="primary" type="submit" onClick={handleMail}>
      Submit
    </Button>
    </div>
  </div>
}

export default SellerResetPassword