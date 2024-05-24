import React from "react";

const Navbar = () => {
  return (
    <div className="w-full px-[24px] lg:px-[20%] py-[20px]">
      <div className="w-full flex justify-between items-center">
        <p className="lg:text-[18px] font-bold cursor-pointer">O.A.T EBUEHI</p>
        <button className="sm:hidden px-4 py-2 bg-[#1d1d1f] text-[#f5f5f7] hover:scale-105 transition ease-in-out">
          Contact me
        </button>
        <div className="hidden lg:flex gap-[100px] items-center">
          <div className="flex gap-10">
            <p className="text-[18px] font-normal hover:scale-105 transition ease-in-out cursor-pointer">
              About
            </p>
            <p className="text-[18px] font-normal hover:scale-105 transition ease-in-out cursor-pointer">
              Publications
            </p>
          </div>
          <button className="px-8 py-2 bg-[#1d1d1f] text-[#f5f5f7] hover:scale-105 transition ease-in-out">
            Contact me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
