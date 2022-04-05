import React from 'react'
import axios from 'axios'
import { useEffect  } from 'react';
import { Link } from "react-router-dom";



import VideoCard from '../../components/video-card/VideoCard';
import Navbar from '../../components/navbar/Navbar';
import './listvideos.css'
import { useLike } from '../../context/LikesContext';
import { useWatchLater } from '../../context/WatchLaterContext';
import Modal from '../../components/modal/Modal';
import { usePlaylist } from '../../context/PlaylistContext';
import Alert from '../../components/alert/Alert';
import { useAlert } from '../../context/Alertcontext';
const Listvideos = () => {
  const {alertstatus,alertmessage } =useAlert();
  const {modalshow , setmodalshow} =usePlaylist();
  const { likedvids ,setlocalvideos, state,dispatch} = useLike();
  const {WatchLatervids } = useWatchLater();
  useEffect(()=>{
  
    axios.get('/api/videos')
    .then((response)=>{
      setlocalvideos(response.data.videos);
      dispatch({type:"setvids",payload:response.data.videos})
    },
    (error)=>{
      console.log(error); 
    })
    

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div className='video-list-parent' >
      
      <Navbar pagetype="not-home"/>
      { alertstatus && <Alert message={alertmessage}/>}
      { modalshow && <Modal closefunc={(modalshow)=>setmodalshow(modalshow)}/>}
      
      <div className="inner-container">
        
      
        <div className="video-container">
          <div className="menu-sidebar">
            <div className="grid-title">
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
          <div className="video-listing">
            <div className='video-listing-top-bar'>
              <div className='grid-title'>VIDEOS</div>
              <div className="category-listing">
                Categories
              </div>
            </div>
            <div className="hr-div-long"></div>
            <div className="video-card-container">
              {state.map((vid)=><VideoCard key={vid._id} vid = {vid} likedvids ={likedvids} WatchLatervids = {WatchLatervids}/>)}
            </div>
          </div>
        </div>
      </div>
      </div>
    
  )
}

export default Listvideos