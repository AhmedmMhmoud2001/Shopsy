// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaStar } from "react-icons/fa";
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Img2,
    title: "Printed shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Img3,
    title: "Women shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const BestProducts = () => {
  return (
    <div className="dark:bg-gray-800 dark:text-white">
      {/* details and header */}
      <div className="container  pb-20">
        <div className=" ">
          <p className="text-primary text-sm">Top Rated Products for you</p>
          <h2 className="text-3xl font-bold py-2">Best Products</h2>
          <p className="text-gray-400 text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>
        {/* cards */}
        <div className="container flex justify-center items-center gap-12 flex-wrap ">
          {ProductsData.map((data) => (
            
            <div
            key={data.id}
              
              className="w-[300px] h-[300px] shadow-xl text-center p-4 flex flex-col items-center justify-end gap-2  hover:text-white hover:bg-black/70 dark:bg-gray-900  dark:text-white dark:hover:bg-primary  rounded-3xl duration-300 relative group mt-24"
            >
              <img
                src={data.img}
                alt=""
                className="absolute top-[-80px] w-[140px] hover:scale-105 group-hover:scale-105  duration-300 "
              />
              <div className="flex gap-2 justify-center">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
              </div>
              <h3 className="font-bold text-lg">{data.title}</h3>
              <p className="text-gray-400 text-sm group-hover:text-white">
                {data.description}
              </p>
              <button className="bg-primary text-white p-1 rounded-full w-[100px] duration-300 group-hover:bg-white group-hover:text-primary ">
                Order Now
              </button>
            </div>
          

          ))}
        </div>
      </div>
    </div>
  );
};

export default BestProducts;
