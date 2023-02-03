import React from "react";
import { FiSearch } from "react-icons/fi";

const Home = () => {
  return (
    <>
      <div className="hero min-h-screen bg-hero">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-md">
            <h1 className="mb-5 text-7xl font-bold">Brings Taste With Love Into Your Home</h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-warning">Order Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
