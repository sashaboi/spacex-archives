import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import { usePlaylist } from '../../context/PlaylistContext'
import { useAlert } from '../../context/Alertcontext'
import './modal.css'
const Modal = (props) => {
    const {showalert}=useAlert();
    const {localplaylists,setlocalplaylists,selectedvideo} = usePlaylist();
    const [playlistinput , setplaylistinput] = useState("")
    var token = localStorage.getItem('token')
    const header = {authorization: token} 
    if(props.show){
        return null
    }
    const datatosend = {
        "playlist":{title:playlistinput,description:"playlist description"}        
    }
    const createPlaylistHandler = () =>{
        axios.post('/api/user/playlists',datatosend,{headers : header})
        .then((response)=>{
        console.log('response from user playlist api',response);
        showalert("Playlist Created")
        setlocalplaylists(response.data.playlists)
        setplaylistinput("")
        },(error)=>{
        console.log("error from get playlist api",error);
        })
    }
    const addVideoToPlaylist = (playlistobj) =>{
        const addvideotoplaylisturl = "/api/user/playlists/"+playlistobj._id
        const videotoplaylistdatatosend = {"video":selectedvideo}
        axios.post(addvideotoplaylisturl,videotoplaylistdatatosend,{headers:header})
        .then((response)=>{
            console.log(response)
            setlocalplaylists(response.data.playlists)
            showalert("Added to playlist!")
        },(error)=>{
            showalert("Error adding to playlist")
            console.log('error from playlist api of adding video to certain playlist');
        })
        console.log('ADD video ',selectedvideo ,'to ',playlistobj);
    }
   
  return (
    <div className='modal-positioning'>
        <div className='modal-parent'>
            <div className="modal-title grid-title">
                Playlists
            </div>
            <div className="modal-content-playlist">
                <div className="create-playlist-section">
                    
                    <div className="create-playlist-content">
                    <input onChange={(e)=>setplaylistinput(e.target.value)} value={playlistinput} placeholder='Enter name of playlist' type="text" />
                    <button onClick={()=>createPlaylistHandler()}>Create</button>
                    </div>
                    
                </div>
                <div className="listing-playlists">
                    <div className="listing-playlists-title">
                        Listing all playlists
                    </div>
                    <div className="listing-playlist-container">
                        {localplaylists.length===0?<h5>"No Playlists created"</h5> : localplaylists.slice(0,3).map((playlistobj)=><div className='horiplaylist-parent'>{playlistobj.title}<button onClick={()=>addVideoToPlaylist(playlistobj)}>ADD</button></div>)}
                        {localplaylists.length!==0 ? <Link to="/playlists"><div className="simple-link-text">See all playlists</div></Link>:""}
                    </div>
                </div>
            </div>
            <div className="modal-cta">
                <button onClick={()=>props.closefunc(false)} className='modal-cta-btn'>Close</button>
            </div>
    
        </div>
    </div>
  )
}

export default Modal