import React from 'react';

export default function Hero(){ 
 return (
   <div className="relative bg-black ">
   <div className="bg-hero-section bg-no-repeat h-screen bg-center bg-cover  ">
    <h1 className='text-white text-5xl text-center z-10 pt-[14rem]'>Produkcja filmowa. Produkcja Reklam. Animacje</h1>
   <video autoPlay loop muted playsInline className="absolute inset-0 object-cover w-screen h-screen xl:h-auto  grayscale">
       <source
         src="./../edit2.mp4"
         type="video/mp4"
       />
     </video>
   </div>
 </div>
 )
}