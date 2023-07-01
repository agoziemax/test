import React from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
   const navigate = useNavigate();
  return (
    <div>
      This is the landing page
      <button onClick={() => navigate('/Dashboard')}>Login</button>
    </div>
  )
}

export default Login
