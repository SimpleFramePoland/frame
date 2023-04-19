import React from 'react';
import Link from 'next/link';
export default function Hero(){ 
 return (

   <div className=" flex items-center justify-center bg-black bg-no-repeat h-screen  bg-cover  ">
  <div className="herotext flex flex-col items-center" id="first">
  	<h1 className='text-5xl lg:text-7xl text-center font-bold drop-shadow-xl' >Wyprodukujemy Twój film</h1>
   <p className='text-center font-bold drop-shadow-xl pt-6 text-2xl'> Zrealizujemy Twój film w rozdzielczości HD lub 4K</p>
   <button className='btn mt-7 w-[7rem] h-10 mx-auto bg-babyblue rounded-lg '>
    <Link className="text-white text-xl font"href="/porozmawiajmy">
    <a>
      Kontakt
    </a>
    </Link >
   </button>
  </div>
  <div className="herotext flex flex-col items-center " id="second">
  	<h1 className='text-5xl lg:text-7xl text-center font-bold drop-shadow-xl'>Stworzymy Twoją animację</h1>
    <p className='text-center font-bold drop-shadow-xl pt-6 text-2xl'>Potencjał animacji wciąż rośnie</p>
    <button className='btn mt-7 w-[7rem] h-10 mx-auto bg-babyblue rounded-lg '>
    <Link className="text-white text-xl font"href="/porozmawiajmy">
    <a>
      Kontakt
    </a>
    </Link >
   </button>
  </div>
  <div className="herotext flex flex-col items-center" id="third">
  	<h1 className='text-5xl lg:text-7xl text-center font-bold drop-shadow-xl'>Zaprojektujemy Twoją reklamę</h1>
    <p className='text-center font-bold drop-shadow-xl pt-6 text-2xl'> Pomożemy Ci zaskoczyć Twoich kontrahentów</p>
    <button className='btn mt-7 w-[7rem] h-10 mx-auto bg-babyblue rounded-lg '>
    <Link className="text-white text-xl font"href="/porozmawiajmy">
    <a>
      Kontakt
    </a>
    </Link >
   </button>
  </div>
  <video autoPlay loop muted playsInline className=" bg-clip-text inset-0 object-cover  w-screen h-screen xl:h-auto  ">
       <source
         src="./../edit2.mp4"
         type="video/mp4"
       />
     </video>

   <style>

   </style>
   </div>

 )
}