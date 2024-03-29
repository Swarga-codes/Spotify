import React, { useEffect } from 'react'
import "./Footer.css"
import ShuffleOutlinedIcon from '@mui/icons-material/ShuffleOutlined';
import SkipPreviousOutlinedIcon from '@mui/icons-material/SkipPreviousOutlined';
import SkipNextOutlinedIcon from '@mui/icons-material/SkipNextOutlined';
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';
import PauseCircleFilledOutlinedIcon from '@mui/icons-material/PauseCircleFilledOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import PlaylistPlayOutlinedIcon from '@mui/icons-material/PlaylistPlayOutlined';
import VolumeDownOutlinedIcon from '@mui/icons-material/VolumeDownOutlined';
import { Grid,Slider } from '@mui/material';
import { useDataLayerValue } from '../../Datalayer';
function Footer({spotify}) {
  const[{token,item,playing},dispatch]=useDataLayerValue();
  useEffect(()=>{
    spotify.getMyCurrentPlaybackState().then((r)=>{
      console.log("the value of r is:",r.item);
    dispatch({
type:"SET_PLAYING",
playing:r.is_playing,
    });
    dispatch({
      type:"SET_ITEM",
      item:r.item,
    });
    });
  },[spotify,token,dispatch]);
  const playOrPause = () =>{
    if(playing){
      spotify.pause();
      dispatch({
        type:"SET_PLAYING",
        playing:false,
      });
    }
    else{
      spotify.play();
      dispatch({
        type:"SET_PLAYING",
        playing:true,
      });
    }
  };
  const PreviousSong = () =>{
    spotify.skipToPrevious();
    spotify.getMyCurrentPlayingTrack().then((r)=>{
      dispatch({
        type:"SET_ITEM",
        item:r.item,
      });
      dispatch({
        type:"SET_PLAYING",
        playing:true,
      });
    });
  };
  const NextSong = () =>{
    spotify.skipToNext();
    spotify.getMyCurrentPlayingTrack().then((r)=>{
      dispatch({
        type:"SET_ITEM",
        item:r.item,
      });
      dispatch({
        type:"SET_PLAYING",
        playing:true,
      });
    });
  };
  return (
    <div className="footer">
    <div className="player_album">
    {/*<img src={item?.album.images[0].url} alt={item?.name} />*/}
    {item ?(
      <div className="current_song_details">
      <h2>{item.name}</h2>
      <p>{item.artists.map((artist)=>artist.name).join(", ")}</p>
      </div>
    )
      :
      (
      <div className="current_song_details">
      <h2>No song is playing</h2>
      <p>.....</p>
      </div>
      )
    }
   
    </div>
    <div className="player_controls">
    <ShuffleOutlinedIcon className='player_shuffle'/>
    <SkipPreviousOutlinedIcon className='player_back' onClick={PreviousSong}/>{
      playing?
      <PauseCircleFilledOutlinedIcon className='player_play' fontSize='large' onClick={playOrPause}/>
      :
      <PlayCircleFilledOutlinedIcon className='player_play' fontSize='large' onClick={playOrPause}/>
    }

  
    <SkipNextOutlinedIcon className='player_next' onClick={NextSong}/>
    <RepeatOutlinedIcon className='player_repeat'/>
    </div>
    <div className="player_volume">
    <Grid container spacing={2}>
    <Grid item>
    <PlaylistPlayOutlinedIcon className='playlist_play'/>
    </Grid>
    <Grid item>
    <VolumeDownOutlinedIcon className='volume_down'/>
    </Grid>
    <Grid item xs>
    <Slider/>
    </Grid>
    </Grid>
    </div>
    </div>
  )
}

export default Footer