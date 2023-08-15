import { useParams } from "react-router-dom";
import { AiFillCaretRight, AiOutlineRight } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { BsShare } from "react-icons/bs";
import { MovieDet } from "../MovieDet";

export default function MoviePage() {
  const { id } = useParams();
  const temp = MovieDet.filter((m) => m.id == id);
  const Movie = temp[0];
  const razorpay = () => {
    let options = {
      key: "rzp_test_Ep0YxhE5AIs9r2",
      amount: 10000,
      currency: "INR",
      name: "new Payment",
      description: "testing",
      theme: {
        color: "#c4271d",
      },
      receipt: "qwsaq1",
      partial_payment: true,
      first_payment_min_amount: 230,
    };
    let rzp = new window.Razorpay(options);
    rzp.open();
  };
  return (
    <>
      <div className="">
        <div
          className="w-full"
          style={{
            backgroundImage: `url(${Movie.bgImage})`,
            height: "480px",
          }}
        >
          <div className=" w-full h-full bg-gradient-to-r from-zinc-900 from-35% via-transparent to-black to-98% px-16">
            <div className="flex gap-8  py-8 justify-between">
              <div className="flex gap-8">
                <div className="flex-col">
                  <div class="relative">
                    <img
                      class="w-full h-96 rounded-t-md"
                      src={`${Movie.sideImage}`}
                      alt="dummy-image"
                    ></img>
                    <button class="rounded-2xl  px-2 py-1 flex gap-1 items-center absolute top-44 right-24 bg-gray-700 ">
                      <AiFillCaretRight className="fill-white" />
                      <div className="text-xs font-medium text-white">
                        Trailer
                      </div>
                    </button>
                  </div>
                  <div className="flex bg-black text-white justify-center items-center font-medium rounded-b-md h-8 text-xs">
                    In cinemas
                  </div>
                </div>
                <div className=" flex-col justify-between py-8 items-baseline">
                  <div className="text-4xl font-bold text-white break-words truncates">
                    {Movie.name}
                  </div>
                  <div className="flex-col py-6  ">
                    <div className="flex  items-center ">
                      <FaStar className="fill-rose-400 h-8 w-8" />
                      <div className="px-1 text-white flex items-baseline">
                        <div className="px-1 text-2xl font-bold">
                          {Movie.rating}/10
                        </div>
                        <div className=" px-1 text-base">
                          {Movie.votes}K Votes
                        </div>
                        <AiOutlineRight className="items-baseline pt-1.5 pr-2" />
                      </div>
                    </div>
                    <div className="mt-5">
                      <div className="bg-zinc-700  flex  items-center  gap-24 rounded-lg px-6 py-2.5 ">
                        <div className="">
                          <div className="">
                            <div className="text-white text-lg">
                              Add Your rating & review
                            </div>
                            <div className="text-gray-300 text-base">
                              Your ratings matter
                            </div>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg text-slate-700 px-3.5 py-1.5 text-lg font-medium ">
                          Rate now
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 flex items-center gap-2">
                      {Movie.tags.map((tag) => {
                        return (
                          <div className="bg-gray-200 rounded-sm px-2 py-0.5">
                            {tag}
                          </div>
                        );
                      })}
                    </div>
                    <div className="mt-4 text-white">
                      {Movie.time}• {Movie.category} • {Movie.lang} •
                      {Movie.releaseDate}
                    </div>
                  </div>
                  <button
                    onClick={razorpay}
                    className="bg-rose-500 rounded-lg px-14 py-3.5 text-white w-52 font-medium mt-1.5  "
                  >
                    Book Tickets
                  </button>
                </div>
              </div>
              <div className="rounded-md   py-2 flex gap-4 items-center  bg-gray-700 h-12 w-32 px-3.5">
                <BsShare className="fill-white w-16 h-8" />
                <div className="text-white font-semibold">Share</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-16">
        <div className="text-2xl mt-6 mb-4 font-semibold text-zinc-900">
          About The movie
        </div>
        <div className="text-zinc-700 ">{Movie.about}</div>
        <hr className="mt-5" />
        <div className="text-2xl mt-6 mb-4 font-semibold text-zinc-900">
          Cast
        </div>
        <div className="mt-4 flex gap-6">
          {Movie.cast.map((m) => {
            return (
              <div className="flex-col gap-2 justify-items-center items-center">
                <img src={`${m.image}`} alt="" className="rounded-full w-32" />
                <div className=" mt-2 text-base text-center">{m.name}</div>
                <div className="text-gray-600 text-sm text-center">
                  {m.designation}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
