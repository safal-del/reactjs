
import Homepage from "./homepage";
import Singleproduct from "./singleproduct";
import slider from "./slider";
import Slider from "./slider";

import Contextkk from "./context/context";
import { Routes, Route } from "react-router-dom";
import RelatedProduct from "./relatedproduct";
import Product from "./Products/product";
import GridProducts from "./GridProducts";
import CartPage from "./AddToCart/AddToCart";
import  EditProduct  from "./EditProduct";
import EditedProduct from "./EditedProduct";





function App() {


  




      

   
 

  return (
    <div className="main">
      <Contextkk>
      <Routes>
      <Route path="/" element ={<Homepage/>} />
      <Route path = "/description" element = {<Singleproduct />}/>
      <Route path="/related" element ={<RelatedProduct />} />
      <Route path="/product" element ={<Product/>}/>
      <Route path="/gridproduct" element ={<GridProducts/>} />
      <Route path="/cart" element ={<CartPage/>} />
      <Route path="/editprofile" element ={<EditProduct/>} />
      <Route path="/context" element ={<Contextkk/>} />
      <Route path="/editedproduct" element ={<EditedProduct/>} />
      </Routes>  
    
      </Contextkk>
 
    
   
   
   </div>
  
  );
}

export default App;
