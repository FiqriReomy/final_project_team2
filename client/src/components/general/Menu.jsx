import React, { useState, useEffect } from "react";
// import Detailbox from "../../sources/components/Detailbox";
import axios from "axios";
import { fadeIn } from "../../controls/features/efect";
import { motion } from "framer-motion";

const Menu = () => {
  const [DataResult, setData] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);
  const getProduct = async () => {
    const response = await axios.get("http://localhost:5000/products");
    setData(response.data.result);
  };

  return (
    <section id="menu" className="py-2 px-5 font-['Poppins'] bg-[#F5EFE4]">
      {/* {openModal && <Detailbox setOpenModal={setOpenModal} />} */}
      <div className="header mx-auto max-w-screen-xl">
        <div className="content_area px-2">
          <div className="navigate flex flex-col items-center ">
            <div className="title flex justify-center sm:w-full lg:w-1/2 ">Our Menu</div>
            <div className="content flex justify-center gap-2 px-5 sm:w-full lg:w-1/2">
              <button className="rounded bg-white hover:bg-[#F2BD57] p-2 shadow-2xl">
                <div className="images">
                  <img className="w-[70px] object-cover" src="images/food5.png" alt="" />
                </div>
                <div className="text-[14px] font-bold">All Menu</div>
              </button>
              <button className="rounded bg-white hover:bg-[#F2BD57] p-2 shadow-2xl">
                <div className="images">
                  <img className="w-[70px] object-cover" src="images/food6.png" alt="foodlogo" />
                </div>
                <div className="text-[14px] font-bold">Makanan</div>
              </button>
              <button className="rounded bg-white hover:bg-[#F2BD57] p-2 shadow-2xl">
                <div className="images">
                  <img className="w-[70px] object-cover" src="images/food8.png" alt="foodlogo" />
                </div>
                <div className="text-[14px] font-bold">Minuman</div>
              </button>
            </div>
          </div>
          <div className="content py-5 flex flex-wrap justify-between items-center">
            {DataResult.map((data) => (
              <motion.div variants={fadeIn("up", 0.5)} initial="hidden" whileInView={"show"} className=" sm:w-full md:w-1/2 lg:w-1/4 p-2  " key={data.id}>
                <div className="display shadow-2xl relative cursor-pointer bg-white h-[300px] rounded-md">
                  <div className="image w-full h-[200px] overflow-hidden flex justify-center p-4">
                    <img className="w-[80%] object-contain hover:scale-105" src={data.url} alt="foodimage" />
                  </div>
                  <div className="flex  px-5 font-bold text-[16px] flex-col uppercase">{data.name}
                  <div className="rating w-20">
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div></div>
                  <div className=" px-5 text-[15px] text-left flex justify-between items-center">
                    <div className="price text-md font-semibold">Rp. {data.price}</div>
                    <button className="py-2 px-4 bg-green-500 rounded hover:bg-green-200">ADD TO CART</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
