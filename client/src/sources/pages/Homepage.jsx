import React from "react";
import {FiSearch} from 'react-icons/fi'

const Home = () => {
  return (
    <>
<div className="hero min-h-screen bg-hero">
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-md">
      <h1 className="mb-5 text-7xl font-bold">Brings Taste With Love Into Your Home</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Shop Now</button>
    </div>
  </div>
</div>
</>
    // <section className="py-2 px-5  pt-24 ">
    //   <div className="header mx-auto max-w-screen-xl bg-secondary">
    //     <div className="content_area h-[400px] md:h-[450px] lg:h-[650px] flex-allcenter border bg-hero  md:bg-contain bg-no-repeat md:bg-repeat">
    //       <div className="flex opacity-100">
    //         <div className="py-14 px-10 flex flex-col">
    //       <p className="text-3xl lg:text-5xl font-bold ">Brings Taste Whith Love Into Your Home</p>
    //       <p class="text-md lg:text-xl italic pt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi culpa nisi a debitis facere error? Dicta velit nam dolore, tempore expedita quis atque accusamus, dolorem ducimus magnam iusto eveniet libero!</p>
    //       <div className="pt-10 flex items-center flex-row">
    //           <button class="rounded-3xl bg-[#F2BD57] font-semibold text-sm px-5 py-2 w-28">Order Now</button>
    //           <div class="flex items-center justify-between border-[2px] border-solid border-[#F2BD57] rounded-3xl ml-[10px] w-96 h-10">
    //               <FiSearch className='w-10 text-2xl'/>
    //               <div className="bg-[#F2BD57] rounded-3xl w-40 h-10 border-[2px] border-solid border-[#F2BD57] ">
    //                   <div className="flex justify-center items-center text-xl p-1 font-semibold ">Search</div>
    //               </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className=" items-center justify-center hidden lg:flex">
    //       <div>
    //          <img className="w-[200rem]" src={hero} alt=""/>
    //       </div>
    //     </div>
    //       </div>
       
       
    //     </div>
    //   </div>
    // </section>
  );
};

export default Home;
