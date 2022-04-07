import React from 'react'
import { Link } from 'react-router-dom'

import './sidebar.css'
const Sidebar = () => {
  return (
    
        <div className='sidebar-leftalign'>
            <div className="grid-title ">
                MENU
            </div>
            <div className="hr-div-short"></div>
            <div className="menu-item-container">
                <Link to="/listvideos"><div className="menu-list-btn">Browse videos</div></Link>
                <Link to="/playlists"><div className="menu-list-btn">Playlist</div></Link>
                <Link to="/watchlater"><div className="menu-list-btn">Watch Later</div></Link>
                <Link to="/likedvideos"><div className="menu-list-btn">Liked Videos</div></Link>
                <Link to="/watchhistory"><div className="menu-list-btn">History</div></Link>
                
                
            </div>
        </div>
        
    
  )
}

export default Sidebar