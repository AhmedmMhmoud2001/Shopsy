// eslint-disable-next-line no-unused-vars
import React from "react";
import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import { FaStar } from "react-icons/fa";
const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women western",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img2,
    title: "Fashin T-Shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },
];
const Products = () => {
  return (
    <div className=" dark:text-white dark:bg-gray-800">
      <div className="container py-20">
        {/* section details &  */}
        <div className=" text-center ">
          <p className="text-primary text-sm">Top Selling Products for you</p>
          <h2 className="text-3xl font-bold py-2">Products</h2>
          <p className="text-gray-400 text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>
        {/* prodects & button */}
        <div>
          {/* prodects */}
          {/* flex justify-between items-center */}
          <div className=" py-10 flex justify-center items-center gap-10 flex-wrap ">
            {ProductsData.map((data) => (
              <div key={data.id} >
                <div className=" w-[160px] p-[5px]">
                  <img
                    src={data.img}
                    alt=""
                    className="h-[220px] w-[150px] object-cover rounded-md"
                  />
                  <h3 className="text-center font-bold">{data.title}</h3>
                  <p className="text-center text-gray-400 text-sm">
                    {data.color}
                  </p>
                  <div className="flex items-center gap-1">
                    {" "}
                    <FaStar className="text-yellow-400" />{" "}
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* button */}
          <div className="w-[100%] flex justify-center">
            <button className="w-[200px] text-white  py-2 rounded-md bg-gradient-to-r from-primary to-secondary">
              view all Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
