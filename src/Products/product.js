import React, { useState } from "react";
import Datas from "../data";
import Image from "../food.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import Star from "../Component/Star";
import { Dropdown } from "flowbite-react";




const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Product = () => {
  const [productstate, setProduct] = useState(Datas);





  




  
  console.log(productstate);
  //sort function start//

  //sort by price
  function sortbyprice(fp, sp) {
    setProduct(Datas);
    let nedata = productstate.filter(function (value) {
      if (value.price > fp && value.price < sp) {
        console.log(value);
        return value;
      }
    });

    setProduct(nedata);
  }
  //end of sort by price

  //star of sort by brand function

  function SortbyBrand(data) {
  
    // let branddata = productstate.filter(function (items) {
    //   if (items.brand === data) {
    //     return items;
    //   }
    // });
    //  setProduct(branddata);

    // setProduct( function(prevstate){
    //  return  prevstate = branddata;     
     
       

    
    

    // });
     let changestate = Datas.map(function(items){
      return items;
     })
    //  setProduct(changestate);
     let branddata = changestate.filter(function(filtereditems){
      if(filtereditems.brand === data){
        return filtereditems;
      }
     })
     setProduct(branddata);
  }
 let some = Array.from(Array(10).keys())
   let timearray = some.map(function(items){
         return <div><p>{items}</p></div>
   })
   
   
   //end of sort by brand

  //start of sort by accending order

  function SortByAccending() {
    // let accendingdata = productstate.map(function (items) {
    //   return items.brand;
    // });
    // let finaldata = accendingdata.sort();
    let Data =  Datas.map(function(items){
      return items;
    })
   let finaldata = Data.sort(function(a,b){
      if(a.brand <b.brand){
        return -1;
      }
    })
    console.log(finaldata); 
     
    // let newfiltereddata =  productstate.filter(function(items){
    //     if(items.brand === finaldata){
    //       return items;
    //     }
      
   
    // })
    //  let sortdata = finaldata.map(function(items){
    //     return items;

    //  })
    //  console.log(sortdata);
   
    setProduct(finaldata);
    
  }

  function Deletearray(values) {
    let data = productstate.filter(function(value) {
      if (value.id !== values) {
        console.log(value);
        return value;
      }
    });
    setProduct(data);

    // productsss.push({
    //     "albumId":2,
    //      "id":6,
    //      "title": "dafafaf",
    //      "url": "this is what we live for",
    //      "thumbnailUrl":"fjabjdam"

    // })
  }

  let datas = productstate.map(function (items, i ) {
     
      
       
     if(i<3){
      return (
        <div className=" w-full h-68 md:w-48   bg-git md:h-68 ml-3 pb-2 rounded drop-shadow-sm">
          { 
            items.dis === "Discounted"? 
            <div className=" rounded-l w-20 bg-mid">
            <p className="pl-2 text-center text-tiwh">Dis 10%</p>
          </div> : null}
          <img src={Image} alt="foodify groceries"/>
          
          <p className="text-center mt-2">{items.brand}</p>
          <div className="flex justify-center"><Star/></div>
          <p className="text-center mt-1 text-tiwh">${items.price}</p>
          <div className="flex justify-center mt-2"><button className="rounded-xl pl-3 pr-3 p-1 bg-mid text-tiwh" onClick={() => Deletearray(items.id)}>Add to cart</button></div>
        </div>
      );

     }
 
  });

  return (
    <div>
      <div className=" flex flex-col md:flex md:flex-row  justify-evenly m-20">
        <div className="w-full md:w-1/3">
          <div className="w-full md:w-60">
            <div className="bg-mid w-full md:w-56 p-1.5 pl-2 mb-5 rounded-md">
              <p className="text-xl text-tiwh">Category</p>
            </div>
            <div className="border-b border-git flex justify-between">
              <p className="">Fruits</p>
              <button className="w-6">+</button>
            </div>
            <div className="border-b border-git flex justify-between">
              <p>Vegetable</p>
              <button className="w-6">+</button>
            </div>
            <div className="border-b border-git flex justify-between">
              <p>Grocery Item</p>
              <button className="w-6">+</button>
            </div>
          </div>
          <div className=" w-full md:w-60 mt-8">
            <div className="bg-mid w-full md:w-56 p-1.5 pl-2 mb-5 rounded-md">
              <p className="text-xl text-tiwh">Shop by price</p>
            </div>
            <div className="flex">
              <div>
                {" "}
                <button
                  className="rounded bg-git p-1"
                  onClick={() => sortbyprice(140, 200)}
                >
                  $100 - $200
                </button>
              </div>
              <div className="ml-3">
                {" "}
                <button
                  className="rounded bg-git p-1"
                  onClick={() => sortbyprice(200, 300)}
                >
                  $300 - $400
                </button>
              </div>
            </div>

            <div className="flex mt-2">
              <div>
                {" "}
                <button
                  className="rounded bg-git p-1"
                  onClick={() => sortbyprice(140, 200)}
                >
                  $400 - $500
                </button>
              </div>
              <div className="ml-3">
                {" "}
                <button
                  className="rounded bg-git p-1"
                  onClick={() => sortbyprice(200, 300)}
                >
                  $500 - $600
                </button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-60 mt-8" >
          <div className="bg-mid w-full md:w-56 p-1.5 pl-2 mb-5 rounded-md">
              <p className="text-xl text-tiwh">Shop by brand</p>
            </div>
            <div className="flex">
            <button
             className="hover:text-green-600"
              onClick={() => {
                SortbyBrand("samsung");
              }}
            >
             <p>samsung</p>
            </button>
            <div className="ml-2">
            <button
             className=" hover:text-green-600"
              onClick={() => {   
                SortbyBrand("nokia");
              }}
            >
             <p>Nokia</p>
            </button>
            </div>
          </div>
          </div>
          <div className=" w-full md:w-60 mt-8">
            <div className="bg-mid w-full md:w-56 p-1.5 pl-2 mb-5 rounded-md"><p className="text-tiwh">Sort by accending</p></div>
          <div>
            <button className="bg-gray-300" onClick={SortByAccending}>Accending</button>
            <button className="ml-2 bg-gray-300">Date</button>
          </div>
          </div>
        </div>

        <div className=" w-full md:w-2/3">
          <div className=" flex justify-end bg-git h-16 w-full md:2/3">
          <div class="dropdown relative mr-3">
      <button
        class="
          dropdown-toggle
          p-2
          py-2.5
          bg-git
          text-black
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-mid hover:shadow-lg
          focus:bg-mid focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg active:text-white
          transition
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap
        "
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        sort by
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="caret-down"
          class="w-2 ml-2"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            fill="currentColor"
            d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
          ></path>
        </svg>
      </button>
      <ul
        class="
          dropdown-menu
          min-w-max
          absolute
          hidden
          bg-white
          text-base
          z-50
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          hidden
          m-0
          bg-clip-padding
          border-none
        "
        aria-labelledby="dropdownMenuButton1"
      >
        <li>
          <div>
         
          <a
            className="
              dropdown-item
              text-sm
              pl-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
            href="#"
            >{timearray}</a
          > 
          </div>
        </li>
        {/* <li>
          <div onClick={SortByAccending}>
          <a
            class="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
            href="#"
            >Accending</a
          >
          </div>
        </li> */}
        {/* <li>
          <a
            class="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
            href="#"
            >Brand</a
          >
        </li> */}
      </ul>
    </div>
            
 
    <div class="flex justify-end">
  
    
    <div class="dropdown relative">
      <button
        class="
          dropdown-toggle
          p-2
          py-2.5
          bg-git
          text-black
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-mid hover:shadow-lg
          focus:bg-mid focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg active:text-white
          transition
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap
        "
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        sort by
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="caret-down"
          class="w-2 ml-2"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            fill="currentColor"
            d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
          ></path>
        </svg>
      </button>
      <ul
        class="
          dropdown-menu
          min-w-max
          absolute
          hidden
          bg-white
          text-base
          z-50
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          hidden
          m-0
          bg-clip-padding
          border-none
        "
        aria-labelledby="dropdownMenuButton1"
      >
        <li>
          <div>
         
          <a
            className="
              dropdown-item
              text-sm
              pl-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
            href="#"
            >Decending</a
          > 
          </div>
        </li>
        <li>
          <div onClick={SortByAccending}>
          <a
            class="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
            href="#"
            >Accending</a
          >
          </div>
        </li>
        <li>
          <a
            class="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
            href="#"
            >Brand</a
          >
        </li>
      </ul>
    </div>
  
</div>







          </div>
          <div className=" mt-4 flex flex-col md:flex md:flex-row justify-evenly bg-tiwh mt-3">{datas}</div>
          <div className=" flex flex-col md:flex md:flex-row justify-evenly bg-tiwh mt-3">{datas}</div>
          <div className=" flex flex-col md:flex md:flex-row justify-evenly bg-tiwh mt-3">{datas}</div>
          </div>
      </div>
      <div>
        {timearray}
      </div>

      
    </div>
  );
};

export default Product;
