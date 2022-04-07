import React from 'react'




import Alert from '../../components/alert/Alert';
import Playlistcard from '../../components/playlistcard/Playlistcard';
import Navbar from '../../components/navbar/Navbar';
import { usePlaylist } from '../../context/PlaylistContext';
import { useAlert } from '../../context/Alertcontext';
import './playlists.css'
const Playlists = () => {
  const {alertstatus,alertmessage } =useAlert();

  const {localplaylists} = usePlaylist();
  
  return (


    <div className='playlist-parent'>
      <Navbar pagetype="not-home"/>
      { alertstatus && <Alert message={alertmessage}/>}

      <div className='login-title-section'>
          <div className='grid-title'>
             Playlists
          </div>
          <div className="hr-div-long"></div>
          <div className="playlist-container">
          <div className='playlist-table-title-container'>
            <div className='playlistpage-table-titles'>
              Playlist name
            </div>
            <div className='playlistpage-table-titles'>
              Video Count
            </div>
            <div className='playlistpage-table-titles'>
              Delete 
            </div>
          </div>
          
            {localplaylists.map((playlist)=><div className='playlist-card-renderer'><Playlistcard playlist={playlist}/>deletebutton</div>)}
          </div>
        </div>
    
    </div>
  )
}

export default Playlists