import React from 'react'
import './UserArticle.css'

function UserArticle({article}) {
  const {title, topic, story, time} = article
  const [update, setUpdate] = useState(false)

  function handleDelete() {
    console.log("delete")
  }

  function handleUpdate() {
    setUpdate(!update)
    console.log("Updated")
  }

  return (
    <div className='article-card'>
      <div className='article-content'>
        <h3>{title}</h3>
        <p> {story.substring(0, 350)}... </p>
        <p><strong>Topic: </strong> {topic} </p>
        <p><strong>Time to read:</strong> {time} </p> 
        <div className='icons'>
          <i className="fa-solid fa-pen-to-square" onClick={handleUpdate} ></i>
          <i className="fa-sharp fa-solid fa-trash" onClick={handleDelete} ></i>
        </div>
      </div>
      {update? <UpdateForm book={book} handleUpdate={bookUpdate} />: null }
    </div>
  )
}

export default UserArticle