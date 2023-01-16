import React from 'react'
import './SongsList.css'
function SongsList({track,playSong}) {
    console.log(track);
  return (
    <div className='songsList' onClick={()=> playSong(track.id)}>
  <img src={track.album.images[0].url} alt="no track" />
  <div className="songsList_info">
<h1>{track.name}</h1>
<p>{track.artists.map((artist)=> artist.name).join(", ")} - {track.album.name}</p>
  </div>
    </div>
  )
}

export default SongsList