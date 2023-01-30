import React from "react";
import Dashboard from "../components/Dashboard";

const Setting = () => {
  return (
    <Dashboard>
      <section className="   px-5 ">
        <div className="profil border px-5">
          <h2 className="py-2 mb-2">INFORMASI AKUN</h2>
          <div className="flex justify-between">
            <div className="w-[25%]">
              <div className="h-[200px] border rounded mb-2 p-2">
                <img src="" alt="profil_picture" />
              </div>
              <div className="py-2 px-5 bg-green-500 rounded text-center">Ubah Foto</div>
            </div>
            <div className="w-[75%] py-2 px-5">
              <div className="form ">
                <div className="field mb-2">
                  <label htmlFor="nama">Nama</label>
                  <div className="input flex gap-2">
                    <input className="outline-none border px-2" type="text" placeholder />
                    <button className="py-1 px-4 rounded bg-green-500">Ubah</button>
                  </div>
                </div>
                <div className="field mb-2">
                  <label htmlFor="email">Email</label>
                  <div className="input flex gap-2">
                    <input className="outline-none border px-2" type="text" placeholder />
                    <button className="py-1 px-4 rounded bg-green-500">Ubah</button>
                  </div>
                </div>
                <div className="field mb-2">
                  <label htmlFor="password">Password</label>
                  <div className="input flex gap-2">
                    <input className="outline-none border px-2" type="text" placeholder />
                    <button className="py-1 px-4 rounded bg-green-500">Ubah</button>
                  </div>
                </div>
                <div className="field mb-2">
                  <label htmlFor="Alamat">Alamat</label>
                  <div className="input ">
                    <textarea className="outline-none py-2 border px-2 w-full min-h-[100px] max-h-[100px]" type="text" placeholder />
                    <button className="py-1 px-4 rounded bg-green-500">Ubah</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Dashboard>
  );
};

export default Setting;
