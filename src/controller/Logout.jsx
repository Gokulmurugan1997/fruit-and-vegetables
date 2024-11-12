import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import React, { useCallback } from 'react'

function Logout() {
    let navigate = useNavigate()

    let handleLogout = useCallback(async()=>{
            navigate("/intro")
    }, [])

  return <div>
        <Button onClick={handleLogout}>Logout</Button>
  </div>
}

export default Logout