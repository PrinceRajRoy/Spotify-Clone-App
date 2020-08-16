import React, { useEffect } from 'react';
import './App.css';
import Login from './component/Login/Login';
import { getToken } from './utilities/spotify';
import SpotifyWebAPI from 'spotify-web-api-js';
import Player from './component/Player/Player';
import { useDataValue } from './contexts/DataContext';

const spotify = new SpotifyWebAPI();

function App() {

  const [{ token }, dispatch] = useDataValue();

  useEffect(() => {
    const hash = getToken();
    window.location.hash = '';
    const _token = hash.access_token;

    if (_token) {

      /* Set User Token */
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      });

      /* Provide User Token To Spotify Module */
      spotify.setAccessToken(_token);

      /* Set Spotify Module */
      dispatch({
        type: 'SET_SPOTIFY_APP',
        spotify: spotify
      });

      /* Set User Details */
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user
        });
      });

      /* Set Liked Songs As Current Playlist */
      spotify.getMySavedTracks().then((tracks) => {
        dispatch({
            type: 'SET_CURRENT_PLAYLIST',
            playlist: tracks
        })
      });

      /* Set List Of Playlist */
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLIST',
          playlists: playlists
        });
      });
      
      /* Set Current Song */
      spotify.getMyCurrentPlaybackState().then((state) => {console.log(state);
        if(state) {
          dispatch({
            type: 'SET_SONG',
            currentSong: state?.item,
            playing: state.is_playing,
            progress: state.progress_ms
          });
        } else {
          spotify.getMyRecentlyPlayedTracks().then((track) => {
            dispatch({
              type: 'SET_SONG',
              currentSong: track?.items[0].track,
              playing: false,
              progress: 0
            });
          });
        }
      })

    }
  }, [dispatch]);

  return (
    <div className="App">
      {
        token ? (
          <Player />
        ) : (
            <Login />
          )
      }
    </div>
  );
}

export default App;
