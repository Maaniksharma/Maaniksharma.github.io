export default function Categories() {
  return (
    <div
      className="hidden md:flex lg:flex justify-between items-center bg-slate-800 lg:px-16 py-2 md:px-4"
      style={{ fontSize: "14px", lineHeight: "20px" }}
    >
      <div className=" text-gray-300  gap-4 flex items-center">
        <div className="cursor-pointer hover:text-white">Movies</div>
        <div className="cursor-pointer hover:text-white">Stream</div>
        <div className="cursor-pointer hover:text-white">Events</div>
        <div className="cursor-pointer hover:text-white">Plays</div>
        <div className="cursor-pointer hover:text-white">Sports</div>
        <div className="cursor-pointer hover:text-white">Activities</div>
        <div className="cursor-pointer hover:text-white">Buzz</div>
      </div>
      <div
        className="hidden lg:flex text-white items-center gap-5"
        style={{ fontSize: "12px", lineHeight: "20px" }}
      >
        <div className="cursor-pointer">ListYourShow</div>
        <div className="cursor-pointer">Corporates</div>
        <div className="cursor-pointer">Offers</div>
        <div className="cursor-pointer">Gift Cards</div>
      </div>
    </div>
  );
}
