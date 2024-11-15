// eslint-disable-next-line no-unused-vars
import React from "react";
import Slider from "react-slick";
const TestimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Satya Nadella",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Virat Kohli",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Sachin Tendulkar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
  },
];
const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="dark:bg-gray-800 dark:text-white">
      <div className="container">
        {/* title and detailes */}
        <div className=" text-center ">
          <p className="text-primary text-sm">What our customers are saying</p>
          <h2 className="text-3xl font-bold py-2">Testimonials</h2>
          <p className="text-gray-400 text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>
        {/* cards & Testimonials*/}
        <div className="py-20">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="flex justify-center items-center " key={data.id}>
                <div className=" max-w-[350px] min-w[250px] h-[250px] p-4 m-4  shadow-xl flex flex-col gap-3 rounded-xl dark:bg-gray-900 bg-primary/10 relative">
                  <img
                    src={data.img}
                    alt={data.name}
                    className="w-[100px] h-[100px] rounded-[50%]"
                  />
                  <p className="text-sm text-gray-400"> {data.text}</p>
                  <h3 className="text-2xl">{data.name}</h3>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
