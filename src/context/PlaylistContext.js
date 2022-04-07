import { useContext , createContext,useEffect } from "react";
import axios from 'axios'
// eslint-disable-next-line no-unused-vars
import { children } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const PlaylistContext = createContext();

const PlaylistProvider = ({children}) =>{
    const [modalshow , setmodalshow] = useState(false)
    const [localplaylists , setlocalplaylists] = useState([])
    
    const [selectedvideo,setselectedvideo] = useState([])


    var token = localStorage.getItem('token')
    const header = {
    authorization: token
    } 
    const navigate = useNavigate();
    useEffect(()=>{
        if(token){
        
        axios.get('/api/user/playlists',{headers : header})
        .then((response)=>{
       
        setlocalplaylists(response.data.playlists)
        },(error)=>{
            navigate('/login')
        console.log("error from get playlist api",error);
        })}
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    

    

    return(
        <PlaylistContext.Provider value ={{setselectedvideo,selectedvideo,modalshow , setmodalshow,localplaylists,setlocalplaylists}}>
            {children}
        </PlaylistContext.Provider>
    )

}
const usePlaylist = () => useContext(PlaylistContext)

export {usePlaylist, PlaylistProvider}