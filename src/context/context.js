import React, { useState } from "react";
import { createContext } from "react";

export const  auth = createContext();

const Contextkk = ({children}) => {

    const [check, setCheck] = useState("");

    const [title, setTitle] = useState("");
     
    function ShowTitle(data){
      setTitle(data);
    }
     
    function Showdata (data){
        setCheck(data);
    }
  const value ={
     check:check,
     title:title,
     Showdata:Showdata,
     ShowTitle:ShowTitle,


  }


  return (
     <auth.Provider  value={value}>
        {children}

     </auth.Provider>
  )
}

export default Contextkk;