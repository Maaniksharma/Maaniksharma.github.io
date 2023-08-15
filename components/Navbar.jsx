import { BiChevronRight, BiSearch, BiMenu } from "react-icons/bi";
import { AiFillCaretDown } from "react-icons/ai";
import { Link } from "react-router-dom";

import Categories from "./Categories";
const NavSm = () => {
  return (
    <div>
      <div>
        <div className="md:hidden lg:hidden flex items-center justify-between  text-white p-2 px-4">
          <div>
            <h3 className="text-2xl font-bold">It All Starts Here!</h3>
            <span className=" flex items-center text-xs text-gray-400 ">
              Mumbai
              <BiChevronRight />
            </span>
          </div>
          <div className="flex items-center gap-x-2.5">
            <button
              className="rounded-lg bg-red-500 text-xs font-semibold"
              style={{ padding: "7px 10px 9px 10px" }}
            >
              Use App
            </button>
            <div className="w-7 h-7">
              <BiSearch className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const NavMd = () => {
  return (
    <div className="hidden lg:hidden md:flex w-full">
      <div className="pt-4 px-3.5 w-full">
        <div className="bg-white flex items-center  rounded-sm gap-2 px-2.5 py-1.5">
          <BiSearch className="fill-gray-600" />
          <input
            type="search"
            placeholder="Search for Movies, Events, Plays, Sports and Activities"
            className="focus:outline-none w-full"
          />
        </div>
      </div>
    </div>
  );
};
const NavLg = () => {
  return (
    <div className=" w-full h-full px-16 py-1.5 flex items-center justify-between">
      <div className="flex items-center gap-5">
        <div
          className="w-24 h-20 cursor-pointer"
          style={{ width: "115px", height: "50px" }}
        >
          <Link to="/">
            <img className="w-full h-full" src="../logo.svg" alt="logo" />
          </Link>
        </div>
        <div
          className="bg-white flex items-center  rounded gap-2 px-2.5 py-1.5"
          style={{ width: "560px" }}
        >
          <BiSearch className="fill-gray-600" />
          <input
            type="search"
            placeholder="Search for Movies, Events, Plays, Sports and Activities"
            className="focus:outline-none w-full"
          />
        </div>
      </div>
      <div className="flex items-center gap-6 ">
        <div className="flex items-center gap-2">
          <div className="text-gray-300 text-sm hover:text-white cursor-pointer">
            Mumbai
          </div>
          <AiFillCaretDown className="fill-white" />
        </div>
        <button
          className="bg-red-500 rounded  cursor-pointer text-white text-xs font-medium"
          style={{ padding: "4px 17px 6px 17px" }}
        >
          Sign in
        </button>
        <BiMenu className=" cursor-pointer fill-white w-10 h-7 " />
      </div>
    </div>
  );
};
const NavBar = () => {
  return (
    <div className="bg-gradient-to-r from-slate-800 to-slate-700 font-sans">
      <div className="md:hidden lg:hidden">
        <NavSm />
      </div>
      <div className="hidden md:flex">
        <NavMd />
      </div>
      <div className="hidden lg:flex">
        <NavLg />
      </div>
      <Categories />
    </div>
  );
};
export default NavBar;
