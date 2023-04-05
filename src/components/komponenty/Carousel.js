
import React from "react";
export default function Slider() {
  return (
    <div className="bg-black">
    <video autoPlay loop muted playsInline className=" w-screen pt-[6rem] h-[12rem] lg:pt-0 ">
       <source
         src="/edit2.mp4"
         type="video/mp4"
       />
     </video>
    </div>
  );
}