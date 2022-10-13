import React from 'react'
import './Comment.css'

function Comment({check}) {

  const {comment} = check;

  return (
    <div>
      <p>{comment}</p>
    </div>
  )
}

export default Comment