import React from 'react';
import tomiIcon from '../assets/tomi-icon.svg';
import { ChevronDown, Earth } from 'lucide-react';

function NavBar() {
  return (
    <>
      <div className="flex relative items-center justify-between max-w-[1140px] mx-auto pt-[35px] px-[15px] md:mb-[60px] ">
        <ul className="flex gap-2 items-center ">
          <li>
            <div className="flex gap-2 justify-center items-center">
              <img
                src={tomiIcon}
                alt="icono de tomi8"
                className=" h-25 w-25 "
              />
            </div>
          </li>
        </ul>
        <ul className="flex items-center gap-2">
          <div className="border-x border-[#D2D3D7] h-[30px]"></div>
          <li>
            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100">
              <Earth className="w-5 h-5" />
              ESP
              <ChevronDown className="w-4 h-4" />
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
