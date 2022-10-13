import React, {useState} from 'react'
import './UpdateForm.css'

function UpdateForm({article, handleUpdate}) {
  const {user, title, topic, story, time, id} = article;
  const [formData, setFormData] = useState({
    id: id, 
    user_id: user.id, 
    title: title,
    topic: topic,
    story: story,
    time: time
  }); 

  //update form data
  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  //handle update
  function handleSubmit(e) {
    e.preventDefault()
    handleUpdate(formData)
  }

  return (
    <div>
      <h3>Edit story:</h3>
      <form className='update-form' onSubmit={handleSubmit}>
        <input placeholder='Title' name='title' type='text' onChange={handleChange} value={formData.title} />
        <input placeholder='Topic' name='topic' type='text' onChange={handleChange} value={formData.topic} />
        <input placeholder='Time' name='time' type='number' onChange={handleChange} value={formData.time} />
        <textarea placeholder='Story' name='story' type='text' onChange={handleChange}  value={formData.story} />
        <input type='submit' value='Update' />
      </form>
    </div>
  )
}

export default UpdateForm