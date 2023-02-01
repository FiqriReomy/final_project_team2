import React from "react";
import food20 from '../image-source/images/food20.png'
import food4 from '../image-source/images/food4.png'
import food6 from '../image-source/images/food6.png'
import {AiOutlinePlus,AiOutlineMinus, AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'
import {BsCart3} from 'react-icons/bs'

import {motion} from 'framer-motion'
import {fadeIn} from '../../Efek'


const Special = () => {
  return (
    <section id="special" className=" py-5 px-5 font-['Poppins'] bg-[#F5EFE4]">
      <div className="mx-auto max-w-screen-xl flex h-[500px] bg-healty bg-cover bg-center border">
      <div className="overlay  content_area w-full h-full bg-white bg-opacity-50">
          <div className="flex-1">
            <div className="flex justify-between px-5 py-5">
                <div className="flex text-4xl font-bold">BUNDLE PACKAGE</div>
                <button className="border border-black px-4 rounded-3xl hover:bg-slate-800 hover:text-white hover:scale-90 ">Learn More</button>
            </div>
          </div>
          <div className="flex items-center gap-5 lg:gap-10 lg:px-20 px-10">
          <AiOutlineArrowLeft className='text-4xl bg-[#F2BD57] md:hidden rounded-full p-1 cursor-pointer'/>
            <motion.div
              variants={fadeIn('up',0.5)}
              initial="hidden"
              whileInView={'show'}
            className="bg-bgprimary rounded-xl shadow-lg mx-auto w-[20rem] pb-4 hidden md:flex flex-col">
              <div className="flex justify-between px-4 py-4">
                  <div className="bg-red-500 font-bold rounded-lg
                   px-2">
                    20% OFF
                  </div>
                  <div className="text-orange-500 font-bold">RP.75.000</div>
              </div>
              <div className="flex flex-row justify-center -space-x-10 hover:scale-105">
                    <div className="w-24 z-20">
                      <img src={food6} alt="" />
                    </div>
                    <div className="w-36 ">
                      <img src={food4} alt="" />
                    </div>
                    <div className="w-20 -pl-6 z-20">
                        <img src={food20} alt="" />
                    </div>
              </div>
              <div className="py-4 flex text-xl font-bold justify-center z-10">
                Advance Mode
              </div>
              <div className="flex-1 justify-betweenn px-3">
                  <div className="flex flex-row items-center justify-between gap-2">
                    <div className="flex px-2 py-1 bg-white items-center gap-2 rounded-xl">
                    <AiOutlinePlus className="text-md "/>
                    <p className="text-md">0</p>
                    <AiOutlineMinus className="text-md"/>
                    </div>
                    <div className="">
                    <dir className="flex gap-1">
                      <BsCart3 className="bg-green-500 h-7 w-7 px-1 py-1 rounded-l-lg"/>
                      <p className="text-sm py-1 px-1 rounded-r-lg bg-green-500">Add to Cart</p>
                    </dir>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn('up',0.5)}
              initial="hidden"
              whileInView={'show'} className="bg-bgprimary rounded-xl shadow-lg mx-auto w-[20rem] pb-4 flex flex-col">
              <div className="flex justify-between px-4 py-4">
                  <div className="bg-red-500 font-bold rounded-lg
                   px-2">
                    20% OFF
                  </div>
                  <div className="text-orange-500 font-bold">RP.75.000</div>
              </div>
              <div className="flex flex-row justify-center -space-x-10 hover:scale-105">
                    <div className="w-24 z-20">
                      <img src={food6} alt="" />
                    </div>
                    <div className="w-36 ">
                      <img src={food4} alt="" />
                    </div>
                    <div className="w-20 -pl-6 z-20">
                        <img src={food20} alt="" />
                    </div>
              </div>
              <div className="py-4 flex text-xl font-bold justify-center z-10">
                Advance Mode
              </div>
              <div className="flex-1 justify-betweenn px-3">
                  <div className="flex flex-row items-center justify-between gap-2">
                    <div className="flex px-2 py-1 bg-white items-center gap-2 rounded-xl">
                    <AiOutlinePlus className="text-md "/>
                    <p className="text-md">0</p>
                    <AiOutlineMinus className="text-md"/>
                    </div>
                    <div className="">
                    <dir className="flex gap-1">
                      <BsCart3 className="bg-green-500 h-7 w-7 px-1 py-1 rounded-l-lg"/>
                      <p className="text-sm py-1 px-1 rounded-r-lg bg-green-500">Add to Cart</p>
                    </dir>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn('up',0.5)}
              initial="hidden"
              whileInView={'show'} className="bg-bgprimary rounded-xl shadow-lg mx-auto w-[20rem] pb-4 hidden md:flex flex-col">
              <div className="flex justify-between px-4 py-4">
                  <div className="bg-red-500 font-bold rounded-lg
                   px-2">
                    20% OFF
                  </div>
                  <div className="text-orange-500 font-bold">RP.75.000</div>
              </div>
              <div className="flex flex-row justify-center -space-x-10 hover:scale-105">
                    <div className="w-24 z-20">
                      <img src={food6} alt="" />
                    </div>
                    <div className="w-36 ">
                      <img src={food4} alt="" />
                    </div>
                    <div className="w-20 -pl-6 z-20">
                        <img src={food20} alt="" />
                    </div>
              </div>
              <div className="py-4 flex text-xl font-bold justify-center z-10">
                Advance Mode
              </div>
              <div className="flex-1 justify-betweenn px-3">
                  <div className="flex flex-row items-center justify-between gap-2">
                    <div className="flex px-2 py-1 bg-white items-center gap-2 rounded-xl">
                    <AiOutlinePlus className="text-md "/>
                    <p className="text-md">0</p>
                    <AiOutlineMinus className="text-md"/>
                    </div>
                    <div className="">
                    <dir className="flex gap-1">
                      <BsCart3 className="bg-green-500 h-7 w-7 px-1 py-1 rounded-l-lg"/>
                      <p className="text-sm py-1 px-1 rounded-r-lg bg-green-500">Add to Cart</p>
                    </dir>
                  </div>
                </div>
              </div>
            </motion.div>
            <AiOutlineArrowRight className='text-4xl bg-[#F2BD57] md:hidden rounded-full p-1 cursor-pointer'/>
          
          </div>

          <div className="flex justify-center gap-5 py-5">
            <button className=" px-4 py-2 rounded-2xl bg-[#F2BD57] font-semibold hover:scale-105 ">HEALTY FOODS</button>
            <button className=" px-4 py-2 rounded-2xl bg-white font-semibold hover:scale-105 ">REGULER EATS</button>
          </div>
      </div>
      </div>
    </section>
  );
};

export default Special;
