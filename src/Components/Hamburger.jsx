import React, { useEffect } from "react";
import "./Hamburger.css";

function Hamburger() {
    let bars = null;
    useEffect(() => {
        bars = document.querySelectorAll(".bar");
    } , [])
    
    function toggleHamburger(e) {
        e.preventDefault();
        if(bars)
        bars.forEach(bar => bar.classList.toggle('x'))
      }

  return (
    <div className="flex md:hidden" onClick={toggleHamburger}>
      <a className="nav-toggle">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
    </div>
  );
}

export default Hamburger;
