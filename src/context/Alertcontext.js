import { useContext , createContext } from "react";
// eslint-disable-next-line no-unused-vars
import { children } from "react";
import { useState } from "react";
const AlertContext = createContext();

const AlertProvider = ({children}) =>{
    const [alertstatus,setalertstatus]=useState(false)
    const [alertmessage , setalertmessage] = useState("Sample Alert message")
    const showalert = (messageforalert) =>{
        
        setalertmessage(messageforalert)
        setalertstatus(true)
        setTimeout(() => {
            setalertstatus(false)
        }, 1500);
    }
    

    return(
        <AlertContext.Provider value ={{alertmessage,showalert , setalertmessage,alertstatus,setalertstatus}}>
            {children}
        </AlertContext.Provider>
    )

}
const useAlert = () => useContext(AlertContext)

export {useAlert, AlertProvider}