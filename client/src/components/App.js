import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Login from './loginAndSignup/Login';
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import Stories from "./storiess/Stories";
import Write from "./write/Write";

function App() {
  const[user, setUser] = useState(null)
  
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

  if(!user) return <Login onlogin={setUser} />

  return (
    <>
      <Navbar user={user} />
      <main>
        <BrowserRouter>
          <Switch>
            <Route path='/'>
              <Home />
            </Route>
            <Route path='/stories'>
              <Stories />
            </Route>
            <Route path='/write'>
              <Write />
            </Route>
          </Switch>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
