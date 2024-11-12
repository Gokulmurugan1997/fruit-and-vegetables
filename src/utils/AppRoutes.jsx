import Login from "../controller/Login";
import Signup from "../controller/Signup";
import ForgetPassword from "../controller/ForgetPassword";
import ResetPassword from "../controller/ResetPassword";
import Home from "../controller/home";
import { Navigate } from "react-router-dom";
import Intro from "../controller/Intro";
import SellerForgetPassword from "../controller/seller/forgetPassword.jsx";
import SellerLogin from "../controller/seller/login.jsx"
import SellerSignup from "../controller/seller/signin.jsx"
import SellerResetPassword from "../controller/seller/resetPassword.jsx"
import AddCart from "../controller/addCart.jsx";


const AppRoutes = [
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/signup",
        element:<Signup/>
    },
    {
        path:"/forgetpassword",
        element:<ForgetPassword/>
    },
    {
        path:"/Resetpassword",
        element:<ResetPassword/>
    },
    {
        path:"/home",
        element:<Home/>
    },
    {
        path:"*",
        element:<Navigate to='login'/>
    },
    {
        path:'/intro',
        element:<Intro/>
    },
    {
        path:"/seller/login",
        element:<SellerLogin/>
    },
    {
        path:"/seller/signup",
        element:<SellerSignup/>
    },
    {
        path:"/seller/forgetpassword",
        element:<SellerForgetPassword/>
    },
    {
        path:"/Resetpassword",
        element:<SellerResetPassword/>
    },
    {
        path:"/addCart",
        element:<AddCart/>
    }
]
export default AppRoutes