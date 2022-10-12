import React from 'react'
import './Article.css'

function Article({article}) {
  const {title, user, topic, created_at, story, time} = article


  return (
    <div>
      <hr className='article-hr' />
      <div className='profile'>
        <img className='profile_image' src={user.profile_image} alt='DP' />
        <p>{user.username}</p>
      </div>
    </div>
  )
}

export default Article