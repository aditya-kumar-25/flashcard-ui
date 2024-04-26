import React from "react";
import { navbarLinks } from "./utilityDemoData";

function MobileNavbar() {
  return (
    <div
      id="mobile-navbar"
      className={`fixed top-0 right-0 translate-x-[100vw] w-[100vw] min-h-[100vh] z-[10] bg-white transition duration-300 flex justify-center`}
    >
      <ul className="flex flex-col gap-5 mt-[20vh]">
        {navbarLinks.map((item, index) => {
          return (
            <li key={index}>
              <a className=" font-semibold" href={item.path}>
                {item.title}
              </a>
            </li>
          );
        })}
        <li><a href='/login' className='primary-gradient px-3 py-1 rounded-full text-sm font-[500]'>Login</a></li>
        
      </ul>
    </div>
  );
}

export default MobileNavbar;
