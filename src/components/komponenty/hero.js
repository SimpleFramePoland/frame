import React from 'react';

export default function Hero(){ 
 return (
   <div className="relative ">
   <div className="bg-hero-section bg-no-repeat h-screen bg-center bg-cover ">
     <video autoPlay loop muted playsinline className="absolute inset-0 object-cover w-screen h-screen xl:h-auto grayscale">
       <source
         src="./../video3.mp4"
         type="video/mp4"
       />
     </video>
   </div>
 </div>
 )
}