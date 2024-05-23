import React from "react";

const Hero = () => {
  return (
    <div className="faded-in w-full flex justify-center items-center">
      <div className="w-full lg:w-[700px] px-[24px] lg:px-0 flex flex-col gap-10 lg:text-center pt-[60px] lg:pt-[120px]">
        <div className="flex flex-col gap-0">
          <p className="font-bold lg:text-[18px]">I am</p>
          <p className="font-bold text-[36px] lg:text-[72px]">
            Professor Osaretin Albert T. Ebuehi
          </p>
          <p className="font-bold lg:text-[18px]">PhD, MBA, MSc</p>
        </div>
        <p className="font-normal lg:text-[18px]">
          Figma ipsum component variant main layer. Layout pixel subtract flows
          hand flows star undo. Pen bold duplicate community select line
          connection pen. Underline figma hand asset export.
        </p>
        <div className="">
          <button className="px-8 py-2 border border-[#1d1d1f] hover:scale-105 transition ease-in-out">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
