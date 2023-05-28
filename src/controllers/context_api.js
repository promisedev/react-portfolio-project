
import React, {useState, useEffect, useContext} from "react";

const AppContext = React.createContext();

const AppProvider=({children})=>{

const [serv_position, setserv_Position]=useState(0)
const [cont_position, setcont_Position]=useState(0)

const services = (e)=>{

const parent = e.currentTarget.parentElement.parentElement;
parent.classList.remove('show_item')
// console.log(parent)

  let txt = e.currentTarget.textContent
  txt = txt.replace(/[\W_]/g, '')
if(txt === "Services"){
   window.scrollTo(0,serv_position) 
} else
if(txt === "Contact"){
window.scrollTo(0,cont_position) 
}
    
}


    return(
        <AppContext.Provider value={{
serv_position,
 setserv_Position,
 cont_position, 
 setcont_Position,
 services
        }}>{children}
        </AppContext.Provider>
    )
}

const useGlobalContext = ()=>{

    return useContext(AppContext)
}

export  {useGlobalContext, AppProvider}