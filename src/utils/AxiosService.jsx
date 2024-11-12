import axios from 'axios'

let AxiosService = axios.create({
    baseURL:"https://fruits-and-vegies-backend-app.onrender.com",
    headers:{
        "Content-Type":"application/json"
    }
})

export default AxiosService