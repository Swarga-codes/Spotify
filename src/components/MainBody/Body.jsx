import React from 'react'
import Header from '../Header/Header'
import './Body.css'
import { useDataLayerValue } from '../../Datalayer'
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
// import { More } from '@mui/icons-material';
import SongsList from '../SongsList/SongsList';
function Body({spotify}) {
    const[{discover_weekly},dispatch]=useDataLayerValue();
    const usePlaylist = (id) => {
      spotify.play({
        context_uri: `spotify:playlist:37i9dQZEVXcQ9COmYvdajy`
      }).then((res)=>{
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
      });
    };
    const playSong = (id) =>{
      spotify.play({
        uris: [`spotify:track:${id}`],
      }).then((res)=>{
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
      });
    };
  return (
    <div className='body'>
    <Header spotify={spotify}/>
    <div className="body_details">
    <img src={discover_weekly?.images[0]?.url} alt="no preview" />
    <div className="body_title">
    <strong>PLAYLIST</strong>
    <h1>My Playlist</h1>
    <p>{discover_weekly?.description}</p>
    </div>
    </div>
    <div className="body_controls">
    <div className="body_play">
    <PlayCircleFilledOutlinedIcon onClick={usePlaylist}/>
    </div>
    <div className="body_others">
    <FavoriteBorderOutlinedIcon className='body_fav'/>
    <MoreHorizOutlinedIcon className='body_more'/>
    </div>
    </div>
   <div className="songs_list">
   {discover_weekly?.tracks.items.map((item)=>(
    <SongsList track={item.track} playSong={playSong}/>
   ))};
   </div>
    </div>
  )
}

export default Body