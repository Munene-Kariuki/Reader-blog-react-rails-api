import React, { useState } from 'react'

function Sign_up_form({setShowLogin, onlogin}) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    password_confirmation: "",
    profile_image: ""
  });
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //update form data
  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  }


  return (
    <div>
      <form>
        <input placeholder='Username...' type='text' name='username' onChange={handleChange} value={formData.username} /> 
        <input placeholder='Password...' type='text' name='password' onChange={handleChange} value={formData.password} /> 
        <input placeholder='Retype password...' type='text' name='password_confirmation' onChange={handleChange} value={formData.password_confirmation} /> 
        <input placeholder='Image url...' type='text' name='profile_image' onChange={handleChange} value={formData.profile_image} /> 
        <input type='submit' value={isLoading ? "Signing up..." : "Sign up"} />
      </form>
      <hr className="hr-login" /> 
      <p className="sign-up-redirect" >Don't have an account? <button className="sign-up-redirect-btn" onClick={() => setShowLogin(true)} >Log in</button></p>
    </div>
  )
}

export default Sign_up_form