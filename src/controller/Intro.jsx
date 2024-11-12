import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Intro() {

  let navigate = useNavigate()
  return<div className='intro'>
        

            <h1>Welcome to Shop</h1>
           <br />
          
            <Button onClick={()=>navigate('/login')}  className='buy'>Buy Product</Button> 
              <br />
            <Button onClick={()=>navigate('/seller/login')} className='sell'>Sell Product</Button> 
          
      
        </div>
}

export default Intro