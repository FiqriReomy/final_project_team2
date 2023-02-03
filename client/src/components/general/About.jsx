import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../controls/features/efect";
import logo1 from '../../image-source/IconLogo/logo.png'
import {AiFillYoutube,AiFillFacebook,AiFillTwitterSquare} from 'react-icons/ai'

const About = () => {
  return (
    <div id="about" className="py-5 px-5 font-['Poppins'] bg-[#F5EFE4]">
      <div className="header mx-auto max-w-screen-xl">
      <motion.section
        variants={fadeIn('up',0.5)}
        initial="hidden"
        whileInView={'show'}
        id="about" className="py-5 px-5 font-['Poppins'] bg-white">
          <div className="header mx-auto max-w-screen-xl">
              <div className="flex flex-col items-center justify-center">
                <img src={logo1} className='w-60' alt="" />
                <h1 className="pt-10 uppercase text-xl font-semibold">Tentang Kami</h1>
                <p className="px-20 pt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque optio cumque accusamus cum dolorum doloremque blanditiis vel placeat deserunt, harum consequuntur omnis officia libero sapiente, a dignissimos voluptatem, dolorem iusto?</p>
              </div>
              <div className="px-20 pt-5">
                <h2 className="font-semibold">Hubungi kami di</h2>
                <div className="flex gap-5 pt-2">
                  <a href="https://www.youtube.com/" target='_blank'>
                    <AiFillYoutube className="w-10 h-10 text-red-500" />
                  </a>
                  <a href="https://www.twitter.com" target='_blank'>
                    <AiFillFacebook className="w-9 h-9 text-blue-800" />
                  </a>
                  <a href="https://www.facebook.com" target='_blank'>
                    <AiFillTwitterSquare className="w-9 h-9 text-blue-400" />
                  </a>
                </div>
              </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
