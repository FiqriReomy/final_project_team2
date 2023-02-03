import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../controls/features/efect";

const About = () => {
  return (
    <div id="about" className="py-5 px-5 font-['Poppins'] bg-[#F5EFE4]">
      <div className="header mx-auto max-w-screen-xl">
        <motion.section variants={fadeIn("up", 0.5)} initial="hidden" whileInView={"show"}>
          <div class="w-full flex flex-col items-center justify-center pt-5 pb-10">
            <div className="title mb-5">
              <h2 className="text-[40px] font-semibold">About Us</h2>
            </div>
            <div className="flex items-center justify-center flex-col px-10">
              <h1 className="text-2xl pb-6">Visi</h1>
              <p className="px-18 text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus eveniet consequatur, placeat, fugit tenetur neque est, culpa consectetur excepturi nobis perferendis quisquam aut ex nemo! Asperiores, excepturi. Vero quas cum
                reprehenderit assumenda quaerat quibusdam et ut deserunt nesciunt, praesentium, nisi quos fuga cupiditate rerum dolorum aliquam est asperiores illum, accusantium facere ipsum? Expedita voluptate tenetur cum assumenda, nam
                sapiente optio quidem unde dolores, suscipit ipsa amet dolore ipsam dolorem! Recusandae accusamus pariatur cum, possimus mollitia id deserunt voluptate beatae eos ut ullam in ratione animi iusto minima hic libero consectetur
                voluptates sint dignissimos dolorem iure quisquam, aspernatur quibusdam. Doloribus, ducimus?
              </p>
              <h1 className="text-2xl pb-6 pt-10">Misi</h1>
              <p className="px-1 text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus eveniet consequatur, placeat, fugit tenetur neque est, culpa consectetur excepturi nobis perferendis quisquam aut ex nemo! Asperiores, excepturi. Vero quas cum
                reprehenderit assumenda quaerat quibusdam et ut deserunt nesciunt, praesentium, nisi quos fuga cupiditate rerum dolorum aliquam est asperiores illum, accusantium facere ipsum? Expedita voluptate tenetur cum assumenda, nam
                sapiente optio quidem unde dolores, suscipit ipsa amet dolore ipsam dolorem! Recusandae accusamus pariatur cum, possimus mollitia id deserunt voluptate beatae eos ut ullam in ratione animi iusto minima hic libero consectetur
                voluptates sint dignissimos dolorem iure quisquam, aspernatur quibusdam. Doloribus, ducimus?
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
