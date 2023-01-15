import React, { useEffect, useState } from 'react';
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
        token:_token
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
    }
    console.log("token",token);
  },[]);
  console.log("The user is: ",user);
  console.log("token : ",token);
  return (
    <div className="App">
    {token?
  <Player spotify={spotify}/>
  :
  <Login/>
  }
   
    </div>
  );
}

export default App;
