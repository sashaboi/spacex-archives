import React from 'react'
import axios from 'axios'
import { useEffect ,useState } from 'react';


import VideoCard from '../../components/video-card/VideoCard';
import Navbar from '../../components/navbar/Navbar';
import './listvideos.css'
const Listvideos = () => {
const [localvideos , setlocalvideos] = useState([])
  useEffect(()=>{
    console.log("useeffect running");
    axios.get('/api/videos')
    .then((response)=>{
      setlocalvideos(response.data.videos);
    },
    (error)=>{
      console.log(error); 
    })

  },[])

  return (
    <div className='video-list-parent' >
      <Navbar pagetype="not-home"/>
      
      <div className="inner-container">
        
      
        <div className="video-container">
          <div className="menu-sidebar">
            <div className="grid-title">
            MENU
            </div>
            <div className="hr-div-short"></div>
            <div className="menu-item-container">
              <div className="menu-list-btn">Playlist</div>
              <div className="menu-list-btn">Watch Later</div>
              <div className="menu-list-btn">Liked Videos</div>
              <div className="menu-list-btn">History</div>
              <div className="menu-list-btn">Categories</div>
            </div>
            
        
          </div>
          <div className="video-listing">
            <div className='grid-title'>VIDEOS</div>
            <div className="hr-div-long"></div>
            <div className="video-card-container">
              {localvideos.map((vid)=><VideoCard id={vid._id} vid = {vid}/>)}
            </div>
  
          </div>
        </div>
      </div>
      </div>
    
  )
}

export default Listvideos