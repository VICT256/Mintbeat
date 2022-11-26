import React from "react";
import Hero from "../components/home/Hero";
import MusicSection from "../components/home/MusicSection";

const Home = () => {
  return (
    <div className="">
      <div className="max-w-[1240px] mx-auto pt-[2rem] px-5 pb-20">
        

        
       <Hero />
        <MusicSection />
      </div>
    </div>
  );
};

export default Home;
