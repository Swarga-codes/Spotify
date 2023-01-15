import React from 'react'
import "./SidebarOptions.css"
function SidebarOptions({title, Icon}) {
  return (
    <div className='sidebar_options'>
    {Icon && <Icon className="sidebar_icons"/>}
    {Icon?<h2>{title}</h2>:<p>{title}</p>}
    </div>
  )
}

export default SidebarOptions