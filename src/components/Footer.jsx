import React from 'react';
import Tomi8Banner from '../assets/images/tomi8-banner.png';

function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className=" bg-[#22233A]">
        <div className="px-3 py-8 md:px-0 md:pt-12 md:pb-8 max-w-[1110px] w-full m-auto">
          <a
            href="https://youtu.be/TJ2V5rNVxCY?si=Hg0YvXCy57YKcDgK"
            target="_blank"
            className="flex justify-center text-2xl text-green-600 font-bold underline hover:text-green-700"
          >
            Ver Video Presentación TOMi8
          </a>
          <img src={Tomi8Banner} alt="" />
        </div>
      </footer>
    </>
  );
}

export default Footer;
