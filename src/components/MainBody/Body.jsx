import React from 'react'
import Header from '../Header/Header'
import './Body.css'
import { useDataLayerValue } from '../../Datalayer'
function Body({spotify}) {
    const[{discover_weekly},dispatch]=useDataLayerValue();
  return (
    <div className='body'>
    <Header spotify={spotify}/>
    <div className="body_details">
    <img src={discover_weekly?.images[0]?.url} alt="no preview" />
    <div className="body_title">
    <strong>PLAYLIST</strong>
    <h1>Discover Weekly</h1>
    <p>{discover_weekly?.description}</p>
    </div>
    </div>
    </div>
  )
}

export default Body