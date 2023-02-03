import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo1 from "../../image-source/IconLogo/logo.png";
import avatar from "../../image-source/IconLogo/avatar.png";
import { FaBars, FaShoppingCart, FaTimes, FaTrashAlt } from "react-icons/fa";
import { IoMdArrowForward, IoMdClose, IoMdAdd, IoMdRemove } from "react-icons/io";
import food10 from "../../image-source/images/food10.png";
import food9 from "../../image-source/images/food9.png";
import axios from "axios";

const Navbar_users = ({ email }) => {
  const [bg, setBg] = useState(false);
  const [menu, setMenu] = useState(false);
  const [menubar, setMenubar] = useState(false);
  const [SidebarOpen, setOpen] = useState(false);
  const navigate = useNavigate();

  const Logout = async () => {
    try {
      await axios.delete("http://localhost:5000/logout");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  const OpenMenu = () => {
    setMenubar(!menubar);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });
  return (
    <>
      {/* sidebar */}
      <div className={`${SidebarOpen ? "right-0" : "-right-full"}  w-full bg-white fixed top-0 bottom-0 shadow-2xl md:w-[40vw] xl:max-w-[30vw] transision-all duration-300 z-50  px-4 lg:px-[35px]`}>
        <div className="flex items-center justify-between py-6">
          <div className="uppercase text sm font-semibold">Your Order</div>
          <div
            onClick={() => {
              setOpen(!SidebarOpen);
            }}
            className="cursor-pointer w-8 h-8 flex justify-center items-center"
          >
            <IoMdArrowForward className="text-3xl" />
          </div>
        </div>
        <div className="flex items-center mt-10 px-5 py-2 absolute -left-8 w-full bg-secondary rounded-lg">
          <div className="font-bold text-3xl">Summary </div>
        </div>
        <div className="mt-36 flex flex-col gap-y-2 h-[500px] lg:[640px] overflow-y-auto border-b">
          <div className="flex items-center gap-2">
            <img src={food10} className="w-24" alt="" />
            <div className="flex-1 flex-col">
              <div className="flex justify-between mb-2">
                <p className="font-semibold uppercase text-sm">Mie Ayam</p>
                <IoMdClose className="" />
              </div>
              <div className=" flex justify-between gap-x-2 h-[36px]">
                <div className="flex  max-w-[90px] items-center h-full border-b  font-medium">
                  <div className="h-full flex justify-center items-center cursor-pointer">
                    <IoMdRemove className="text-black" />
                  </div>
                  <div className="h-full flex justify-center items-center px-2 text-black">2</div>
                  <div className="h-full flex justify-center items-center cursor-pointer">
                    <IoMdAdd className="text-black" />
                  </div>
                </div>
                <div className="flex items-center justify-center">Rp.20.000</div>
                <div className="flex items-center font-bold justify-end">Rp.40.000</div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img src={food9} className="w-24" alt="" />
            <div className="flex-1 flex-col ">
              <div className="flex justify-between mb-2">
                <p className="font-semibold uppercase text-sm">Kentang Goreng</p>
                <IoMdClose className="" />
              </div>
              <div className=" flex justify-between gap-x-2 h-[36px]">
                <div className="flex  max-w-[90px] items-center h-full border-b  font-medium">
                  <div className="h-full flex justify-center items-center cursor-pointer">
                    <IoMdRemove className="text-black" />
                  </div>
                  <div className="h-full flex justify-center items-center px-2 text-black">2</div>
                  <div className="h-full flex justify-center items-center cursor-pointer">
                    <IoMdAdd className="text-black" />
                  </div>
                </div>
                <div className="flex items-center justify-center">Rp.10.000</div>
                <div className="flex items-center font-bold justify-end">Rp.20.000</div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex-col flex gap-y-2 py-4 mt-4 mb-4">
          <div className=" flex w-full justify-between items-center">
            <div className="uppercase font-semibold">
              <span className="mr-2">Total :</span>Rp. 60.000
            </div>
            <div className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl">
              <FaTrashAlt />
            </div>
          </div>
          <div className="bg-gray-200 flex p-4 justify-center items-center w-full font-medium">View Cart</div>
          <div className="bg-secondary flex p-4 justify-center items-center text-black w-full font-medium">Checkout</div>
        </div>
      </div>

      {/* navbar */}
      <div className={`${bg ? "bg-white h-20 shadow-md" : "bg-none text-white shadow-none h-24 "}  items-center fixed top-0 right-0 left-0 transision-all duration-500 z-30 py-5 px-10  `}>
        <div className="mx-auto max-w-screen-xl px-5 flex justify-between">
          <div className="menulogo ">
            <img src={logo1} className="w-40" alt="" />
          </div>
          <div className="menubars flex items-center justify-between gap-2 ">
            <div className="menulist hidden md:flex">
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
            {/* responsive navigation menulist */}

            <div className="menutoggle flex gap-2">
              <button className="hidden md:block" onClick={() => setOpen(!SidebarOpen)}>
                <FaShoppingCart className="cursor-pointer" />
              </button>
              <button onClick={() => setMenu(!menu)} className={`md:hidden cursor-pointer px-2 text-2xl`}>
                {menu ? <FaTimes /> : <FaBars />}
              </button>
              <button onClick={() => OpenMenu()} className="user">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={avatar} />
                    <div className="email">{email}</div>
                  </div>
                </label>
              </button>
              {menubar && (
                <div className="menulist top-[70px] absolute w-[125px]  p-3 flex flex-col gap-2 bg-white rounded-md z-10">
                  <div className="w-full hover:bg-neutral-200 text-center p-2 rounded ">
                    <Link to="/dashboard">
                      <a className="text-black" href="#">
                        Dashboard
                      </a>
                    </Link>
                  </div>
                  <div className="w-full hover:bg-neutral-200 text-center p-2 rounded ">
                    <Link to="/dashboard/purchase">
                      <a className="text-black" href="#">
                        Purchase
                      </a>
                    </Link>
                  </div>
                  <div className="w-full hover:bg-neutral-200 text-center p-2 rounded">
                    <button className="text-black" onClick={Logout}>
                      Log out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className={`${menu ? "block" : "hidden"} ${bg ? "bg-white" : "bg-none text-white"} absolute top-15 left-0 right-0`}>
          <div className="wrapper flex flex-col gap-2 justify-center items-center">
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
        </div>
      </div>
    </>
  );
};

export default Navbar_users;
