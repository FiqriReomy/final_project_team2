import React from "react";
import {motion} from 'framer-motion'
import {fadeIn} from '../../Efek'

const About = () => {
  return (
    <motion.section
    variants={fadeIn('up',0.5)}
    initial="hidden"
    whileInView={'show'}
     id="about" className="py-5 px-5 font-['Poppins'] bg-[#F5EFE4]">
      <div className="header mx-auto max-w-screen-xl">
        <div className="content_area h-[500px] flex-allcenter bg-green-500 border">
          <h2 className="text-[25px]">About</h2>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
