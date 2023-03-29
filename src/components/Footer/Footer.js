import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Section from 'components/Section';
import Container from 'components/Container';



const Footer = () => {


  return (
        <Section >
            <footer className="text-white absolute w-full bg-black">
        
            
  
          <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
    <div className="flex lg:flex-1">
        <a href="/" className=" ">
          <span className="sr-only">Your Company</span>
          <Image
      src="/logo.png"
      alt="Landscape picture"
      width={315}
      height={45}
      
    />
        </a>
       
      </div>
      <p className="mt-4  ">
        ul. Wiertnicza 135A<br/>
02-952 Warszawa<br/>
KRS	0000673577<br/>
NIP	5213776916<br/>
Regon	367060762
        </p>
    </div>
    <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h3 className="title-font font-bold text-babyblue tracking-widest text-sm mb-3">Produkcja filmowa </h3>
        <nav className="list-none mb-10">
          <li>
            <a href="/film-reklamowy" className="text-white hover:text-babyblue">Film Reklamowy</a>
          </li>
          <li>
            <a href='/film-korporacyjny' className="text-white hover:text-babyblue">Film Korporacyjny</a>
          </li>
          <li>
            <a href='/film-promocyjny' className="text-white hover:text-babyblue">Film Promocyjny</a>
          </li>
          <li>
            <a href='/film-produktowy' className="text-white hover:text-babyblue">Film Produktowy</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h3 className="title-font font-bold text-babyblue tracking-widest text-sm mb-3">Animacje</h3>
        <nav className="list-none mb-10">
          <li>
            <a href= '/animacja-3d-2/' className="text-white hover:text-babyblue">Animacja 3D</a>
          </li>
          <li>
            <a href= '/animacja-2d' className="text-white hover:text-babyblue">Animacja 2D</a>
          </li>
          <li>
            <a href= '/animacja-techniczna' className="text-white hover:text-babyblue">Animacja Techniczna</a>
          </li>
          <li>
            <a  href= '/animacja-produktowa' className="text-white hover:text-babyblue">Animacja Produktowa</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h3 className="title-font font-bold text-babyblue tracking-widest text-sm mb-3">Postprodukcja</h3>
        <nav className="list-none mb-10">
          <li>
            <a className="text-white hover:text-babyblue">Postproduckja</a>
          </li>
          <li>
            <a href="/montaz-filmow" className="text-white hover:text-babyblue">Montaż filmów</a>
          </li>
          <li>
            <a href='/produkcja-animacji' className="text-white hover:text-babyblue">Produkcja Animacji</a>
          </li>
        
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h3 className="title-font font-bold text-babyblue tracking-widest text-sm mb-3">Uslugi</h3>
        <nav className="list-none mb-10">
          <li>
            <a href= '/billboard-sponsorski' className="text-white hover:text-babyblue">Billboard Sponsorski</a>
          </li>
          <li>
            <a href= '/teledyski' className="text-white hover:text-babyblue">Teledyski</a>
          </li>
          <li>
            <a  href= '/fotografia' className="text-white hover:text-babyblue">Fotografia</a>
          </li>
          <li>
            <a href='/streaming-video' className="text-white hover:text-babyblue">Streaming</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div className="">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-babyblue fonttext-sm text-center sm:text-left">© 2023 SimpleFrame
        
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="text-babyblue">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-babyblue">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-babyblue">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="ml-3 text-babyblue">
          <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12h3z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
  
        </footer>
      </Section>

  );
};

export default Footer;
