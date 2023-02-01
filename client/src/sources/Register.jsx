import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [Message, setMessage] = useState("");
  const navigate = useNavigate();

  const Register = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/register", {
        username: username,
        email: email,
        password: password,
        password2: password2,
      });
      navigate("/login");
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.msg);
      }
    }
  };

  return (
    <section>
      <header className="heading py-4 px-5 font-semibold bg-green-500">
        <div className="padding mx-auto px-5 md:max-w-screen-xl lg:max-w-screen-2xl ">
          <h1 className="text-center text-[30px]">WEBSITE LOGO</h1>
          <Link to="/">
            <p className=""> Kembali</p>
          </Link>
        </div>
      </header>
      <section className="main py-6 bg-[#F5EFE4]">
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
            <div className="left sm:w-full lg:w-1/2">
              <div className="content p-5 ">
                <div className="loginbox w-[400px] shadow-xl rounded p-5 bg-white">
                  <div className="title text-center ">
                    <h2 className="font-bold ">DAFTAR SEKARANG</h2>
                    <div className="text-[14px]">
                      Sudah punya akun?
                      <Link to="/Login">
                        <a className="font-bold" href="#">
                          masuk
                        </a>
                      </Link>
                    </div>
                    <p className="text-[14px] text-[red]">{Message}</p>
                  </div>
                  <form onSubmit={Register} className="px-4 mt-5">
                    <div className="field flex flex-col ">
                      <label className="text-[15px]">Username</label>
                      <input className="rounded border py-2 px-5 outline-none" type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="masukkan username kamu ..." required />
                    </div>
                    <div className="field flex flex-col ">
                      <label className="text-[15px]">Email</label>
                      <input className="rounded border py-2 px-5 outline-none" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="masukkan email kamu ..." required />
                    </div>
                    <div className="field flex flex-col ">
                      <label className="text-[15px]">Password</label>
                      <input className="rounded border py-2 px-5 outline-none" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="******" required />
                    </div>
                    <div className="field flex flex-col ">
                      <label className="text-[15px]">Konfirmasi Password</label>
                      <input className="rounded border py-2 px-5 outline-none" type="password" placeholder="******" value={password2} onChange={(e) => setPassword2(e.target.value)} required />
                    </div>
                    <div className="py-3">
                      <button className="font-bold rounded w-full py-3 bg-green-500 active:scale-95" type="submit">
                        Daftar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
      <footer className="py-5  bg-green-500">
        <div className="padding font-semibold flex justify-center items-center ">
          <h2>© Copyright Project Team 2 2023</h2>
        </div>
      </footer>
    </section>
  );
};

export default Register;

// const Login = () => {
//   return (
//     <section className="hero has-background-grey-light is-fullheight is-fullwidth">
//       <div className="hero-body">
//         <div className="container">
//           <div className="columns is-centered">
//             <div className="box">
//               <div className="field mt-5">
//                 <label className="label">username or email</label>
//                 <div className="controls">
//                   <input type="text" className="input" placeholder="username" />
//                 </div>
//               </div>
//               <div className="field mt-5">
//                 <label className="label">password</label>
//                 <div className="controls">
//                   <input type="password" className="input" placeholder="********" />
//                 </div>
//               </div>
//               <div className="field mt-5">
//                 <button className="button is-success is-fullwidth">Login</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Login;
