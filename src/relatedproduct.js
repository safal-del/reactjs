import React from "react";
import Slider from "react-slick";
import './index.css'



const RelatedProduct = () => {
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

  return (
    <div>
      <div class="bg-white my-5 w-full flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <main class="bg-sky-300 w-full md:w-1/2  px-5 py-40">
          <h1 class="text-2xl md:text-4xl">Main Content</h1>
        </main>
        <aside class="bg-green-300 w-full md:w-1/2 md:bg-red-500 px-5 py-40">
          <h1 class="text-2xl md:text-4xl">Sidebar</h1>
        </aside>
      </div>
      <div className="kei">
        <h2> Responsive </h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default RelatedProduct;
