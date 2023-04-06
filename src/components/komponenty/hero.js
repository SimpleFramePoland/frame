import React from 'react';

export default function Hero(){ 
 return (

   <div className="relative flex items-center justify-center bg-black bg-no-repeat h-screen  bg-cover  ">
      <h1 className='px-8 z-20 text-6xl lg:text-8xl h-[11rem] flex items-center  align-middle font-bold text-white  rounded-xl text-center'>Stworzymy Twój Film</h1>
   <video autoPlay loop muted playsInline className="absolute bg-clip-text inset-0 object-cover  w-screen h-screen xl:h-auto  ">
       <source
         src="./../edit2.mp4"
         type="video/mp4"
       />
     </video>
   
   </div>

 )
}