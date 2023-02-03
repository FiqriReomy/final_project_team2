import React from "react";
import Homepage from "../components/general/Homepage";
import Menu from "../components/general/Menu";
import Special from "../components/general/Special";
import Comment from "../components/general/Comment";
import InputComment from "../components/general/Inputcomment";
import About from "../components/general/About";

const Landingpage = () => {
  return (
    <div>
      <Homepage />
      <Menu />
      <Special />
      <Comment />
      <InputComment />
      <About />
    </div>
  );
};

export default Landingpage;
