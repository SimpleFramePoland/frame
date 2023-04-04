
import React from "react";
export default function Slider() {
  return (
    <div className="h-65 sm:h-64 xl:h-70 2xl:h-[24rem] mt-[5rem] ">
    <video autoPlay loop muted playsInline className="absolute inset-0 object-cover w-screen h-screen xl:h-auto   grayscale">
       <source
         src="./../edit1.mp4"
         type="video/mp4"
       />
     </video>
    </div>
  );
}