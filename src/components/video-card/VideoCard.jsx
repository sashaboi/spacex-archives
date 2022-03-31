import React from 'react'


import { BiLike } from 'react-icons/bi';
import {MdOutlineWatchLater} from 'react-icons/md';
import {HiViewList} from 'react-icons/hi';

import './videocard.css'
const VideoCard = ({vid}) => {
  const youtubelink = "https://www.youtube.com/embed/"+vid._id
    console.log(vid);
    console.log('cardrendered');
  return (
    <div className='video-card-parent'>
        <iframe width="100%" src={youtubelink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div className="video-desc-container">
          <div className="vid-title">
          {vid.title}
          </div>
          <div className="creator">
          {vid.creator}
          </div>
        </div>
        <div className="function-container">
          <div className="likebtn action-btn">
            <BiLike/>
          </div>
          <div className="likebtn action-btn">
            <MdOutlineWatchLater/>
          </div>
          <div className="likebtn action-btn">
            <HiViewList/>
          </div>
        </div>
        
    </div>
  )
}

export default VideoCard