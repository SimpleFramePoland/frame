import { Carousel } from "flowbite-react";
import React from "react";
export default function Slider() {
  return (
    <div className="h-76 sm:h-64 xl:h-80 2xl:h-96 mt-12 ">
      <Carousel>
        <img
          src="/baner1.jpg"
          alt="..."
        />
        <img
          src="/baner2.jpg"
          alt="..."
        />
        <img
          src="/baner3.jpg"
          alt="..."
        />
        <img
          src="/baner4.jpg"
          alt="..."
        
        />
       
      </Carousel>
    </div>
  );
}