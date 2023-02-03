import React from "react";
import logo1 from "../../image-source/IconLogo/logo.png";
import avatar from "../../image-source/IconLogo/avatar.png";
import { FaBars, FaShoppingCart, FaTimes, FaTrashAlt } from "react-icons/fa";
import { IoMdArrowForward, IoMdClose, IoMdAdd, IoMdRemove } from "react-icons/io";
import food10 from "../../image-source/images/food10.png";
import food9 from "../../image-source/images/food9.png";

const Purchase = () => {
  return (
    <section className="h-full flex justify-center items-center bg-green-400 ">
      <div className="hero bg-hero bg-cover bg-center h-full ">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className=" text-center text-neutral-content bg-white w-[80%]">
          <div className="h-full text-black">
            <div className=" px-5 py-5 flex flex-col gap-y-2 h-[300px] overflow-y-auto border-b">
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
            <div className=" px-7 flex-col flex gap-y-2 py-4 mt-4">
          <div className=" flex w-full justify-between items-center">
            <div className="uppercase font-semibold">
              <span className="mr-2">Total :</span>Rp. 60.000
            </div>
            <div className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl">
              <FaTrashAlt />
            </div>
          </div>
          <input className="bg-gray-200 flex p-4 justify-center items-center w-full font-medium" placeholder="Masukkan Alamat"></input>
          <div className="bg-secondary flex p-4 justify-center items-center text-black w-full font-medium">Bayar</div>
        </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Purchase;
