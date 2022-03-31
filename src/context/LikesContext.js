import { useContext , createContext } from "react";

// eslint-disable-next-line no-unused-vars
import { children } from "react";
const LikeContext = createContext();

const LikeProvider = ({children}) =>{

    return(
        <LikeContext.Provider value ={{}}>
            {children}
        </LikeContext.Provider>
    )

}
const useLike = () => useContext(LikeContext)

export {useLike, LikeProvider}