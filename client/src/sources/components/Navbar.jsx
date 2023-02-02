import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import logo1 from '../image-source/IconLogo/logo.png'
import avatar from '../image-source/IconLogo/avatar.png'
import { FaBars, FaTimes, FaTrashAlt } from "react-icons/fa";
import { IoMdArrowForward,IoMdClose,IoMdAdd,IoMdRemove } from 'react-icons/io'
import food10 from '../image-source/images/food10.png'
import food9 from '../image-source/images/food9.png'


const Navbar = () => {
  const [bg, setBg] = useState(false);
  const [menu, setMenu] = useState(false);
  const [buka, setBuka] = useState(false)

  useEffect (() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg (false);
    })
  })
  return (
    <>
    {/* sidebar */}
       <div className={`${buka ? 'right-0' : '-right-full'}  w-full bg-white fixed top-0 h-full shadow-2xl md:w-[40vw] xl:max-w-[30vw] transision-all duration-300 z-50 px-4 lg:px-[35px]`}>
        <div className='flex items-center justify-between py-6'>
          <div className="uppercase text sm font-semibold">
          Your Order
          </div>
          <div onClick={() => {setBuka(!buka)}} className='cursor-pointer w-8 h-8 flex justify-center items-center' >
              <IoMdArrowForward className='text-3xl'/>
          </div>
        </div>
        <div className="flex items-center mt-10 px-5 py-2 absolute -left-8 w-full bg-secondary rounded-lg">
          <div className="font-bold text-3xl">
            Summary (2)
          </div>
        </div>
        <div className="mt-36 flex flex-col gap-y-2 h-[500px] lg:[640px] overflow-y-auto border-b">
            <div className="flex items-center gap-2">
                <img src={food10} className='w-24' alt="" />
            <div className="flex-1 flex-col">
              <div className="flex justify-between mb-2">
                <p className="font-semibold uppercase text-sm">Mie Ayam</p>
                <IoMdClose className=""/>
              </div>
              <div className=" flex justify-between gap-x-2 h-[36px]">
                <div className="flex  max-w-[90px] items-center h-full border-b  font-medium">
                  <div className="h-full flex justify-center items-center cursor-pointer">
                    <IoMdRemove className="text-black"/>
                  </div>
                  <div className="h-full flex justify-center items-center px-2 text-black">2</div>
                  <div className="h-full flex justify-center items-center cursor-pointer">
                    <IoMdAdd className="text-black"/>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                    Rp.20.000
                </div>
                <div className="flex items-center font-bold justify-end">
                    Rp.40.000
                </div>
              </div>
            </div>
            </div>
            <div className="flex items-center gap-2">
                 <img src={food9} className='w-24' alt="" />
              <div className="flex-1 flex-col ">
                <div className="flex justify-between mb-2">
                  <p className="font-semibold uppercase text-sm">Kentang Goreng</p>
                  <IoMdClose className=""/>
                </div>
                <div className=" flex justify-between gap-x-2 h-[36px]">
                  <div className="flex  max-w-[90px] items-center h-full border-b  font-medium">
                    <div className="h-full flex justify-center items-center cursor-pointer">
                      <IoMdRemove className="text-black"/>
                    </div>
                    <div className="h-full flex justify-center items-center px-2 text-black">2</div>
                    <div className="h-full flex justify-center items-center cursor-pointer">
                      <IoMdAdd className="text-black"/>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                      Rp.10.000
                  </div>
                  <div className="flex items-center font-bold justify-end">
                      Rp.20.000
                  </div>
                </div>
              </div>
            </div>
        </div>
            <div className=" flex-col flex gap-y-2 py-4 mt-4">
                <div className=" flex w-full justify-between items-center">
                  <div className="uppercase font-semibold">
                    <span className="mr-2">Total :</span>Rp. 60.000</div>
             <div className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl">
                    <FaTrashAlt/>
                </div>
              </div>
            <div className="bg-gray-200 flex p-4 justify-center items-center w-full font-medium">View Cart</div>
           <div className="bg-secondary flex p-4 justify-center items-center text-black w-full font-medium">Checkout</div>
        </div>
    </div>



    {/* navbar */}
    <div className={`${bg ? 'bg-white h-20 shadow-md' :'bg-none text-white shadow-none h-24 '} flex items-center fixed top-0 w-full transision-all duration-500 z-30 px-10 navbar `}>
        <div className="md:flex-1 flex-1 ">
          <img src={logo1} className="w-40" alt="" />
        </div>
        <div onClick={() => {
        setMenu(!menu)}} className={`md:hidden cursor-pointer px-2 text-2xl`} >
          {menu ?
          <FaTimes/> :
          <FaBars/>}
        </div>
        <div className={`menulist text-[14px] flex flex-col items-end  md:flex-row md:pb-0 pb-0 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pr-9  ${menu ? 'top-20 bg-white text-black' : 'top-[-400px]'} ${bg ? 'bg-white' :'bg-none text-white'}`}>
          <a className="py-2 px-5 font-semibold text-xl  hover:underline" href="#menu">
              Our Menu
          </a>
          <a className="py-2 px-5 font-semibold text-xl  hover:underline" href="#special">
            Special Package
          </a>
          <a className="py-2 px-5 font-semibold text-xl  hover:underline" href="#about">
            About
          </a>
          <div onClick={() => {setBuka(!buka)}}>
            coba
          </div>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={avatar} />
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link to="/register" className="justify-between text-black">
                  Daftar
                  <span className="badge">New</span>
                </Link>
              </li>
              <li className="text-black"><Link to="/login">Login</Link></li>
            </ul>
          </div>
        </div>
    </div>

</>
    // <section className={`${bg ? 'bg-white h-20 shadow-md' :'bg-none text-white shadow-none h-24 '} py-5 fixed top-0 w-full  transision-all duration-500 z-50`}>
    //   <div className="header mx-auto max-w-screen-xl px-5">
    //     <div className="content_area flex justify-between items-center ">
    //       <div className="logo">
    //         <div>
    //           <img src={logo1} className='w-40' alt="" />
    //         </div>
    //       </div>

    //       <div className="menuarea gap-5 hidden md:flex justify-between items-center">
    //         <div className="menulist text-[14px]">
    //           <a className="py-2 px-5 font-semibold text-xl  hover:underline" href="#menu">
    //             Our Menu
    //           </a>
    //           <a className="py-2 px-5 font-semibold text-xl  hover:underline" href="#special">
    //             Special Package
    //           </a>
    //           <a className="py-2 px-5 font-semibold text-xl  hover:underline" href="#about">
    //             About
    //           </a>
    //         </div>
    //         <div className="leftborder flex gap-2 px-4 relative">
    //           <Link to="/login">
    //             <button className="rounded-md text-xl hover:border hover:border-black hover:border-1 hover:scale-95 hover:bg-white font-semibold bg-[#F2BD57] py-2 px-5">LOGIN</button>
    //           </Link>
    //           <Link to="/register">
    //             <button className="rounded-md text-xl font-semibold bg-[#F2BD57] hover:bg-white py-2 px-5">DAFTAR</button>
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Navbar;
