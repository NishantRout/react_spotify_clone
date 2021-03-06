import React, { useEffect } from 'react';
import './App.css';
import { getTokenFromUrl } from './api/spotify';
import Login from './components/Login';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './components/Player';
import { useDataLayerValue } from './contexts/DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })

      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user
        });
      });

      spotify.getPlaylist('37i9dQZEVXcFrOhSBwuLh4')
        .then(response =>
          dispatch({
            type: 'SET_DISCOVER_WEEKLY',
            discover_weekly: response
          })
        )

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists
        });
      });
    }
  }, [])

  return (
    <div className="app">
      {
        token ? (
          <Player spotify={spotify} />
        ) : (
            <Login />
          )
      }
    </div>
  );
}

export default App;
