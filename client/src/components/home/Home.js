import React, { useEffect, useState } from 'react'
import Filter from './Filter'
import Article from './Article'
import './Home.css'

function Home({articles}) {
  console.log(articles)

  const displayArticles = articles.map((article) => {
    return <Article key={article.id} article={article} />
  })


  return (
    <div className='home'>
      {/* <Filter /> */}
      <h2 className='home-header'>Articles</h2>
      {displayArticles}
    </div>
  )
}

export default Home