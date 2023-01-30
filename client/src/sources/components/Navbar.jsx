import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="fixed right-0 left-0 top-0 py- font-['Poppins'] bg-green-500">
      <div className="header mx-auto max-w-screen-xl px-5">
        <div className="content_area flex justify-between items-center ">
          <div className="logo">
            <h2 className="text-[20px] font-bold ">WEBSITE LOGO</h2>
          </div>

          <div className="menuarea gap-5 hidden md:flex justify-between items-center">
            <div className="menulist text-[14px]">
              <a className="py-2 px-5 text-black hover:text-white" href="#menu">
                Our Menu
              </a>
              <a className="py-2 px-5 text-black hover:text-white" href="#special">
                Special Package
              </a>
              <a className="py-2 px-5 text-black hover:text-white" href="#about">
                About
              </a>
            </div>
            <div className="leftborder flex gap-2 px-4 relative">
              <Link to="/login">
                <button className="rounded-md bg-slate-100 py-2 px-5">LOGIN</button>
              </Link>
              <Link to="/register">
                <button className="rounded-md bg-slate-100 py-2 px-5">DAFTAR</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
