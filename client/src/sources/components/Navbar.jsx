import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import logo1 from '../image-source/IconLogo/logo.png'
import avatar from '../image-source/IconLogo/avatar.png'
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {
  const [bg, setBg] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect (() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg (false);
    })
  })
  return (
    <>
    <div className={`${bg ? 'bg-white h-20 shadow-md' :'bg-none text-white shadow-none h-24 '} flex items-center fixed top-0 w-full transision-all duration-500 px-10 navbar z-50`}>
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
