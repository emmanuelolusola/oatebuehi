import React from "react";
import Navbar from "./Navbar";
import bg from "../../assets/hero_bg.svg";
import Hero from "./Hero";
import NavMobile from "./NavMobile";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="w-full h-[100vh]">
      <div className="w-full h-[100vh] fixed top-0 left-0 flex justify-center items-center -z-50">
        <img
          src={bg}
          alt=""
          className="object-cover w-[90%] lg:w-[40%] opacity-30"
        />
      </div>
      <Navbar />
      <Hero />
      <NavMobile />
      <Footer />
    </div>
  );
};

export default Home;
