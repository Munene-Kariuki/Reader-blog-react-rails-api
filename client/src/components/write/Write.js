import React, { useState } from 'react'
import './Write.css'

function Write({user}) {

  const [formData, setFormData] = useState({
    user_id: user.id,
    title: "",
    topic: "",
    story: "",
    time: ""
  })

  //Update form data
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
      <h2 className='write-header'>Post your story:</h2>
      <form>
        <input placeholder='Title...' type='text' name='title' onChange={handleChange} value={formData.title} /> 
        <input placeholder='Topic...' type='text' name='topic' onChange={handleChange} value={formData.topic} />
        <textarea placeholder='Tell your story...' type='text' name='story' onChange={handleChange} value={formData.story} className='tell-story' /> 
        <input placeholder='Time to read..' type='number' name='time' onChange={handleChange} value={formData.time} /> 
        <input type='submit' value='Post story' />
      </form>
    </div>
  )
}

export default Write