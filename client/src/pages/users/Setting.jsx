import React from "react";

const Setting = () => {
  return (
    <section className="h-full px-5 ">
      <div className="profil h-full border px-5">
        <h2 className="py-2 mb-2 font-bold">INFORMASI AKUN</h2>
        <div className="flex justify-between">
          <div className="w-[25%]">
            <div className="h-[200px] border rounded mb-2 p-2">
              <img src="" alt="profil_picture" />
            </div>
            <div className="py-2 px-5 bg-green-500 rounded text-center">Ubah Foto</div>
          </div>
          <div className="w-[75%] py-2 px-5">
            <div className="flex field gap-4 mb-4">
              <div className="nama w-[100px]">Nama</div>
              <div className="data gap-2">Ahmad Fiqri Oemry</div>
              <button className="py-1 px-4 rounded bg-green-500">Ubah</button>
            </div>
            <div className="flex field gap-4 mb-4">
              <div className="nama w-[100px]">Email</div>
              <div className="data gap-2">Ahmad@gmail.com</div>
              <button className="py-1 px-4 rounded bg-green-500">Ubah</button>
            </div>
            <div className="flex field gap-4 mb-4">
              <div className="nama w-[100px]">Alamat</div>
              <div className="display w-full ">
                <div className="data gap-2 h-[100px] p-2 border mb-2">Ahmad@gmail.com</div>
                <button className="py-1 px-4 rounded bg-green-500">Ubah</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Setting;
