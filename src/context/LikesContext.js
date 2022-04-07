import { useContext , createContext } from "react";

// eslint-disable-next-line no-unused-vars
import { children } from "react";
import { useState } from "react";
const LikeContext = createContext();

const LikeProvider = ({children}) =>{

    const [backupvideos, setbackupvideos]= useState([])
    const [likedvids , setlikedvids] = useState([])
    const [localvideos , setlocalvideos] = useState([])
    
    
    

    return(
        <LikeContext.Provider value ={{backupvideos, setbackupvideos,likedvids,setlikedvids,localvideos , setlocalvideos}}>
            {children}
        </LikeContext.Provider>
    )

}
const useLike = () => useContext(LikeContext)

export {useLike, LikeProvider}