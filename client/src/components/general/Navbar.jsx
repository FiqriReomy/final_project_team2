import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo1 from "../../image-source/IconLogo/logo.png";
import avatar from "../../image-source/IconLogo/avatar.png";
import { FaBars, FaTimes, FaTrashAlt } from "react-icons/fa";
import { IoMdArrowForward, IoMdClose, IoMdAdd, IoMdRemove } from "react-icons/io";
import food10 from "../../image-source/images/food10.png";
import food9 from "../../image-source/images/food9.png";

const Navbar = () => {
  const [bg, setBg] = useState(false);
  const [menu, setMenu] = useState(false);
  const [buka, setBuka] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });
  return (
    <section className={`${bg ? "bg-white h-20 shadow-md" : "bg-none text-white shadow-none h-24 "} py-5 fixed top-0 w-full  transision-all duration-500 z-50`}>
      <div className="header mx-auto max-w-screen-xl px-5">
        <div className="content_area flex justify-between items-center ">
          <div className="logo">
            <div>
              <img src={logo1} className="w-40 pr-10" alt="" />
            </div>
          </div>

          <div className="menuarea gap-5 hidden md:flex justify-between items-center">
            <div className="menulist text-[14px]">
              <a className="py-2 px-5 font-semibold text-xl  hover:underline" href="#menu">
                Our Menu
              </a>
              <a className="py-2 px-5 font-semibold text-xl  hover:underline" href="#special">
                Special Package
              </a>
              <a className="py-2 px-5 font-semibold text-xl  hover:underline" href="#about">
                About
              </a>
            </div>
            <div className="leftborder flex gap-2 px-4 relative">
              <button onClick={() => setMenu(!menu)} className={`md:hidden cursor-pointer px-2 text-2xl`}>
                {menu ? <FaTimes /> : <FaBars />}
              </button>
              <Link to="/login">
                <button className="rounded-md text-xl font-semibold border-2 border-[#F2BD57] bg-[#F2BD57] hover:bg-white py-2 px-5 hover:text-black">LOGIN</button>
              </Link>
              <Link to="/register">
                <button className="rounded-md text-xl font-semibold border-2 border-[#F2BD57] bg-[#F2BD57] hover:bg-white py-2 px-5 hover:text-black">DAFTAR</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Navbar;
