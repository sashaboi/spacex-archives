import { useContext,useEffect , createContext } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { children } from "react";
import { useState } from "react";

const Historycontext = createContext();
const HistoryProvider = ({children}) => {
     
    let navigate = useNavigate();

    const [localhistory , setlocalhistory] = useState([])
    var token = localStorage.getItem('token')
    const header = {
    authorization: token
    } 
    useEffect(()=>{
        if(token){
            axios.get('/api/user/history',{headers : header})
            .then((response)=>{       
                setlocalhistory(response.data.history)
                
            },(error)=>{
                
                navigate('/login')
                console.log("error from get history api",error.response);
            })
        }
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return (
    <Historycontext.Provider value ={{localhistory , setlocalhistory}}>
            {children}
    </Historycontext.Provider>
  )
}
const useHistory = () => useContext(Historycontext)

export {HistoryProvider,useHistory}