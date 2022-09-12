import React, { useContext } from 'react'
// import  { useState } from "react";
import { FaHeart } from "react-icons/fa";
import './App.css';
import Image from "./food.jpg";
import data from "./data";
import { auth } from './context/context';

import { useNavigate } from 'react-router-dom';
// import RelatedProduct from './relatedproduct';

const Homepage = () => {
   let initialstate = useContext(auth);
    let changestate = initialstate.Showdata;
    let changeTitle = initialstate.ShowTitle;
    console.log(changestate);
     
     const navigate = useNavigate();

     function NavigateToSingle(){
       navigate("/description");
     }
     function NagivateToGrid(){
      navigate("gridproduct");
     }
     function Navigatetorelated(){
      navigate("/related");
     }
     function Navigatetoproduct(){
      navigate("/product");
     }
     function changetate(props){
       changestate(props.id);
       changeTitle(props.title);

     }

   
   
   let datas = data.map(function(items){
    return(<div className='w-48 bg-gray-300 rounded-md pb-2' onClick={()=> { 
       changetate(items);
     

      }}>
       <div className='w-20 bg-green-600'><p className='pl-2'>Dis 10%</p></div>
       <img src={Image}  onClick ={NavigateToSingle} alt = "foodify groceries"/>
      <div className='flex justify-evenly pt-1'>
        <FaHeart  style={{color:"green"}}/>
        <FaHeart style={{color:"green"}}/>
        <FaHeart style={{color:"green"}}/>


      </div>
        
          

     </div>)

   })
   
    
  return (
    <div>
        <div className=" bg-green-600 h-10 bg-green-600  flex justify-between" >
    <h1 className="font-semibold text-2xl text-white pt-1.5 pl-4 font-mono" > Foodfy</h1>
    <div className="w-48 flex justify-evenly  mt-2">
      <FaHeart style={{color:"white"}} />
      <FaHeart style={{color:"white"}} />
      <FaHeart  style={{color:"white"}}/>
    </div>
    
   

   </div>
   <div className="banner h-96  bg-cover bg-black bg-opacity-5" >
    <div className="h-96 bg-black bg-opacity-50">
    
      <div>
        <h1 className="text-white text-6xl font-semibold font-mono text-center pt-20"> Complete grocery <br/> in your doorstep</h1>
        </div>
        <div className=" pt-10 flex justify-center ">
          <div><button className="rounded-2xl text-white bg-green-600 border-8 border-green-600 hover:bg-red-700 hover:border-red-700">Register now</button></div>
          <div className="pl-4"><button className=" text-white border-8 border-gray-500 rounded-2xl bg-gray-500 hover:bg-red-700 hover:border-red-700"> Shop now</button></div>

        </div>
        
     
    </div>
    
    
    
   </div>
   <div className='flex'>
    <button onClick={Navigatetoproduct} className='bg-green-500 pl-3 pr-3'>Products</button> 
    <button onClick={NagivateToGrid} className='bg-mid pl-3 pr-3'>Grid Products</button>

   </div>
   <div className="p-4 pb-10 bg-gray-200">
    
     <h1 className="text-3xl text-center">Top Products</h1>
     <div className="flex justify-evenly pt-4">
     {datas}
     </div>
     <div className='trending pt-7 pb-5'>
     <h1 className="text-3xl text-center">Trending Products</h1>
     <div className="flex justify-evenly pt-4">
     {datas}
     </div>
     </div>
     <div className='popular pt-7 pb-5'>
     <h1 className="text-3xl text-center">Popular Products</h1>
     <div className="flex justify-evenly pt-4">
     {datas}
     </div>
     </div>
    
    </div>
     <button className='bg-green p-5' onClick={Navigatetorelated}>
      Click on this 
     </button>
    
    </div>
  )
}

export default Homepage