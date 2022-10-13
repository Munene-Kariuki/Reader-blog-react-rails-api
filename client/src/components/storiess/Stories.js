import React from 'react'
import './Stories.css'
import UserArticle from './UserArticle';

function Stories({articles, user, setArticles}) {

  const user_articles = articles.filter((article => {
    if (article.user_id === user.id) {
      return article
    }
  }));

  const render_user_articles = user_articles.map((user_article) => {
    return <UserArticle ondelete={handle_delete} onupdate={handle_update} key={user_article.id} article={user_article} />
  })


  //Handle delete article 
  function handle_delete(id) {
    fetch(`/articles/${id}`, {
      method: 'DELETE',
    })
    .then((res) => res.json())
    .then(() => console.log("Deleted"))

    setArticles(articles.filter((article) => {
      if (article.id != id) {
        return article
      }
    }));
  }

  //Handle article update 
  function handle_update(formData) {
    fetch(`/articles/${formData.id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: formData,
      })
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
  }

  //Render articles in groups of 3
  //Mutate articles array into groups of 3
  function render_user_stories() {
    let articles = []
    let size = 3

    for(let i = 0; i < render_user_articles.length; i += size ) {
      articles.push(render_user_articles.slice(i, i + size))
    }
    const render_articles = articles.map((articlesRow) => {
      return <div className='articles-row'>{articlesRow}</div>
    })

    return render_articles
  }

  return (
    <div>
      <h2 className='stories-header'>Your stories:</h2>
      {render_user_stories()}
    </div>
  )
}

export default Stories