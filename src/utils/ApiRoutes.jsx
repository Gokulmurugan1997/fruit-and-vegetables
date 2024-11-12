const ApiRoutes = {
    LOGIN:{
        path:"/shop/login",
        authenticate: false
    },
    SIGNUP:{
        path:"/shop/signup",
        authenticate:false
    },
    FORGETPASSWORD:{
        path:"/shop/forgetPassword",
        authenticate:false
    },
    RESETPASSWORD:{
        path:"/shop/resetPass",
        authenticate:false
    },
    SELLERLOGIN:{
        path:"/seller/login",
        authenticate:false
    },
    SELLERSIGNUP:{
        path:"/seller/signup"
    },
    SELLERFORGETPASSWORD:{
        path:"/seller/forgotpassword"
    },
    SELLERRESETPASSWORD:{
        path:"/seller/resetpass"
    },
    ADDCART:{
        path:"/seller/addcart",
        authenticate:false
    },
    GETCART:{
        path:"/seller/getcart",
        authenticate:false
    }
}

export default ApiRoutes