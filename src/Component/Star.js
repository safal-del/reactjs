import { FaStar } from "react-icons/fa";
import { useState } from "react";




const Star =()=>{
    const [starone, setOne] = useState(false);
const [startwo, setTwo] = useState(false);
const [starthree, setThree] = useState(false);
const [starFour, setFour] = useState(false);
const [starFive, setFive] = useState(false);

 return(<div>
    <div className="starbtn flex mt-2">
<FaStar
  onClick={() => setOne(true)}
  style={{ color: starone ? "gold" : "black" }}
/>
<FaStar
  onClick={() => setTwo(true)}
  style={{ color: startwo ? "gold" : "black" }}
/>
<FaStar
  onClick={() => setThree(true)}
  style={{ color: starthree ? "gold" : "black" }}
/>
<FaStar
  onClick={() => setFour(true)}
  style={{ color: starFour ? "gold" : "black" }}
/>
<FaStar
  onClick={() => setFive(true)}
  style={{ color: starFive ? "gold" : "black" }}
/>
</div>

 </div>)

}
export default Star;




