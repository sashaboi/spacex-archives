import { createContext,useContext } from "react";
import { useState ,useEffect} from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const CategoryContext = createContext();

const CategoryProvider=({children})=>{
    const [localcategories,setlocalcategories]= useState([])
    let navigate = useNavigate();
    useEffect(()=>{
        
            axios.get('/api/categories')
            .then((response)=>{       
                setlocalcategories(response.data.categories)
                
            },(error)=>{
                
                navigate('/login')
                console.log("error from get history api",error.response);
            })
        
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return(
        <CategoryContext.Provider value={{localcategories,setlocalcategories}}>
            {children}
        </CategoryContext.Provider>
    )
}

const useCategories = () => useContext(CategoryContext)
export {CategoryProvider,useCategories}