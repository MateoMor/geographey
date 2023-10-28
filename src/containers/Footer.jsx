import React from "react";

function Footer() {
  return (
    <section className="relative w-[100]">
      {/* <div className="relative w-[100%] h-[110pt] bg-pageColor overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[100%] h-[140pt] bg-[url('/geographey/assets/wave(4).svg')] bg-[length:1000px] animate-wave"></div>
        <div className="absolute bottom-0 left-0 w-[100%] h-[100pt] bg-[url('/geographey/assets/wave.svg')] bg-[length:1000px] animate-reverseWave"></div>
      </div> */}
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
      <div className="wave wave4"></div>
    </section>
  );
}

export default Footer;
