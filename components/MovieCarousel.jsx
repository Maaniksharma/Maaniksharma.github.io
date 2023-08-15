import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import { PrevArrow, NextArrow } from "../Arrows";

export default function MovieCarousel(props) {
  const { Title, carouselData, subtitle, api, single } = props;
  const carouselDataClass = "flex-col items-start";
  const subTitlClass = props.subtitle ? "text-white text-sm px-4 " : "hidden";
  const font = props.dark
    ? ["text-white", "text-white", "bg-slate-700", "text-white"]
    : ["text-slate-800", "text-gray-600", "bg-white", "text-black"];
  var settings2 = {
    dots: false,
    speed: 600,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    centerMode: false,
    infinite: false,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  };

  return (
    <div className={` lg:px-10 pt-6 pb-8 ${font[2]}`}>
      <div className="flex justify-between">
        <div className="">
          <div
            className={`text-base md:text-2xl   px-4 font-bold items-center ${font[0]}`}
          >
            {Title}
          </div>
          <div className={`${subTitlClass}`}>{subtitle}</div>
        </div>
        <div className="text-red-600 flex items-center pr-4 text-sm">
          See All <BiChevronRight />
        </div>
      </div>

      <Slider {...settings2} className=" py-2">
        {carouselData.map((data) => {
          const { id } = data;
          return (
            <Link to={`/Movies/${id}`} className="w-full h-full">
              <div className="w-full px-4 ">
                <img
                  src={
                    api
                      ? `http://image.tmdb.org/t/p/original${data.poster_path}`
                      : data.image
                  }
                  className="w-full h-full rounded-lg"
                  alt={data.original_title}
                />
                <div className="flex-col items-start">
                  <div
                    className={`font-semibold  pb-0.5 pt-2 truncates ${font[3]}`}
                    style={{ fontWeight: 500 }}
                  >
                    {data.original_title}
                  </div>
                  <div
                    className={`text-base  break-words  truncates ${font[1]}`}
                  >
                    {single ? "" : api ? "English" : data.desc}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </Slider>
    </div>
  );
}
