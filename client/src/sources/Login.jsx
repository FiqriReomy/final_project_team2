import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import logo1 from './image-source/IconLogo/logo.png'
import {FcGoogle} from 'react-icons/fc'
import {FaFacebookSquare} from 'react-icons/fa'
import { AiOutlineArrowLeft } from "react-icons/ai";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Message, setMessage] = useState("");
  const navigate = useNavigate();

  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/login", {
        email: email,
        password: password,
      });
      navigate("/");
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.msg);
      }
    }
  };

  return (
    <section>
         <Link className="absolute z-50 top-4 bg-bgprimary left-6 flex flex-row items-center rounded-lg px-2 gap-2 " to="/">
            <AiOutlineArrowLeft className="bg-[#F2BD57] rounded-full text-xl" />
            <p className=" font-semibold text-xl"> Kembali</p> 
          </Link>
      <div className="hero min-h-screen bg-login bg-center bg-cover ">
          <div className="hero-content bg-bgprimary rounded-lg">
            <div className="flex flex-col ">
            <div className="text-center flex justify-center md:items-center min-w-screen">
              <img src={logo1} alt="" />
            </div>
            <div className="left md:w-full lg:w-1/2">
              <div className="content p-5 ">
                <div className="loginbox w-[400px] shadow-xl rounded p-5 bg-white m-auto">
                  <div className="title text-center">
                    <h2 className="text-2xl font-bold">Login</h2>
                    <p>{Message}</p>
                  </div>
                  <form className="px-4 mt-5" onSubmit={Auth}>
                    <div className="field flex flex-col ">
                      <label className="text-md font-semibold">Email</label>
                      <input className="rounded border py-2 px-5 outline-none" type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="field py-2 flex flex-col ">
                      <label className="text-md font-semibold">Password</label>
                      <input className="rounded border py-2 px-5 outline-none" type="text" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div className="py-3">
                      <button className="font-bold rounded w-full py-3 bg-[#F2BD57] active:scale-95 roundend-lg">LOGIN </button>
                    </div>
                    <div className="lupa">
                      <button>Lupa password ?</button>
                    </div>
                  </form>
                  <div className="div mb-5 relative h-[30px] flex justify-center">
                    <p className="absolute font-bold z-10">Atau</p>
                  </div>
                  <div className="div flex justify-center gap-2 mb-5">
                    <button className="py-2 px-5 rounded border hover:bg-[#F2BD57] flex items-center gap-2">
                      <FaFacebookSquare className="text-2xl"/>
                      Facebook</button>
                    <button className="py-2 px-6 rounded border  hover:bg-[#F2BD57] flex items-center gap-2">
                      <FcGoogle className="text-2xl"/>
                      <p>Google</p></button>
                  </div>
                  <div className="text-[14px] text-center">
                    Belum punya akun? 
                    <Link to="/register">
                      <a className="font-bold pl-5" href="#">
                         Register
                      </a>
                    </Link>{" "}
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
          <div className="footer absolute bottom-0 left-0 items-end p-4 bg-[#F2BD57] text-neutral-content">
          <div className="items-center grid-flow-col">
      	      <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current text-black"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg> 
              <p className="text-black font-semibold">Copyright © 2023 - Projek Kelompok 2</p>
          </div> 
           </div>
        </div>
    </section>
  );
};

export default Login;
