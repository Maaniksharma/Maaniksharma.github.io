import { HEROIMAGE } from "./HEROIMAGE";
import HeroCarousel from "./components/HeroCarousel";
import { MOVIE, ENTERTAINMENT, PREMIERE, EVENTS } from "./MOVIE";
import MovieCarousel from "./components/MovieCarousel";
import { useState, useEffect } from "react";
import axios from "axios";

export default function MainPage() {
  const [Premiere, setPremiere] = useState([]);
  const [Upcoming, setUpcoming] = useState([]);
  useEffect(() => {
    const requestPremiere = async () => {
      const response = await axios.get("/movie/popular");
      setPremiere(response.data.results);
    };
    requestPremiere();
    const requestUpcoming = async () => {
      const response = await axios.get("/movie/upcoming");
      setUpcoming(response.data.results);
      console.log(response);
    };
    requestUpcoming();
  }, []);
  console.log(Premiere);
  console.log(Upcoming);
  return (
    <>
      <HeroCarousel Image={HEROIMAGE} />
      <div className="mt-6">
        <MovieCarousel
          Title={"Recommended Movies"}
          carouselData={MOVIE}
          dark={false}
          api={false}
        />
      </div>
      <div className="py-8 rounded  lg:px-14">
        <img
          src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/stream-leadin-web-collection-202210241242.png"
          alt=""
        />
      </div>
      <MovieCarousel
        Title="The Best of Live Events"
        carouselData={ENTERTAINMENT}
        dark={false}
        api={false}
        single={true}
      />
      <div className="bg-slate-700 mt-7  lg:px-14 pt-3 px-4 pb-2">
        <img className="" src="./premiere.png" alt="" />
      </div>
      <MovieCarousel
        Title="Premieres"
        carouselData={Premiere}
        dark={true}
        subtitle="Brand new releases every Friday"
        api={true}
      />
      <MovieCarousel
        Title="Upcoming Movies"
        carouselData={Upcoming}
        dark={false}
        api={true}
      />
      <MovieCarousel
        Title="Events Happening Near You "
        carouselData={EVENTS}
        dark={false}
        api={false}
      />
    </>
  );
}
