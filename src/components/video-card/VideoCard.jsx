import React from 'react'
import axios from 'axios'
import { useNavigate  } from 'react-router-dom'


import { AiFillLike,AiOutlineLike,AiFillCheckCircle } from 'react-icons/ai';
import {MdOutlineWatchLater} from 'react-icons/md';
import {HiViewList} from 'react-icons/hi';
import { useLike } from '../../context/LikesContext';
import { useWatchLater } from '../../context/WatchLaterContext';
import { useState } from 'react';
import { usePlaylist } from '../../context/PlaylistContext';
import { useAlert } from '../../context/Alertcontext';
import { useHistory } from '../../context/Historycontext';
import './videocard.css'

const VideoCard = ({vid}) => {
  let navigate = useNavigate();
  const [disabled , setdisabled]=useState(false)
  const {setselectedvideo , setmodalshow}=usePlaylist();
  const {showalert} = useAlert();  
  const {setlikedvids ,likedvids} = useLike();
  const { setWatchLaterdvids ,watchlatervids } = useWatchLater();
  const {setlocalhistory,localhistory} =useHistory();
  
  if(likedvids.some((likedvidobj)=> likedvidobj._id===vid._id)){
    var liketoggle = true
    
  }
  if(watchlatervids.some((watchlatervidobj)=> watchlatervidobj._id===vid._id)){
    var watchlatertoggle = true
    
  }
  
  // var token = localStorage.getItem('token');
  const token = localStorage.getItem('token')
  const header = {
  authorization: token
  }     
  
  console.log(token); 
  const likeHandler = (vid) => {
    setdisabled(true)
    const videodata = {
      "video":vid
    }
    if (likedvids.some((likedvid)=>likedvid._id===vid._id) ){
      const urltosend = '/api/user/likes/'+vid._id
      axios.delete(urltosend,{headers : header})
      .then((response)=>{
        setdisabled(false)
        
        setlikedvids(response.data.likes);
        
        showalert("Video Unliked!")

      },
      (error)=>{
        console.log(error); 
        setdisabled(false)
        navigate('/login')
      })

    }else{
      axios.post('/api/user/likes',videodata,{headers : header})
      .then((response)=>{
        setdisabled(false)
        
        setlikedvids(response.data.likes);
        showalert("Video Liked!")
      },
      (error)=>{
        setdisabled(false)
        console.log(error); 
        navigate('/login')
      })
    }
    
    
  }
  const WatchLaterHandler = (vid) => {
    setdisabled(true)
    const watchvideodata = {
      "video":vid
    }
    if (watchlatervids.some((likedvid)=>likedvid._id===vid._id) ){
      const urltosend = '/api/user/watchlater/'+vid._id
      axios.delete(urltosend,{headers : header})
      .then((response)=>{
        setdisabled(false)
        console.log('removed from watchlater');
        setWatchLaterdvids(response.data.watchlater);
        showalert("Removed from watchlater")
        
        

      },
      (error)=>{
        console.log(error); 
        setdisabled(false)
        navigate('/login')
      })

    }else{
      axios.post('/api/user/watchlater',watchvideodata,{headers : header})
      .then((response)=>{
        setdisabled(false)
        
        setWatchLaterdvids(response.data.watchlater);
        showalert("Added to watchlater")
      },
      (error)=>{
        setdisabled(false)
        console.log(error); 
        navigate('/login')
      })
    }
    
    
  }

  const playlistClickHandler = (vid)=> {
    setmodalshow(true)
    
    setselectedvideo(vid)
    

  }
  const watchVideo = (vid) =>{
    const videotoaddtohistory = {
      "video":vid
    }
    if(localhistory.some((historyvid)=>historyvid._id===vid._id)){
      setlocalhistory(localhistory.sort(function(x,y){return x === vid ? -1 :y === vid ?1:0;}))
      
    }else{
      axios.post('/api/user/history',videotoaddtohistory,{headers : header})
      .then((response)=>{
        console.log(response);
        showalert("Added video to history")
        setlocalhistory(response.data.history)
        
      },
      (error)=>{
        navigate('/login')
        console.log(error);
        showalert("Please login")
        
      })

    }
    
    
    const urltonavigateto = '/singlevideo/' + vid._id
    navigate(urltonavigateto)
  }
  const youtubelink = "http://i.ytimg.com/vi/"+vid._id+"/maxresdefault.jpg"
    
  return (
    <div className='video-card-parent'>
        <img onClick={()=>watchVideo(vid)} src={youtubelink} alt="" className='thumbnail' />
        <div className="video-desc-container">
          <div onClick={()=>watchVideo(vid)} className="vid-title">
          {vid.title}
          </div>
          
        </div>
        <div className="function-container">
          <button disabled={disabled} onClick={()=>{likeHandler(vid)}} className='like-btn'>
          <div className="likebtn action-btn">
            {liketoggle ? <AiFillLike/>:<AiOutlineLike/>}
          </div></button>
          <button disabled={disabled} onClick={()=>{WatchLaterHandler(vid)}} className='like-btn'>
              <div className="watchlater action-btn">
            {watchlatertoggle ? <AiFillCheckCircle/>:<MdOutlineWatchLater/>}  
          </div>

          </button>
          
          <div onClick={()=>playlistClickHandler(vid)} className="playlist action-btn">
            <HiViewList/>
          </div>
        </div>
    </div>
  )
}

export default VideoCard