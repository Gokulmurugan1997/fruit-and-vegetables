import React, { useCallback } from 'react';
import Button from "react-bootstrap/Button";
import { Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import ApiRoutes from "../utils/ApiRoutes";
import AxiosService from "../utils/AxiosService";
import toast from "react-hot-toast";

function AddCart() {
  let navigate = useNavigate();

  let handleCart = useCallback(async (e) => {
    e.preventDefault();

    try {
      let formData = new FormData(e.target);
      let data = Object.fromEntries(formData);
            console.log(data)
      if (data.product && data.cost && data.image) {
        let res = await AxiosService.post(ApiRoutes.ADDCART.path, data);
        if (res.status === 200) {
          toast.success(res.data.message);
          navigate("/home");
        } else {
          navigate('/seller/login');
        }
      } else {
        toast.error("Please fill in all required fields.");
      }

    } catch (error) {
      toast.error(error.response?.data?.message || error.message || "Something went wrong");
    }
  }, []);

  return (
    <div className="sellProduct">
      <div>
        <h1 className="login_header">Fruits and Veggies</h1>
      </div>
      <div>
        <Form onSubmit={handleCart} method="post">
          <Form.Group className="mb-3" controlId="formProductName">
            <Form.Label className="data">Product Name</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter product name" 
              name="product" 
              className="input" 
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formCost">
            <Form.Label className="data">Cost/kg</Form.Label>
            <Form.Control 
              type="number" 
              placeholder="Enter cost per kg" 
              name="cost" 
              className="input" 
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formImageUrl">
            <Form.Label className="data">Image URL</Form.Label>
            <Form.Control 
              type="url" 
              placeholder="Enter image URL" 
              name="image" 
              className="input" 
              required
            />
          </Form.Group>

          <Form.Group className="button">
            <p>
              <Button variant="primary" type="submit" className="data-2">
                <b>Submit</b>
              </Button>
            </p>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}

export default AddCart;
