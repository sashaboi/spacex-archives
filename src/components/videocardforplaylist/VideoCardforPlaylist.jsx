import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

import { usePlaylist } from '../../context/PlaylistContext';
import { BsFillTrashFill } from "react-icons/bs";
import './videocardforplaylist.css'
import { useAlert } from '../../context/Alertcontext';

const VideoCardforPlaylist = ({vid,thisplaylist}) => {
    const navigate = useNavigate();
    const {setlocalplaylists}=usePlaylist();
    const {showalert} =useAlert();
    const youtubelink = "http://i.ytimg.com/vi/"+vid._id+"/maxresdefault.jpg"
    var token = localStorage.getItem('token')
    const header = {authorization: token} 
    console.log(thisplaylist);
    const urltosend="/api/user/playlists/"+thisplaylist._id+'/'+vid._id
    console.log(urltosend);
    const removeVideofromPlaylist = () => {
        axios.delete(urltosend,{headers : header})
        .then((response)=>{
        
        setlocalplaylists(response.data.playlists)
        
        showalert('video removed from playlist')
        },(error)=>{
        console.log("error from remove video from playlist api",error);
        })
    }
    const goToVideo =(vid)=>{
        const urltonavigateto = '/singlevideo/' + vid
        navigate(urltonavigateto)
    }
    return (
        <div className='video-card-for-playlist-parent'>
            <div onClick={()=>goToVideo(vid._id)} className="thumbnail">
                <img src={youtubelink} alt={vid.title} />
            </div>
            <div className="video-details-for-playlist">
                {vid.title}
            </div>
            <div onClick={()=>removeVideofromPlaylist()} className="remove-from-playlist-icon">
                <BsFillTrashFill/>
            </div>
        </div>
    )
}

export default VideoCardforPlaylist