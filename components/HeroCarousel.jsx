import { PrevArrow, NextArrow } from "../Arrows";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function HeroCarousel(props) {
  // const [HeroMovies, setHeroMovies] = useState([]);
  // useEffect(() => {
  //   const requestHeroMovies = async () => {
  //     const response = await axios.get("/now_playing");
  //     console.log(response);
  //     console.log(HeroMovies);
  //     setHeroMovies(response.data.results);
  //   };
  //   requestHeroMovies();
  // }, []);
  const { Image } = props;
  var settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    // responsive: [
    //   {
    //     breakpoint: 782,
    //     settings: {
    //       centerMode: false,
    //     },
    //   },
    // ],
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
  };
  return (
    <>
      <div className="">
        <Slider {...settings}>
          {Image.map((image) => {
            return (
              <div className="px-1 py-2 h-96">
                <img
                  src={image}
                  className="w-full h-full rounded"
                  alt="carousel image"
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}
