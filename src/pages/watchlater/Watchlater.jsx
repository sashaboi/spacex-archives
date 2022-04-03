import React from 'react'



import Navbar from '../../components/navbar/Navbar';
import VideoCard from '../../components/video-card/VideoCard';
import { useLike } from '../../context/LikesContext';
import { useWatchLater } from '../../context/WatchLaterContext';
import './watchlater.css'

const Watchlater = () => {
  const {likedvids} = useLike();
  const {watchlatervids } = useWatchLater();
  return (
    <div>
      <Navbar pagetype="not-home"/>
      <div className="likes-title-section">
      <div className='grid-title'>
              Watch Later 
      </div>
            <div className="hr-div-long"></div>
      </div>
      <div className="liked-vids-section">
      {watchlatervids.map((mapvid)=><VideoCard key={mapvid._id}  vid={mapvid} likedvids ={likedvids}/>)}
    
      </div>
      </div>
  )
}

export default Watchlater