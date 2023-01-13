import React, { useEffect, useState } from 'react'
import './Login.css';
import { loginUrl } from '../../spotify-config';

function Login() {

  return (
    <div className="login">
    <img src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg"
    alt="Spotify logo"/>
    <div className="loginBtn">
  
    <button><a href={loginUrl}>LOGIN WITH SPOTIFY</a></button>
    </div>
    </div>
  )
}

export default Login;