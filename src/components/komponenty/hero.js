import React from 'react';

export default function Hero(){ 
 return (

   <div className="relative flex items-center justify-center bg-black bg-no-repeat h-screen  bg-cover  ">
    <h1 className='relative z-20 p-5 text-8xl font-bold text-white bg-black bg-opacity-75 rounded-xl text-center'>Produkcja filmowa</h1>
   <video autoPlay loop muted playsInline className="absolute inset-0 object-cover w-screen h-screen xl:h-auto  grayscale">
       <source
         src="./../edit2.mp4"
         type="video/mp4"
       />
     </video>
   </div>

 )
}