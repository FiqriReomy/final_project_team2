import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

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
      <header className="heading py-4 text-center text-[30px] font-semibold bg-green-500">
        <h1>WEBSITE LOGO</h1>
      </header>
      <section className="main py-[33px] bg-[#F5EFE4]">
        <div className="padding mx-auto px-5 md:max-w-screen-xl lg:max-w-screen-2xl ">
          <main className="flex flex-wrap ">
            <div className="left lg:w-1/2 relative">
              <div className="image p-5 rounded-xl flex justify-center items-center">
                <div className="image overflow-hidden w-full ">
                  <img className=" w-full object-contain" src="images/wallpaper.jpeg" alt="" />
                </div>
                <div className="text-[35px] text-white absolute font-['Holiday']"> We Serve Food With Love and Healty</div>
              </div>
            </div>
            <div className="left md:w-full lg:w-1/2">
              <div className="content p-5 ">
                <div className="loginbox w-[400px] shadow-xl rounded p-5 bg-white">
                  <div className="title text-center">
                    <h2 className="font-bold">Login</h2>
                    <p>{Message}</p>
                  </div>
                  <form className="px-4 mt-5" onSubmit={Auth}>
                    <div className="field flex flex-col ">
                      <label className="text-[15px]">Email</label>
                      <input className="rounded border py-2 px-5 outline-none" type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="field flex flex-col ">
                      <label className="text-[15px]">Password</label>
                      <input className="rounded border py-2 px-5 outline-none" type="text" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div className="py-3">
                      <button className="font-bold rounded w-full py-3 bg-green-500 active:scale-95">LOGIN </button>
                    </div>
                    <div className="lupa">
                      <button>Lupa password ?</button>
                    </div>
                  </form>
                  <div className="div mb-5 relative h-[30px] flex justify-center">
                    <p className="absolute z-10">Atau</p>
                  </div>
                  <div className="div flex justify-center gap-2 mb-5">
                    <button className="py-2 px-5 rounded border hover:bg-green-500">Facebook</button>
                    <button className="py-2 px-5 rounded border  hover:bg-green-500">Google</button>
                    <button className="py-2 px-5 rounded border  hover:bg-green-500">Apple ID</button>
                  </div>
                  <div className="text-[14px] text-center">
                    Belum punya akun FoodMe ?
                    <Link to="/register">
                      <a className="font-bold" href="#">
                        register
                      </a>
                    </Link>{" "}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
      <footer className="py-5 bg-green-500">
        <div className="padding font-semibold flex justify-center items-center ">
          <h2>© Copyright Project Team 2 2023</h2>
        </div>
      </footer>
    </section>
  );
};

export default Login;
