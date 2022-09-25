import React, { useState } from "react";
import "./Singleproduct.css";
import { FaStar } from "react-icons/fa";
import Image1 from "./food.jpg";
import Image2 from "./fruit.jpeg";
import Image3 from "./fruit1.jpg";
import { useContext } from "react";
import { auth } from "./context/context";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import Slider from "react-slick";

const Singleproduct = () => {
  const variale = useContext(auth);
  console.log(variale.check);
  let datas = variale.check;
  let newtitle = variale.title;
  console.log(newtitle);
  const [Images, setImages] = useState(Image1);
  const [starone, setOne] = useState(false);
  const [startwo, setTwo] = useState(false);
  const [starthree, setThree] = useState(false);
  const [starFour, setFour] = useState(false);
  const [starFive, setFive] = useState(false);
  console.log(starone);

  
  let review = "no review for noew";

  const [recentdata, setRecent] = useState(newtitle);
  const [count, setCount] = useState(1);

  console.log(datas);

  return (
    <div className="main">
      <div className="des_img flex justify-evenly m-5">
        <div className="image w-1/2 ">
          {/* <div> {datas}</div> */}

          <div>
            {/* <img
              className="center hover:scale-x-110"
              src={Images}
              height="450px"
              alt="foodify"
            /> */}

            <InnerImageZoom
              className="overflow-hidden"
              width={600}
              height={400}
              src={Images}
              zoomType="hover"
              fadeDuration={0}
              hideHint={true}
              hasSpacer={true}
            />
            <div className="pt-5 flex justify-evenly ">
              <img
                onClick={() => setImages(Image1)}
                className="rounded opacity-30  hover:opacity-100 border-black "
                src={Image1}
                alt="foodfy"
                height="50px"
                width="50px"
              />
              <img
                onClick={() => setImages(Image2)}
                className="rounded opacity-30 hover:opacity-100 border-black"
                src={Image2}
                alt="foodfy"
                height="50px"
                width="50px"
              />
              <img
                onClick={() => setImages(Image3)}
                className="rounded opacity-30 hover:opacity-100 border-black"
                src={Image3}
                alt="foodfy"
                height="50px"
                width="50px"
              />
            </div>
          </div>
        </div>

        <div className="secdiv w-1/2">
          <h1 className="text-3xl font-semibold">Mango</h1>
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
          <div className="productdes mt-2">
            <p className="text-1.5xl font-serif">
              Nisl nunc mi ipsum faucibus vitae aliquet. Sollicitudin aliquam
              ultrices sagittis orci a scelerisque purus semper. Vulputate ut
              pharetra sit amet aliquam id diam. Egestas tellus rutrum tellus
              pellentesque. Rutrum...
            </p>
          </div>
          <div className="priceqtysec flex ">
            <div className="forwidth w-52 bg-red=500 flex justify-between">
              <div className="innerprice ">
                <div className="mt-5">
                  <h6 className="text-lg">Price:</h6>
                </div>
                <div className="mt-6">
                  <h6 className="text-lg">Size:</h6>
                </div>
                <div className="mt-5">
                  <h6 className="text-lg">Color:</h6>
                </div>
                <div className="mt-5">
                  <h6 className="text-lg">Brand:</h6>
                </div>
                <div className="mt-5">
                  <h6 className="text-lg">Type:</h6>
                </div>
                <div className="mt-5">
                  <h6 className="text-lg">Quantity:</h6>
                </div>
              </div>
              <div className="innerdes">
                <div className="mt-5">
                  <h6 className="text-lg"> Rs 100</h6>
                </div>
                <div className="mt-5 flex">
                  <button className="w-8 bg-gray-500 ">3kg</button>
                  <button className="w-8 bg-gray-500  ml-1.5">2kg</button>
                  <button className="w-8 bg-gray-500  ml-1.5">3kg</button>
                </div>
                <div className="mt-5 flex">
                  {" "}
                  <div className="bg-red-700 w-8 h-8 p-1"></div>
                  <div className="bg-mid w-8 h-8 p-1 ml-1.5 "></div>
                  <div className="bg-yellow-700 w-8 h-8 p-1 ml-1.5"></div>
                </div>
                <div className="mt-5">
                  <h6 className="text-lg">Hjaur ko khojai</h6>
                </div>
                <div className="mt-5">
                  <h6 className="text-lg">Fruits</h6>
                </div>
                <div className="mt-5 flex ">
                  <button
                    onClick={() => setCount(count + 1)}
                    className="p-1 bg-gray-600 w-8"
                  >
                    +
                  </button>
                  <p className="border-2 w-8 text-center">{count}</p>
                  <button
                    onClick={() => {
                      if (count <= 1) {
                        return 1;
                      } else {
                        return setCount(count - 1);
                      }
                    }}
                    className="p-1 bg-gray-600 w-8"
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="btndiv mt-10">
            <div className="addtocart_buynow">
              <button className="btn pt-2.5 pb-2.5 pl-5 pr-5 rounded-3xl bg-mid ">
                Add to Cart
              </button>
              <button className="btn1 ml-2 pt-2.5 pb-2.5 pl-4 pr-4 rounded-3xl bg-mid  ">
                Buy now
              </button>
            </div>

            <div className="pt-3">
              <button className="btn2 p-2.5 pl-3.5 pl-3.5 rounded-3xl bg-mid ">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="count_addtocartdiv  ml-5 mt-5 mr-5 mb-0">
        <div className="buynow_btn flex">
          <div className="buy_nowbtn">
            <button
              onClick={() => setRecent(newtitle)}
              className="bg-orange-400 rounded pl-10 pr-10 pt-2 pb-2"
            >
              Product Description
            </button>
          </div>
          <div className="add_tocart">
            <button
              onClick={() => setRecent(review)}
              className="bg-mid rounded pl-10 pr-10 pt-2 pb-2 ml-1"
            >
              Reviews
            </button>
          </div>
        </div>
      </div>
      <div className="descriptionbox rounded w-100 ml-5 mr-5   h-56 bg-gray-300">
        <p className="pt-2">{recentdata}</p>
      </div>
      <div className="carousel m-5 w-90 md:w-90  ">
        <Slider
          arrows={true}
          slidesToShow={4}
          dots={true}
          slidesToScroll={4}
          infinite={true}
          speed={500}
          autoplay={true}
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]}
        >
          <div className="checking  bg-gray-300 pt-3 rounded">
            <div className="flex justify-center">
              <img
                className="h-48 block ml-auto mr-auto"
                src={Image1}
                alt="lkdnakda"
              />
            </div>
            <div className="starbtnn flex justify-center mt-2">
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
            <div className="mt-2">
              <h6 className="text-center text-2xl">$400</h6>
            </div>
            <div className="flex justify-center mt-2">
              <button className="btn pt-2.5 pb-2.5 pl-5 pr-5 rounded-3xl bg-mid ">
                Add to Cart
              </button>
            </div>
          </div>
          {/* end of first div */}

          <div className=" ml-0   bg-gray-300 pt-3 rounded">
            <div className="flex justiy-center">
              <img
                className=" h-48 block ml-auto mr-auto"
                src={Image1}
                alt="lkdnakda"
              />
            </div>
            <div className="starbtnn flex justify-center mt-2">
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
            <div className="mt-2">
              <h6 className="text-center text-2xl">$400</h6>
            </div>
            <div className="flex justify-center mt-2">
              <button className="btn pt-2.5 pb-2.5 pl-5 pr-5 rounded-3xl bg-mid ">
                Add to Cart
              </button>
            </div>
          </div>
          {/* end of second div */}
          <div className=" ml-0   bg-gray-300 pt-3 rounded">
            <div className="flex justiy-center">
              <img
                className="  h-48 block ml-auto mr-auto"
                src={Image1}
                alt="lkdnakda"
              />
            </div>
            <div className="starbtnn flex justify-center mt-2">
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
            <div className="mt-2">
              <h6 className="text-center text-2xl">$400</h6>
            </div>
            <div className="flex justify-center mt-2">
              <button className="btn pt-2.5 pb-2.5 pl-5 pr-5 rounded-3xl bg-mid ">
                Add to Cart
              </button>
            </div>
          </div>
          {/* end of third div */}
          <div className="ml-0   bg-gray-300 pt-3 rounded">
            <div className="flex justiy-center">
              <img
                className="  h-48 block ml-auto mr-auto"
                src={Image1}
                alt="lkdnakda"
              />
            </div>
            <div className="starbtnn flex justify-center mt-2">
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
            <div className="mt-2">
              <h6 className="text-center text-2xl">$400</h6>
            </div>
            <div className="flex justify-center mt-2">
              <button className="btn pt-2.5 pb-2.5 pl-5 pr-5 rounded-3xl bg-mid ">
                Add to Cart
              </button>
            </div>
          </div>
          {/* end of fourth slide */}
          <div className="  bg-gray-300 pt-3 rounded">
            <div className="flex justiy-center">
              <img
                className=" h-48 block ml-auto mr-auto"
                src={Image1}
                alt="lkdnakda"
              />
            </div>
            <div className="starbtnn flex justify-center mt-2">
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
            <div className="mt-2">
              <h6 className="text-center text-2xl">$400</h6>
            </div>
            <div className="flex justify-center mt-2">
              <button className="btn pt-2.5 pb-2.5 pl-5 pr-5 rounded-3xl bg-mid ">
                Add to Cart
              </button>
            </div>
          </div>
          {/* end of fifth slide */}
          <div className="  bg-gray-300 pt-3 rounded">
            <div className="flex justiy-center">
              <img
                className="  h-48 block ml-auto mr-auto"
                src={Image1}
                alt="lkdnakda"
              />
            </div>
            <div className="starbtnn flex justify-center mt-2">
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
            <div className="mt-2">
              <h6 className="text-center text-2xl">$400</h6>
            </div>
            <div className="flex justify-center mt-2">
              <button className="btn pt-2.5 pb-2.5 pl-5 pr-5 rounded-3xl bg-mid ">
                Add to Cart
              </button>
            </div>
          </div>
          {/* end of sixth div */}
          <div className="  bg-gray-300 pt-3 rounded">
            <div className="flex justiy-center">
              <img
                className="  h-48 block ml-auto mr-auto"
                src={Image1}
                alt="lkdnakda"
              />
            </div>
            <div className="starbtnn flex justify-center mt-2">
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
            <div className="mt-2">
              <h6 className="text-center text-2xl">$400</h6>
            </div>
            <div className="flex justify-center mt-2">
              <button className="btn pt-2.5 pb-2.5 pl-5 pr-5 rounded-3xl bg-mid ">
                Add to Cart
              </button>
            </div>
          </div>
          {/* end of seventh div */}
          <div className="  bg-gray-300 pt-3 rounded">
            <div className="flex justiy-center">
              <img
                className="  h-48 block ml-auto mr-auto"
                src={Image1}
                alt="lkdnakda"
              />
            </div>
            <div className="starbtnn flex justify-center mt-2">
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
            <div className="mt-2">
              <h6 className="text-center text-2xl">$400</h6>
            </div>
            <div className="flex justify-center mt-2">
              <button className="btn pt-2.5 pb-2.5 pl-5 pr-5 rounded-3xl bg-mid ">
                Add to Cart
              </button>
            </div>
          </div>
          {/* end of eigth div */}
          <div className="  bg-gray-300 pt-3 rounded">
            <div className="flex justiy-center">
              <img
                className="  h-48 block ml-auto mr-auto"
                src={Image1}
                alt="lkdnakda"
              />
            </div>
            <div className="starbtnn flex justify-center mt-2">
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
            <div className="mt-2">
              <h6 className="text-center text-2xl">$400</h6>
            </div>
            <div className="flex justify-center mt-2">
              <button className="btn pt-2.5 pb-2.5 pl-5 pr-5 rounded-3xl bg-mid ">
                Add to Cart
              </button>
            </div>
          </div>
          {/* end of ninth div */}
        </Slider>
      </div>
    </div> //end of single product
  );
};

export default Singleproduct;
