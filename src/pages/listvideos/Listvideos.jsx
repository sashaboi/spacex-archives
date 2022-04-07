import React from 'react'
import axios from 'axios'
import { useEffect  } from 'react';



import VideoCard from '../../components/video-card/VideoCard';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './listvideos.css'
import { useLike } from '../../context/LikesContext';
import { useWatchLater } from '../../context/WatchLaterContext';
import Modal from '../../components/modal/Modal';
import { usePlaylist } from '../../context/PlaylistContext';
import Alert from '../../components/alert/Alert';
import { useAlert } from '../../context/Alertcontext';
import { useCategories } from '../../context/CategoryContext';

const Listvideos = () => {
  const {alertstatus,alertmessage ,showalert} =useAlert();
  const {modalshow , setmodalshow} =usePlaylist();
  const { likedvids ,setlocalvideos, localvideos,backupvideos,setbackupvideos} = useLike();
  const {WatchLatervids } = useWatchLater();
  const {localcategories} = useCategories();
  useEffect(()=>{
    
    axios.get('/api/videos')
    .then((response)=>{
      setlocalvideos(response.data.videos);
      setbackupvideos(response.data.videos);
      console.log(response);
    },
    (error)=>{
      showalert("Error in getting videos")
      console.log(error); 
    })
   
    

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  
  const resetCategories = () =>{
    setlocalvideos(backupvideos)
  }
  const setCategory = (cat) =>{
    console.log(cat);
    setlocalvideos(backupvideos.filter((obj)=>obj.category ===cat))
  }

  return (
    <div className='video-list-parent' >
      
      <Navbar pagetype="not-home"/>
      { alertstatus && <Alert message={alertmessage}/>}
      { modalshow && <Modal closefunc={(modalshow)=>setmodalshow(modalshow)}/>}
      
      <div className="inner-container">
        
      
        <div className="video-container">
          <div className="menu-sidebar">
            <Sidebar />
          </div>
          <div className="video-listing">
            <div className='video-listing-top-bar'>
              <div className='grid-title'>VIDEOS</div>
              <div className="category-listing">
                {localcategories.map((cat)=><p onClick={()=>setCategory(cat.categoryName)} className='category-listing-text'>{cat.categoryName}</p>)}
                <p onClick={()=>resetCategories()} className='reset-categories'> Reset Categories </p>
              </div>
            </div>
            <div className="hr-div-long"></div>
            <div className="video-card-container">
              {localvideos.map((vid)=><VideoCard key={vid._id} vid = {vid} likedvids ={likedvids} WatchLatervids = {WatchLatervids}/>)}
            </div>
          </div>
        </div>
      </div>
      </div>
    
  )
}

export default Listvideos