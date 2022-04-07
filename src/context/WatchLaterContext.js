import { useContext , createContext } from "react";

// eslint-disable-next-line no-unused-vars
import { children } from "react";
import { useState } from "react";
const WatchLaterContext = createContext();

const WatchLaterProvider = ({children}) =>{
    const [watchlatervids , setWatchLaterdvids] = useState([])
    

    return(
        <WatchLaterContext.Provider value ={{watchlatervids,setWatchLaterdvids}}>
            {children}
        </WatchLaterContext.Provider>
    )

}
const useWatchLater = () => useContext(WatchLaterContext)

export {useWatchLater, WatchLaterProvider}