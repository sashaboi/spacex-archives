import React from 'react'
import axios from 'axios'

import Navbar from '../../components/navbar/Navbar';
import Alert from '../../components/alert/Alert';
import { useAlert } from '../../context/Alertcontext';
import { useHistory } from '../../context/Historycontext';
import VideoCard from '../../components/video-card/VideoCard';
import { BsFillTrashFill } from "react-icons/bs";
import './watchhistory.css'
import EmptyState from '../../components/emptystate/EmptyState';
const Watchhistory = () => {
  const {alertstatus,alertmessage ,showalert} =useAlert();
  const {localhistory,setlocalhistory}=useHistory();
  const token = localStorage.getItem('token')
  const header = {
  authorization: token
  }  

  const removeFromHistory = (vid) =>{
    
    const urltosend = '/api/user/history/'+vid._id
      
    axios.delete(urltosend,{headers : header})
    .then((response)=>{
      showalert("video removed from history")
      setlocalhistory(response.data.history);
      
    },
    (error)=>{
      console.log(error);
    })
  }

  const clearHistory = () =>{
    axios.delete('/api/user/history/all',{headers : header})
    .then((response)=>{
      showalert("History cleared !")
      setlocalhistory(response.data.history)
      
    },
    (error)=>{
      console.log(error);
    })
  }
  return (
    <div><Navbar pagetype="not-home"/>
    { alertstatus && <Alert message={alertmessage}/>}
    
    <div className="likes-title-section">
          <div className='grid-title'>
                  Watch History
          </div>
          <div className="hr-div-long"></div>
          <div onClick={()=>clearHistory()} className="history-subtitle">
            {localhistory.length !==0 ? <p><BsFillTrashFill/>Clear History</p>:<></>}
          </div>
    </div>

    <div className="liked-vids-section">
      {(localhistory.length === 0)?<EmptyState/>:localhistory.map((likedvid)=><div className='remove-from-history-vid-container'><VideoCard key={likedvid._id}  vid={likedvid} /><div onClick={()=>removeFromHistory(likedvid)} className='history-bin-handler'><BsFillTrashFill/></div></div>)}
    
    </div>
    </div>
  )
}

export default Watchhistory