import React from 'react'
import { useContext } from 'react'
import { auth } from './context/context'


const EditedProduct = () => {
    let initialState = useContext(auth);
    let EditedProduct = initialState.EditedProduct
    console.log(EditedProduct);
  return (
    <div>
        <h1>EditedProduct</h1>
    </div>
  )
}

export default EditedProduct