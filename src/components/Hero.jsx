import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dummyImages } from "../constants";
import { styles } from "../styles";
import Slider from "react-slick";

const CarouselCard = ({ image }) => (
  <div className="w-5/6 h-96 overflow-hidden rounded-xl lg:w-3/6 mx-auto">
    <img
      src={image.image}
      alt="Carousel"
      className="w-full h-full object-cover"
    />
  </div>
);

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 1000, // Adjust the speed for slide transition
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true, // Set to true to enable autoplay
  autoplaySpeed: 5000, // Adjust the speed for autoplay in milliseconds
};
const Hero = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      sliderRef.current && sliderRef.current.slickNext();
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden z-20 opacity-100">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start  z-10`}
      >
        <div className="lg:hidden sm:flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff] " />
          <div className="w-1 sm:h-80 h-40 ml-2 violet-gradient" />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center text-center lg:ml-72 mt-12">
          <p className="text-3xl lg:text-6xl font-sans font-bold">
            Literary Sub-Council
          </p>
        </div>
      </div>
      {/* <div className="flex justify-center items-center h-screen z-50 mt-96"> */}
      <Slider {...settings} className="mt-96 mb-52" ref={sliderRef}>
        {dummyImages.map((image, index) => (
          <CarouselCard key={index} image={image} />
        ))}
      </Slider>
      <div className="fixed bottom-0 right-0 mb-4 mr-4 z-20 hidden sm:block">
        <img
          src="./lit_logo.jpg"
          className="w-24 h-24 rounded-full border-2 border-x-purple-600 hover:border-y-purple-600 cursor-pointer"
          alt="Lit logo"
        />
      </div>
    </section>
  );
};

export default Hero;
