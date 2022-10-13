import React, { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './loginAndSignup/Login';
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import Stories from "./storiess/Stories";
import Write from "./write/Write";

function App() {
  const[user, setUser] = useState(null)
  const [articles, setArticles] = useState([])
  
  // Auto login and keeps user logged in
  useEffect(() => {
    fetch('/me')
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => setUser(user))
      }
    })
  }, []) 

  //fetch articles 
  useEffect(() => {
    fetch('/articles') 
      .then((res) => res.json())
      .then((data) => setArticles(data))
  }, [])

  //Add article after post
  function handleAddArticle(article) {
    setArticles(article, ...articles)
  }

  if(!user) return <Login onlogin={setUser} />


  return (
    <>
      <Navbar user={user} />
      <main>
      <Routes>
        <Route path='/' exact element={<Home articles={articles} />} />
        <Route path='/stories' element={<Stories articles={articles} user={user} />} />
        <Route path='/write' element={<Write addArticle={handleAddArticle} user={user} />} />
      </Routes>
      </main>
    </>
  );
}

export default App;
