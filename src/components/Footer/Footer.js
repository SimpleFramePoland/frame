
import React from 'react';
import Image from 'next/image';
import Section from 'components/Section';




const Footer = () => {


  return (
        <Section >
            <footer className="text-white  mt-12 bg-black">
        
            
  
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
<a href="tel:+48 502 061 431">+48 502 061 431</a> <br />
                  <a href="mailto:kontakt@simpleframe.pl">kontakt@simpleframe.pl</a> <br/>
NIP :	5213776916<br/>

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
            <a href="/postprodukcja"className="text-white hover:text-babyblue">Postprodukcja</a>
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
  
    <div className="container mx-auto  px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-babyblue fonttext-sm text-center sm:text-left">© 2023 SimpleFrame
        
      </p>
     
    
  </div>
  
        </footer>
      </Section>

  );
};

export default Footer;
