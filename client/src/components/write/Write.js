import React, { useState } from 'react'
import './Write.css'
import Error from '../Error'

function Write({user, addArticle}) {

  const [formData, setFormData] = useState({
    user_id: user.id,
    title: "",
    topic: "",
    story: "",
    time: ""
  })
  const [errors, setErrors] = useState([])

  //Update form data
  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  //Handle artcile submit
  function handleSubmit() {
    // e.preventDefault()
    fetch('/articles', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      }, 
      body: JSON.stringify(formData),
    }).then((res) => {
      if (res.ok) {
        res.json() 
        .then((article) => addArticle(article));
      } 
      else {
        res.json() 
        .then((err) => setErrors(err.errors));
      }
    });

    //Clear form
    setFormData({
      user_id: user.id,
      title: "",
      topic: "",
      story: "",
      time: ""    
    })
  }

  return (
    <div>
      <h2 className='write-header'>Post your story:</h2>
      <form onSubmit={handleSubmit} >
        <input placeholder='Title...' type='text' name='title' onChange={handleChange} value={formData.title} /> 
        <input placeholder='Topic...' type='text' name='topic' onChange={handleChange} value={formData.topic} />
        <textarea placeholder='Tell your story...' type='text' name='story' onChange={handleChange} value={formData.story} className='tell-story' /> 
        <input placeholder='Time to read..' type='number' name='time' onChange={handleChange} value={formData.time} /> 
        <input type='submit' value='Post story' />
      </form>
      {errors.map((error) => {
        return <Error key={error} error={error} />
      })}
    </div>
  )
}

export default Write