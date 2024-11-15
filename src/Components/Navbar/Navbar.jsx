// eslint-disable-next-line no-unused-vars
import React from "react";
import Logo from "../../assets/logo.png";
import { FaSearch, FaShoppingCart, FaCaretDown } from "react-icons/fa";
import Darkmode from "./Darkmode";
const Navbar = () => {
  const Menu = [
    {
      id: 1,
      link: "#",
      name: "Home",
    },
    {
      id: 2,
      link: "#",
      name: "Top Rated",
    },
    {
      id: 3,
      link: "#",
      name: "Kids Wear",
    },
    {
      id: 4,
      link: "#",
      name: "Mens Wear",
    },
    {
      id: 5,
      link: "#",
      name: "Electronics",
    },
  ];

  const dropDownLink = [
    {
      id: 1,
      name: "Trending Products",
      link: "#",
    },
    {
      id: 2,
      name: "Best Selling",
      link: "#",
    },
    {
      id: 3,
      name: "Top Rated",
      link: "#",
    },
  ];
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper navbar */}
      <div className="py-2 bg-primary/40">
        <div className=" container flex justify-between items-center ">
          {/* lift side */}
          <div>
            <a
              href="#"
              className="flex items-center gap-2 text-2xl sm:text-3xl font-bold  "
            >
              <img src={Logo} className="w-10" alt="logo shopsy El Santawy" />
              Shopsy
            </a>
          </div>
          {/* right side */}
          <div className="flex justify-between items-center gap-4 ">
            {/* search bar */}
            <div className="relative group hidden sm:block">
              <input
                type="search"
                placeholder="search"
                name="search"
                className="w-[200px] sm:w-[200] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 group-hover:border-primary dark:bg-gray-800 px-2 py-1  focus:outline-none focus:border-1  "
              />
              {/* icon seach */}
              <div className="absolute text-gray-400 group-hover:text-primary top-1/4 right-3">
                <FaSearch />
              </div>
            </div>
            {/* cart order button */}
            <div>
              <button className="flex items-center gap-3 text-white  bg-gradient-to-r  from-primary to-secondary py-1 px-4 rounded-full group transition-all duration-200">
                <span className="group-hover:block hidden transition-full duration-200 font-bold">
                  order
                </span>
                {/* icon cart */}
                <FaShoppingCart className="text-2xl" />
              </button>
            </div>
            {/* light and dark mode  switch*/}
            <div>
              <Darkmode />
            </div>
          </div>
        </div>
      </div>
      {/* lowwer navbar */}
      <div className="flex items-center justify-center  ">
        <ul className=" sm:flex hidden items-center justify-center gap-8 py-2">
          {Menu.map((data) => (
            <li key={data.id} className="hover:text-primary duration-300">
              <a href={data.link}> {data.name}</a>
            </li>
          ))}
          <li className="group relative cursor-pointer">
            <a href="" className="flex items-center ">
              Trending Products
              <FaCaretDown />
            </a>
            <div className="absolute top-6 text-black bg-white px-4 py-4 rounded-md shadow-md w-[200px] hidden group-hover:block">
              <ul className=" gap-4 ">
                {dropDownLink.map((data) => (
                  <li key={data.id} className=" ">
                    <a
                      href={data.link}
                      className="w-full hover:bg-primary/20 rounded-md inline-block py-2 px-2"
                    >
                      {" "}
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
