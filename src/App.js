import React, { useEffect, useState } from 'react';
import './App.css';
import { getTokenFromUrl } from './api/spotify';
import Login from './components/Login';

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }

  }, [])

  return (
    <div className="app">
      {
        token ? (
          <h1>I'm Logged in!!</h1>
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
