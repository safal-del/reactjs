import React from 'react'
import { useContext } from 'react';
import { auth } from '../context/context';
import Image from "../food.jpg"
// import { useNavigate } from 'react-router-dom';

const CartPage = () => {
    let initialstate = useContext(auth);
    let cartItem = initialstate.Cart;
    let FilterCart = initialstate.FilterCart;
    // const navigate = useNavigate();

    function SendIDToFilterdata(data){
        FilterCart(data)



    }

     let ItemsofCart = cartItem.map((items)=>{
        return (<div className='w-48 h-56'>
              <img src={Image} />
              <h1>{items.price}</h1>
              <h1>{items.brand}</h1>
               <button onClick={()=> SendIDToFilterdata(items.id)}>delete</button>
        </div>)
     })
    

    console.log(cartItem);

  return (
    <div>
        <h1>Your Cart Page</h1>
        <div>
            {ItemsofCart}
        </div>

    </div>
  )
}

export default CartPage;