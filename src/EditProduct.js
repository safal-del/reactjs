import React, { useState } from 'react'
import { useContext } from 'react'
import { auth } from './context/context'
import { Navigate, useNavigate } from 'react-router-dom'



 const EditProduct = () => {
  const Navigate = useNavigate()
    let initialState = useContext(auth);
    let EditProfile = initialState.EditProfiles
    let changeTheStates = initialState.changeTheProduct
    console.log(EditProfile)
    function navigateToContext(){
       Navigate("/context")
       
    }
    const [formstate, setFormState] = useState({
      id:EditProfile[0].id,
      title:EditProfile[0].title,
      price:EditProfile[0].price,
      brand:EditProfile[0].brand

    })

    function HandleInputs(){
      setFormState({
        id: document.getElementById("id").value,
        title: document.getElementById("title").value,
        price: document.getElementById("price").value,
        brand:document.getElementById("brand").value,

     


      })
      

    }
   function sendToState (){
     changeTheStates(formstate);
     Navigate("/editedproduct");



   }


  return (
    <div>
        <div> 
          <h1>
            <p>Safal Karki.</p>

            <button onClick={navigateToContext}>dad</button>

            title:<input  onChange={HandleInputs} type="text"  id="title" name='title' /><br />
            price"<input onChange={HandleInputs} type="text"  id='price' name='price' /> <br />
            brand:<input onChange={HandleInputs} type= "text" id= "brand" name='brand' /> <br /> 
            id:<input onChange={HandleInputs} type ="text" id = "id"  name='id' /><br />
            <button onClick={sendToState}>edit</button> 






          </h1>
        </div>
s
    </div>
  )
}
export default EditProduct;
