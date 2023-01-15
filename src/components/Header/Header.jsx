import React from 'react'
import './Header.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Avatar } from '@mui/material';
import { useDataLayerValue } from '../../Datalayer';
function Header() {
    const[{user},dispatch]=useDataLayerValue();
  return (
    <div className='header'>
    <div className="header_search">
   <SearchOutlinedIcon className='header_search_icon'/>
   <input type="text" placeholder='What do you want to listen to?'/>
    </div>
    <div className="header_avatar">
   <Avatar alt="no preview" src={user?.images[0]?.url} />
   <h1>{user?.display_name}</h1>
    </div>
    </div>
  )
}

export default Header