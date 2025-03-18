import React from 'react';
import Tomi8Banner from '../assets/images/tomi8-banner.png';

function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className=" bg-[#22233A]">
        <div className="px-3 py-8 md:px-0 md:pt-12 md:pb-8 max-w-[1110px] w-full m-auto">
          <img src={Tomi8Banner} alt="" />
        </div>
      </footer>
    </>
  );
}

export default Footer;
