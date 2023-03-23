import { Carousel } from "flowbite-react";
import React from "react";
export default function Slider() {
  return (
    <div className="h-76 sm:h-64 xl:h-80 2xl:h-96 lg:-mt-5">
      <Carousel>
        <img
          src="/feature1.jpg"
          alt="..."
        />
        <img
          src="/feature1.jpg"
          alt="..."
        />
      </Carousel>
    </div>
  );
}