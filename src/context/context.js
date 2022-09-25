import React, { useState } from "react";
import { createContext } from "react";
import { AddToCartdata } from "../data";
import Datas from "../data";

export const  auth = createContext();

const Contextkk = ({children}) => {

    const [check, setCheck] = useState("");

    const [title, setTitle] = useState("");
    const [EditProfiles, setEdit] = useState()
    const [Cart, setcart] = useState(AddToCartdata);
    const [EditedProduct , setEditedProfile] = useState([])
    console.log("djkhadjk")

    function FilterCart(id){

         let filtereddata = Cart.filter((items)=>{
            return items.id !== id;
         })
          
         setcart(filtereddata);


    }

    const EditData = (data)=> {


    let datas =   Datas.filter((items)=>{

          if(data.id === items.id){
            console.log(items) 
            return items;
          }
      })
      setEdit(datas)

      
    }
   const  changeTheProduct = (formitem)=>{
         // let editedhuhu = Datas.map((items)=>{
         //     if(formitem.price=== items.price){
         //        items.price= formitem.price;
         //        items.brand = formitem.brand;
         //        items.title = formitem.title;
         //        return items;
         //     }
         //     else{
         //       return items;
         //     }
         // })
         console.log("k ho ho")
         Datas.at(formitem.id).price = formitem.price;
         Datas.at(formitem.id).brand = formitem.brand;
         Datas.at(formitem.id).title = formitem.title;
         
        setEditedProfile(Datas);
          
       


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
     EditProfiles,EditProfiles,
     EditedProduct:EditedProduct,
     changeTheProduct,changeTheProduct,
     EditData:EditData,
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