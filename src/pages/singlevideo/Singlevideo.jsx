import React from 'react'
import { useParams } from 'react-router-dom'

import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import { useAlert } from '../../context/Alertcontext';
import Alert from '../../components/alert/Alert';
import './singlevideo.css'
const Singlevideo = () => {
  const {alertstatus,alertmessage } =useAlert();
    const {id} = useParams();
    console.log(id);
    const videourl = "https://www.youtube.com/embed/"+id
  return (
    <div className='single-video-parent'>
      <Navbar pagetype="not-home"/>
      { alertstatus && <Alert message={alertmessage}/>}
      
        <div className="single-video-container">
        <Sidebar/>
        
        <div className="video-listing">
            <div className='video-listing-top-bar'>
              <div className='grid-title'>VIDEOS</div>
              
            </div>
            <div className="hr-div-long"></div>
            <div className="video-card-container">
            <iframe width="800" height="450" src={videourl} title="YouTube video player" frameborder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          </div>    
        </div>
        </div>
  )
}

export default Singlevideo