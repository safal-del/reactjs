import React, { useState } from "react";
import { createContext } from "react";
import { AddToCartdata } from "../data";

export const  auth = createContext();

const Contextkk = ({children}) => {

    const [check, setCheck] = useState("");

    const [title, setTitle] = useState("");
    const [Cart, setcart] = useState(AddToCartdata);

    function FilterCart(id){

         let filtereddata = Cart.filter((items)=>{
            return items.id !== id;
         })
          
         setcart(filtereddata);


    }

   
    function changeTheState(items){

      setcart((prevState)=>{
         return [
            ...prevState,
             items
            //  {
            //    title:items.title,
            //    price:items.price,
            //    brand:items.brand,
            //    url:items.url,
            //  }
         ]
      })


       console.log(Cart);

    }
     
    function ShowTitle(data){
      setTitle(data);
    }
     
    function Showdata (data){
        setCheck(data);
    }
  const value ={
     Cart:Cart,
     check:check,
     title:title,
     changeTheState:changeTheState,
     Showdata:Showdata,
     ShowTitle:ShowTitle,
     FilterCart:FilterCart,


  }


  return (
     <auth.Provider  value={value}>
        {children}

     </auth.Provider>
  )
}

export default Contextkk;