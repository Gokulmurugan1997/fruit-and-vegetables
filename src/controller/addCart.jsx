import React from 'react'
import  Button  from "react-bootstrap/Button";
import { Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ApiRoutes from "../utils/ApiRoutes";
import AxiosService from "../utils/AxiosService";
import toast from "react-hot-toast";
import { useCallback } from "react";



function AddCart() {
    let navigate = useNavigate()
    let handleCart = useCallback(async(e)=>{
            e.preventDefault()
        try {
            let formData = new FormData(e.target)
            let data = Object.fromEntries(formData)

            if(data.product && data.cost && data.image){
                    let res = await AxiosService.post(ApiRoutes.ADDCART.path,data)

                    if(res.status===200){
                        toast.success(res.data.message)
                        navigate("/home")
                    }else{navigate('/seller/login')}
            }
            
        } catch (error) {
            toast.error(error.response.data.message || error.message)
        }
        
    },[])
  return <div className='sellProduct'>
    <div>
    <h1 className='login_header'>Sell product</h1>
    </div>
    <div>
    <Form onSubmit={handleCart} method="post">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="data">Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name='email' className="input" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="data">Product Name</Form.Label>
                            <Form.Control type="product" placeholder="Enter product name" name='product' className="input" required/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className="data">Cost</Form.Label>
                            <Form.Control type="Cost" placeholder="Cost" name='cost' className="input" required/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="data">Image Url</Form.Label>
                            <Form.Control type="url" placeholder="Url Link" name='image' className="input" required/>
                        </Form.Group>
                        <Form.Group className="button">
                        <p><Button variant="primary" type="submit" className="data-2">
                        <b>Submit</b>
                        </Button></p>
                        </Form.Group>
            </Form>
    </div>
  </div>
}

export default AddCart
