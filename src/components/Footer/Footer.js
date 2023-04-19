
import React from 'react';
import Image from 'next/image';
import Section from 'components/Section';
import Link from 'next/link';



const Footer = () => {


  return (
        <Section >
            <footer className="text-white  mt-12 bg-black">
        
            
  
          <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
    <div className="flex lg:flex-1">
        <Link href="/" className=" ">
         
          <Image
      src="/logofooter.png"
      alt="Logo simpleframe"
      width={315}
      height={45}
      className="lg:-10"
    />
        </Link >
       
      </div>
      <p className="mt-4  ">
        Simple Frame Sp. z o.o.<br/>
 
        ul. Wiertnicza 135A<br/>
02-952 Warszawa<br/>
<a className="text-babyblue" href="tel:+48 502 061 431">+48 502 061 431</a > <br />
                  <a className="text-babyblue" href="mailto:kontakt@simpleframe.pl">kontakt@simpleframe.pl</a> <br/>


        </p>
    </div>
    <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h3 className="title-font font-bold text-babyblue tracking-widest text-sm mb-3">Produkcja filmowa </h3>
        <nav className="list-none mb-10">
          <li>
           
          </li>
          <li>
            <Link href='/film-korporacyjny'><a className="text-white hover:text-babyblue">Film Korporacyjny</a></Link >
          </li>
          <li>
            <Link href='/film-promocyjny' ><a className="text-white hover:text-babyblue">Film Promocyjny</a></Link >
          </li>
          <li>
            <Link href='/film-produktowy'><a  className="text-white hover:text-babyblue" >Film Produktowy</a></Link >
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h3 ><a className="title-font font-bold text-babyblue tracking-widest text-sm mb-3">Animacje</a></h3>
        <nav className="list-none mb-10">
      
          <li>
            <Link href= '/animacja-3d-2'><a  className="text-white hover:text-babyblue" >Animacja 3D</a></Link >
          </li>
          <li>
            <Link href='/animacja-2d' ><a className="text-white hover:text-babyblue" >Animacja 2D</a></Link >
          </li>
          <li>
            <Link href='/animacja-techniczna' ><a className="text-white hover:text-babyblue">Animacja Techniczna </a></Link >
          </li>
          <li>
            <Link href= '/animacja-produktowa' ><a className="text-white hover:text-babyblue" >Animacja Produktowa </a></Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h3 ><a className="title-font font-bold text-babyblue tracking-widest text-sm mb-3" >Postprodukcja</a></h3>
        <nav className="list-none mb-10">
          <li>
            <Link href="/postprodukcja"><a className="text-white hover:text-babyblue">Postprodukcja</a></Link >
          </li>
          <li>
            <Link href="/montaz-filmow" ><a className="text-white hover:text-babyblue">Montaż filmów</a></Link >
          </li>
          <li>
            <Link href='/produkcja-animacji' ><a className="text-white hover:text-babyblue" >Produkcja Animacji</a></Link >
          </li>
        
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h3 className="title-font font-bold text-babyblue tracking-widest text-sm mb-3">Usługi</h3>
        <nav className="list-none mb-10">
          <li>
            <Link href= '/billboard-sponsorski' ><a className="text-white hover:text-babyblue" >Billboard Sponsorski</a></Link >
          </li>
          <li>
            <Link href= '/teledyski' ><a className="text-white hover:text-babyblue" >Teledyski</a></Link >
          </li>
          <li>
            <Link  href= '/fotografia' ><a className="text-white hover:text-babyblue" >Fotografia</a></Link >
          </li>
          <li>
            <Link href='/streaming-video' ><a className="text-white hover:text-babyblue" >Streaming</a></Link >
          </li>
        </nav>
      </div>
    </div>
  </div>
  
    <div className="container mx-auto  px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-white fonttext-sm text-center sm:text-left">© 2023 SimpleFrame Sp. z o.o. 
        
      </p>
     
    
  </div>
  
        </footer>
      </Section>

  );
};

export default Footer;
