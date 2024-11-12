import React from 'react'
import Logout from './Logout'
import { useNavigate } from 'react-router-dom'

function Navbar({cart,setcart}) {
    let navigate = useNavigate()
  return <>
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="#!">Shop</a>
                <button className="btn btn-outline-dark" onClick={()=>navigate('/seller/login')}>
                            Sell Product
                </button>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse cart" id="navbarSupportedContent">
                    <form className="d-flex">
                        <button className="btn btn-outline-dark" onClick={()=>setcart(0)}>
                            <i className="bi-cart-fill me-1"></i>
                            Cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill">{cart}</span>
                        </button>
                    </form>
                </div>
            </div>
            <Logout/>
        </nav>
  
  </>
}
export default Navbar