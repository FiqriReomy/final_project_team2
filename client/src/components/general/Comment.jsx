import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import avatar from "../../image-source/IconLogo/avatar.png";
import { motion } from "framer-motion";
import { fadeIn } from "../../controls/features/efect";

function Comment() {
  return (
    <section className="py-5 px-5 bg-white">
      <div className=" mx-auto max-w-screen-xl">
        <div className="content_area flex justify-between">
          <h2 className="text-2xl font-semibold">What's Our Customer Says?</h2>
          <div className="flex gap-4">
            <AiOutlineArrowLeft className="text-4xl bg-[#F2BD57] rounded-full p-1 cursor-pointer" />
            <AiOutlineArrowRight className="text-4xl bg-[#F2BD57] rounded-full p-1 cursor-pointer" />
          </div>
        </div>
        <motion.div variants={fadeIn("up", 0.5)} initial="hidden" whileInView={"show"} className="flex">
          <div className="bg-bgprimary md:flex flex-col p-3 rounded-md hidden  my-5 mx-5">
            <p className="text-sm font-semibold">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, facilis aut! Aliquam, delectus voluptatem ratione ipsa nesciunt veritatis corrupti necessitatibus, illum repellat suscipit exercitationem aperiam amet libero
              nulla, explicabo maxime.
            </p>
            <div className="flex gap-2 pt-7 pb-4">
              <div className="avatar">
                <div className="w-9 rounded-full border border-white">
                  <img src={avatar} />
                </div>
              </div>
              <div className="text-xl font-bold flex items-center text-[#553629]">Cruise</div>
            </div>
          </div>
          <div
            className="bg-bgprimary flex flex-col p-3 rounded-md
        my-5 mx-5"
          >
            <p className="text-sm font-semibold">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, facilis aut! Aliquam, delectus voluptatem ratione ipsa nesciunt veritatis corrupti necessitatibus, illum repellat suscipit exercitationem aperiam amet libero
              nulla, explicabo maxime.
            </p>
            <div className="flex gap-2 pt-7 pb-4">
              <div className="avatar">
                <div className="w-9 rounded-full border border-white">
                  <img src={avatar} />
                </div>
              </div>
              <div className="text-xl font-bold flex items-center text-[#553629]">Ricard</div>
            </div>
          </div>
          <div className="bg-bgprimary md:flex flex-col p-3 rounded-md hidden my-5 mx-5">
            <p className="text-sm font-semibold">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, facilis aut! Aliquam, delectus voluptatem ratione ipsa nesciunt veritatis corrupti necessitatibus, illum repellat suscipit exercitationem aperiam amet libero
              nulla, explicabo maxime.
            </p>
            <div className="flex gap-2 pt-7 pb-4">
              <div className="avatar">
                <div className="w-9 rounded-full border border-white">
                  <img src={avatar} />
                </div>
              </div>
              <div className="text-xl font-bold flex items-center text-[#553629]">Micky</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Comment;
