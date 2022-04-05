import { useContext , createContext } from "react";

// eslint-disable-next-line no-unused-vars
import { children } from "react";
import { useReducer,useState } from "react";
const LikeContext = createContext();

const LikeProvider = ({children}) =>{

    
    const [likedvids , setlikedvids] = useState([])
    const [localvideos , setlocalvideos] = useState([])
    const reducerfunc = (state , action) =>{
        switch(action.type){
            case "testcase":{
                console.log('test case reached');
                return state
            }
            case "setvids":{
                const result = action.payload
                return result
            }
            case "like":
                
                
                return state
            case "unlike":
                console.log('unlike this video', action.payload);
                
                return state
            default:{
                console.log('default case reached');
                return state
            }
        }
    }
    const [state,dispatch] = useReducer(reducerfunc,[])
    

    return(
        <LikeContext.Provider value ={{likedvids,setlikedvids,state,dispatch,localvideos , setlocalvideos}}>
            {children}
        </LikeContext.Provider>
    )

}
const useLike = () => useContext(LikeContext)

export {useLike, LikeProvider}