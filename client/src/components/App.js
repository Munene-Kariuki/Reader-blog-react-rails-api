import React, { useEffect, useState } from "react";
import Login_form from "./Login_form";
import logo from '../logo.svg';
import './App.css';

function App() {
  const[user, setUser] = useState(null)
  
  //Auto login 
  useEffect(() => {
    fetch('/me')
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => setUser(user))
      }
    })
  }, []) 

  if(!user) return <Login_form onlogin={setUser} />

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
