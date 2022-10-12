import React, { useState } from 'react'
import Error from './Error';

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

  //Handle form submit 
  function handleSubmit(e){
    e.preventDefault() 
    setIsLoading(true) 
    fetch('/signup', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      setIsLoading(false)
      if (res.ok) {
        res.json().then((user) => onlogin(user))
      }
      else {
        res.json().then((err) => setErrors(err.errors))
      }
    });
    setFormData({
      username: "",
      password: "",
      password_confirmation: "",
      profile_image: ""
    });
  }


  return (
    <div>
      <form onSubmit={handleSubmit} >
        <input placeholder='Username...' type='text' name='username' onChange={handleChange} value={formData.username} /> 
        <input placeholder='Password...' type='password' name='password' onChange={handleChange} value={formData.password} /> 
        <input placeholder='Retype password...' type='password' name='password_confirmation' onChange={handleChange} value={formData.password_confirmation} /> 
        <input placeholder='Image url...' type='text' name='profile_image' onChange={handleChange} value={formData.profile_image} /> 
        <input type='submit' value={isLoading ? "Signing up..." : "Sign up"} />
      </form>
      {errors.map((error) => {
        return <Error key={error} error={error} />
      })}
      <hr className="hr-login" /> 
      <p className="sign-up-redirect" >Already have an account? <button className="sign-up-redirect-btn" onClick={() => setShowLogin(true)} >Log in</button></p>
    </div>
  )
}

export default Sign_up_form