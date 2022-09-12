
import Homepage from "./homepage";
import Singleproduct from "./singleproduct";
import slider from "./slider";
import Slider from "./slider";

import Contextkk from "./context/context";
import { Routes, Route } from "react-router-dom";
import RelatedProduct from "./relatedproduct";
import Product from "./Products/product";
import GridProducts from "./GridProducts";





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
      </Routes>  
    
      </Contextkk>
 
    
   
   
   </div>
  
  );
}

export default App;
