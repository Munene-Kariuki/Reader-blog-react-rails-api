import React, { useState } from "react";
import './Login_form.css';

function Login_form({onlogin}) {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  const [errors, setErrors] = useState([])

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
      <h1>Reader</h1>
      <form>
        <input placeholder="Username..." type='text' name="username" onChange={handleChange} value={formData.username} /> 
        <input placeholder="Password..." type='text' name="password" onChange={handleChange} value={formData.password} /> 
        <input type='submit' value='Login' />
      </form>
    </div>
  )
}

export default Login_form