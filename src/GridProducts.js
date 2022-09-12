import React, { useEffect, useState } from 'react'
import Image from "./food.jpg";
import Image1 from "./fruit.jpeg"
import Datas from './data';
import "./Gridchange.css";



let arrays = {
    a:"hello",
    b:"k cha",
    c: "cha ali ali"
}

console.log(Object.keys(arrays));





const GridProducts = () => {
   
    
   const [theme, setTheme]= useState(null);
   const[justdata, setDaa]= useState("");
    

   let some = Object.values(arrays);
   
   useEffect(()=>{
   let daaa= some.map(function(items){
        
         return items;
    })
    setDaa(daaa);

   },[some])
    
     

   useEffect(()=>{
    if(window.matchMedia('(prefers-color-scheme:dark)').matches){
        setTheme("dark");
    }
    else{
        setTheme("light");
    }
   
   },[]);

   useEffect(()=>{
    
    if(theme === "dark"){
        document.documentElement.classList.add("dark");
    }
    else{
        document.documentElement.classList.remove("dark");
    }
   },[theme])

    let [tcolor,setColor] = useState("black");
    const [productdata, setData] = useState(Datas);

    function Deletearray(value){
         let data = productdata.filter(function(items){
             if(items.id !== value){
                return items;
             }

         })
         setData(data);

    }
    function changecolor(){
        setColor("green");
    }



let data = productdata.map(function(items){
    return <div className=' bg-mid dark:bg-gray-500 border-2 rounded-xl border-solid pb-3 '>
        <div className='flex justify-center'><div className='bg-foo hover:bg-bar'></div></div>
        <p className=' text-black dark:text-white'>{items.price}</p>
        <button onClick={()=>Deletearray(items.id)}>delete</button>
        
        

    </div>
})

 function handleSwitch(){
    // setTheme(function(prevstate){
    //    if(prevstate === "dark"){
    //     return prevstate = "light";
    //    }
    //    else{
    //     return prevstate = "dark";
    //    }
    // })
    if(theme==="dark"){
        setTheme("light");
    }
    else{
        setTheme("dark");
    }
 }





  return (
    <div className='bg-white dark:bg-gray-500'>
        <button onClick={handleSwitch} className="text-black dark:text-white">
            {theme==="dark"? "dark": "light"}
        </button>
    <div className=' bg-white dark:bg-gray-500 mb-4 grid  grid-cols-1 md:grid md:grid-cols-3 gap-4'>
        {data}
       



    </div>
    <div className='mb-4'>
        <h1 className=' font-bold text-heading   text-center'>what you think about this product</h1>

    </div>
    <button onClick={changecolor}>change</button>
    <div><p style={{color:tcolor}} className=' font-sans  text-xl'>hello hajur kata kata bug byte technology eta</p></div>
    <div>{justdata}</div>
    </div>
  )
}

export default GridProducts