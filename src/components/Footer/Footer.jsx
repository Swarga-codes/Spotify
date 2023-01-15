import React from 'react'
import "./Footer.css"
import ShuffleOutlinedIcon from '@mui/icons-material/ShuffleOutlined';
import SkipPreviousOutlinedIcon from '@mui/icons-material/SkipPreviousOutlined';
import SkipNextOutlinedIcon from '@mui/icons-material/SkipNextOutlined';
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import PlaylistPlayOutlinedIcon from '@mui/icons-material/PlaylistPlayOutlined';
import VolumeDownOutlinedIcon from '@mui/icons-material/VolumeDownOutlined';
import { Grid,Slider } from '@mui/material';
function Footer() {
  return (
    <div className="footer">
    <div className="player_album">
    <img src="https://i.pinimg.com/originals/8d/c7/52/8dc752834195102e4cb630a53221255e.jpg" alt="no preview" />
    <div className="current_song_details">
    <h2>Bones</h2>
    <p>Imagine Dragons</p>
    </div>
    </div>
    <div className="player_controls">
    <ShuffleOutlinedIcon className='player_shuffle'/>
    <SkipPreviousOutlinedIcon className='player_back'/>
    <PlayCircleFilledOutlinedIcon className='player_play'/>
    <SkipNextOutlinedIcon className='player_next'/>
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