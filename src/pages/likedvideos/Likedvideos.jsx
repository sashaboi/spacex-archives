import React from 'react'



import Navbar from '../../components/navbar/Navbar';
import VideoCard from '../../components/video-card/VideoCard';
import { useLike } from '../../context/LikesContext';
import { useWatchLater } from '../../context/WatchLaterContext';
import './likedvideos.css'

const Likedvideos = () => {
  const {likedvids} = useLike();
  const {WatchLaterdvids} = useWatchLater();
  return (
    <div>
      <Navbar pagetype="not-home"/>
      <div className="likes-title-section">
      <div className='grid-title'>
              Liked Videos
      </div>
            <div className="hr-div-long"></div>
      </div>
      <div className="liked-vids-section">
      {likedvids.map((likedvid)=><VideoCard key={likedvid._id} WatchLaterdvids={WatchLaterdvids} vid={likedvid} likedvids ={likedvids}/>)}
    
      </div>
      </div>
  )
}

export default Likedvideos