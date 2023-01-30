import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const NavbarClient = ({ name, email }) => {
  const [Menu, setMenu] = useState(false);
  const [Shopcart, setCart] = useState(false);
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
    if (Shopcart === true) {
      setCart(false);
      setMenu(!Menu);
    } else {
      setMenu(!Menu);
    }
  };

  const OpenCart = () => {
    if (Menu === true) {
      setCart(!Shopcart);
      setMenu(false);
    } else {
      setCart(!Shopcart);
    }
  };

  return (
    <section className="py-2 font-['Poppins'] bg-green-500">
      <div className="header mx-auto max-w-screen-xl px-5">
        <div className="content_area flex justify-between items-center ">
          <div className="logo">
            <h2 className="text-[20px] font-bold ">WEBSITE LOGO</h2>
          </div>
          <div className="search ">
            <input className="outline-none py-1 px-4 " type="text" placeholder="search here ..." />
          </div>
          <div className="menuarea gap-5 hidden md:flex justify-between items-center">
            <div className="menulist text-[14px]">
              <Link to="/" href="#menu">
                <a className="py-2 px-5 text-black hover:text-white" href="#menu">
                  Our Menu
                </a>
              </Link>
              <Link to="/" href="#special">
                <a className="py-2 px-5 text-black hover:text-white" href="#special">
                  Special Package
                </a>
              </Link>
              <Link to="/">
                <a className="py-2 px-5 text-black hover:text-white" href="#about">
                  About
                </a>
              </Link>
            </div>
            <div className="flex gap-2 px-5 relative">
              <button className="relative flex justify-center items-center" onClick={() => OpenCart()}>
                <img className="w-[20px]" src="images/shop_cart.png" alt="" />
              </button>

              <button className="p-2 flex gap-2 rounded-full hover:bg-slate-200" onClick={() => OpenMenu()}>
                <img className="w-[20px]" src="images/setting.png" alt="" />
                <h2 className="text-[14px] text-black">{email}</h2>
              </button>

              {/* Shopingcart start point */}
              {Shopcart && (
                <div className="max-w-[500px]  py-2 absolute dropdown bg-white shadow-lg top-[45px] right-[45px] rounded-xl">
                  <div className="container w-[300px] px-5">
                    <div className="title flex justify-between items-center  py-2">
                      <h2 className="font-bold">Shopping Cart</h2>
                      <button className="py-2 px-4 rounded-full bg-green-500 font-[15px] active:scale-90">Checkout</button>
                    </div>
                    <div className="flex justify-between items-center border-t-2 py-2 text-[12px]">
                      <figure className="w-[50px] overflow-hidden">
                        <img className="object-cover" src="images/food5.png" alt="foodimage" />
                      </figure>
                      <div className="text-left">
                        <div className="nama font-semibold">BURGER COMBO</div>
                        <div className="jumlah">3 porsi</div>
                      </div>
                      <div className="price">Rp. 25.000</div>
                    </div>
                    <div className="flex justify-between items-center border-t-2 py-2 text-[12px]">
                      <figure className="w-[50px] overflow-hidden">
                        <img className="object-cover" src="images/food5.png" alt="foodimage" />
                      </figure>
                      <div className="text-left">
                        <div className="nama font-semibold">BURGER COMBO</div>
                        <div className="jumlah">3 porsi</div>
                      </div>
                      <div className="price">Rp. 25.000</div>
                    </div>
                    <div className="flex justify-between items-center border-t-2 py-2 text-[12px]">
                      <figure className="w-[50px] overflow-hidden">
                        <img className="object-cover" src="images/food5.png" alt="imagesfood" />
                      </figure>
                      <div className="text-left">
                        <div className="nama font-semibold">BURGER COMBO</div>
                        <div className="jumlah">3 porsi</div>
                      </div>
                      <div className="price">Rp. 25.000</div>
                    </div>
                  </div>
                </div>
              )}
              {/* Shopcart end point */}

              {/* menutoggle start point*/}
              {Menu && (
                <div className="menulist top-[50px] absolute w-full  p-3 flex flex-col gap-2 bg-green-500 rounded-md z-10">
                  <div className="w-full hover:bg-white text-center p-2 rounded ">
                    <Link to="/dashboard">
                      <a className="text-black" href="#">
                        Dashboard
                      </a>
                    </Link>
                  </div>
                  <div className="w-full hover:bg-white text-center p-2 rounded ">
                    <Link to="/dashboard/purchase">
                      <a className="text-black" href="#">
                        Purchase
                      </a>
                    </Link>
                  </div>
                  <div className="w-full hover:bg-white text-center p-2 rounded">
                    <button className="text-black" onClick={Logout}>
                      Log out
                    </button>
                  </div>
                </div>
              )}
              {/* Menutoggle end point */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavbarClient;
