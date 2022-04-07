import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import Navbar from '../../components/navbar/Navbar';
import VideoCardforPlaylist from '../../components/videocardforplaylist/VideoCardforPlaylist';

import { usePlaylist } from '../../context/PlaylistContext';
import './singleplaylist.css'
import Alert from '../../components/alert/Alert';
import { useAlert } from '../../context/Alertcontext';
import EmptyState from '../../components/emptystate/EmptyState';

const SinglePlaylist = () => {
    const {alertstatus,alertmessage } =useAlert();

    const playlistid= useParams();
    const navigate = useNavigate();
    const {localplaylists} =usePlaylist();
    console.log(playlistid.id);
    const thisplaylist = localplaylists.find(obj=> obj._id === playlistid.id)
    if(thisplaylist === undefined){
        navigate('/Listvideos')
    }
    console.log('what playlist are we showing: ',thisplaylist);
    
  return (
    <div className='single-playlist-page-parent'>
        <Navbar pagetype="not-home"/>
         { alertstatus && <Alert message={alertmessage}/>}
      
        
        <div className="single-playlist-page-container">
            <div className='single-playlist-title-section'>
                <div className='grid-title'>
                 Playlist Detials
                </div>
                <div className="hr-div-long"></div> 
            </div>  
            <div className="playlist-title">
            <h1>Playlist Name :{thisplaylist.title}</h1>
            
            </div>      
            <div className="playlist-video-listing-section">
                Videos in playlist :<br/>
                {thisplaylist.videos.length===0?<EmptyState/>:thisplaylist.videos.map((vid)=><VideoCardforPlaylist thisplaylist={thisplaylist} vid= {vid} />)}
            </div>
             
        </div>
        
        
    </div>
  )
}

export default SinglePlaylist