import React, { useEffect } from 'react';
import './App.css';
import Login from './components/Login/Login';
import { getTokenFromUrl } from './spotify-config';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/Player/Player';
import { useDataLayerValue } from './Datalayer';
const spotify= new SpotifyWebApi();
function App() {

  // const[token,setToken]=useState();
  const[{user,token},dispatch]=useDataLayerValue();
  // similar to   const[dataLayer,dispatch]=useDataLayerValue(); from which we can use dataLayer.user to refer to user 
  useEffect(()=>{
    const hash=getTokenFromUrl();
    window.location.hash="";
    const _token=hash.access_token;
    if(_token){
      dispatch({
        type:'SET_TOKEN',
        token:_token,
      });
      // setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type:'SET_USER',
          user:user
        });
       
      });
    spotify.getUserPlaylists().then((playlists)=>{
      dispatch({
        type:'SET_PLAYLISTS',
        playlists: playlists,
      });
    });
    spotify.getPlaylist('7nJri2tel6UcwPCUJ4StDO').then((response)=>{
      dispatch({
        type:'SET_DISCOVER_WEEKLY',
        discover_weekly:response,
      })
      console.log("response:",response);
    });
    spotify.getMyTopArtists().then((response) =>
    dispatch({
      type: "SET_TOP_ARTISTS",
      top_artists: response,
    })
  );

  dispatch({
    type: "SET_SPOTIFY",
    spotify: spotify,
  });

    }
    console.log("token",token);
  },[token,dispatch]);
  console.log("The user is: ",user);
  console.log("token : ",token);
  return (
    <div className="App">
   {/* {token?
  <Player spotify={spotify}/>
  :
  <Login/>
  }*/}
  {!token && <Login />}
  {token && <Player spotify={spotify} />}
    </div>
  );
}

export default App;
