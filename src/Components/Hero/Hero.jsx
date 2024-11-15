// eslint-disable-next-line no-unused-vars
import React from "react";
import imgwomen from "../../assets/hero/women.png";
import imgsale from "../../assets/hero/sale.png";
import imgshopping from "../../assets/hero/shopping.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: imgsale,
    title: "Upto 50% off on all Men's Wear",
    description:
      "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: imgwomen,
    title: "30% off on all Women's Wear",
    description:
      "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: imgshopping,
    title: "70% off on all Products Sale",
    description:
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
const Hero = () => {
  // const settings = {
  //     // dots: true,
  //     // infinite: true,
  //     // speed: 500,
  //     // slidesToShow: 1,
  //     // slidesToScroll: 1
  //   };
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px]  bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
      {/* background Hero */}
      <div className="absolute w-[700px] h-[700px] bg-primary/40 rounded-3xl rotate-45 -top-1/2 right-0 -z[10] "></div>
      {/* section hero */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* left side details */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10 ">
                  <h1 className="text-4xl font-bold">{data.title}</h1>
                  <p> {data.description}</p>
                  <button className=" bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-full w-[200px] ">
                    Order Now
                  </button>
                </div>
                {/* right side img */}
                <div className="order-1 sm:order-2">
                  <img src={data.img} alt="imgwomen" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
