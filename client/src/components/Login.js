import React, { useState } from 'react'
import './Login.css'
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

function Login({onlogin}) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      <h1 className="login-header">Reader</h1>
      {showLogin? (
        <LoginForm onlogin={onlogin} setShowLogin={setShowLogin}  />
      ):(
        <SignUpForm onlogin={onlogin} setShowLogin={setShowLogin} />
      )
      }
    </>
  )
}

export default Login