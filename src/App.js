import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login/Login';
import { getTokenFromUrl } from './spotify-config';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/Player/Player';
import { useDataLayerValue } from './Datalayer';
const spotify= new SpotifyWebApi();
function App() {

  const[token,setToken]=useState();
  const[{},dispatch]=useDataLayerValue();
  useEffect(()=>{
    const hash=getTokenFromUrl();
    window.location.hash="";
    const _token=hash.access_token;
    if(_token){
      setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        console.log("The user is: ",user)
      });
    }
    console.log("token",token);
  },[]);
  return (
    <div className="App">
    {token?
  <Player/>
  :
  <Login/>
  }
   
    </div>
  );
}

export default App;
