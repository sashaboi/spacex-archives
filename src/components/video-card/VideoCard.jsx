import React from 'react'
import axios from 'axios'

import { AiFillLike,AiOutlineLike } from 'react-icons/ai';
import {MdOutlineWatchLater} from 'react-icons/md';
import {HiViewList} from 'react-icons/hi';
import { useLike } from '../../context/LikesContext';
import { useState } from 'react';

import './videocard.css'
const VideoCard = ({vid,likedvids}) => {
  const [disabled , setdisabled]=useState(false)
  
  const {dispatch,setlikedvids} = useLike();
  if(likedvids.some((likedvidobj)=> likedvidobj._id===vid._id)){
    var liketoggle = true
    
  }else{
    console.log('not liked');
  }
  
  // var token = localStorage.getItem('token');
  var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI3NzkxNjg3Zi01N2UyLTRkMzQtOTM5Ny01OWUxNGNiOTQ2NTkiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.usQ_8GxoP7_3dkdE3s3yNx23nNsPLi57_7IqOPdlBdM"
  const header = {
  authorization: token
  }    

   
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
        dispatch({type:"unlike",payload:vid._id})
        setlikedvids(response.data.likes);
        console.log(response.data.likes);
        

      },
      (error)=>{
        console.log(error); 
        setdisabled(false)
      })

    }else{
      axios.post('/api/user/likes',videodata,{headers : header})
      .then((response)=>{
        setdisabled(false)
        dispatch({type:"like",payload:vid._id})
        setlikedvids(response.data.likes);
      },
      (error)=>{
        setdisabled(false)
        console.log(error); 
      })
    }
    
    
  }
  const youtubelink = "http://i.ytimg.com/vi/"+vid._id+"/maxresdefault.jpg"
    
  return (
    <div className='video-card-parent'>
        <img src={youtubelink} alt="" />
        <div className="video-desc-container">
          <div className="vid-title">
          {vid.title}
          </div>
          
        </div>
        <div className="function-container">
          <button disabled={disabled} onClick={()=>{likeHandler(vid)}} className='like-btn'>
          <div className="likebtn action-btn">
            {liketoggle ? <AiFillLike/>:<AiOutlineLike/>}
          </div></button>
          <div className="watchlater action-btn">
            <MdOutlineWatchLater/>
          </div>
          <div className="playlist action-btn">
            <HiViewList/>
          </div>
        </div>
        
    </div>
  )
}

export default VideoCard