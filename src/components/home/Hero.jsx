import React from "react";

const Hero = () => {
  return (
    <div className="faded-in w-full flex justify-center items-center">
      <div className="w-full lg:px-[20%] px-[24px] lg:px-0 py-20 lg:py-40">
        <div className="flex flex-col lg:flex-row gap-[80px] items-center">
          <div className="w-full flex flex-col gap-10">
            <div className="flex flex-col gap-0">
              <p className="font-bold lg:text-[18px]">I am</p>
              <p className="font-[800] text-[38px] lg:text-[68px]">
                Professor Osaretin Albert T. Ebuehi
              </p>
              <p className="font-bold lg:text-[18px]">PhD, MBA, MSc</p>
            </div>
            <p className="font-normal lg:text-[18px]">
              Figma ipsum component variant main layer. Layout pixel subtract
              flows hand flows star undo. Pen bold duplicate community select
              line connection pen. Underline figma hand asset export.
            </p>
            {/* <div className="">
              <button className="px-8 py-2 border border-[#1d1d1f] bg-[#f5f5f7] hover:scale-105 transition ease-in-out">
                Read more
              </button>
            </div> */}
          </div>
          <div className="w-full lg:w-[70%] flex flex-col gap-4">
            <div className="flex flex-col py-8 px-8 border border-[#1d1d1f] hover:scale-105 transition ease-in-out hover:bg-[#1d1d1f] hover:text-[#f5f5f7]">
              <p className="font-normal lg:text-[18px]">
                Educational Background
              </p>
            </div>
            <div className="flex flex-col py-8 px-8 border border-[#1d1d1f] hover:scale-105 transition ease-in-out hover:bg-[#1d1d1f] hover:text-[#f5f5f7]">
              <p className="font-normal lg:text-[18px]">
                Professional Experience
              </p>
            </div>
            <div className="flex flex-col py-8 px-8 border border-[#1d1d1f] hover:scale-105 transition ease-in-out hover:bg-[#1d1d1f] hover:text-[#f5f5f7]">
              <p className="font-normal lg:text-[18px]">Publications</p>
            </div>
            <div className="flex flex-col py-8 px-8 border border-[#1d1d1f] hover:scale-105 transition ease-in-out hover:bg-[#1d1d1f] hover:text-[#f5f5f7]">
              <p className="font-normal lg:text-[18px]">Honours and Awards</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
