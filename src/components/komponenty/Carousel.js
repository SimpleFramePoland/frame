
import React from "react";
export default function Slider() {
  return (
    <div className=" bg-black">
    <video autoPlay loop muted playsInline className=" w-screen pt-[5rem]  ">
       <source
         src="/videopodstrony.mp4"
         type="video/mp4"
       />
     </video>
    </div>
  );
}