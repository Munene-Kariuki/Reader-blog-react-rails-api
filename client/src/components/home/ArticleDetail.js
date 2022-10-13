import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './ArticleDetail.css'
import Comment from './Comment';

function ArticleDetail({user}) {
  const params = useParams(); 
  const [data, setData] = useState([])
  const {id, title, story, comments} = data;
  const [formData, setFormData] = useState({
    article_id: id, 
    user_id: user.id,
    comment: ""
  })

  //fetch article data
  useEffect(() => {
    fetch(`/articles/${params.id}`) 
      .then((res) => res.json()) 
      .then((r) => setData(r)) 
  }, []);

  //update form data
  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch('/comments', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      }, 
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((r) => console.log(r))

    setFormData({
      article_id: id, 
      user_id: user.id,
      comment: ""
    })
  }


  return (
    <div className='article-detail'>
      <hr className='article-detail-hr' />
      <div className='content'>
        <h2>{title}</h2>
        <p>{story}</p>
      </div>
      <div className='comments'>
        <h4>Comments:</h4>
        {comments?.map((comment) => {
          return <Comment key={comment.id} check={comment} />
        })}
      </div>
      <form className='comment-form' onSubmit={handleSubmit} >
        <textarea placeholder='Comment..' name='comment' type='text' onChange={handleChange} value={formData.comment} />
        <input type='submit' value='Comment' />
      </form>
    </div>
  )
}

export default ArticleDetail