import React from "react";

const NavMobile = () => {
  return (
    <div className="sm:hidden fixed bottom-0 w-full h-[60px] bg-[#1d1d1f] px-[24px] flex justify-center items-center">
      <div className="w-full flex justify-around">
        <p className="text-[#f5f5f7]">About</p>
        <p className="text-[#f5f5f7]">Publications</p>
      </div>
    </div>
  );
};

export default NavMobile;
