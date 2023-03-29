import React from 'react'
import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import Carousel from 'components/komponenty/Carousel'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [agreed, setAgreed] = useState(false)

  return (
 
    <div className='flex flex-col md:flex-row  mt-[120px] '>
      <div>
         
      <h3>Simple Frame</h3>
        <p>
ul. Wiertnicza 135A
02-952 Warszawa
<br/>

<a  href="tel:+48 502 061 431">+48 502 061 431</a>
<a href="mailto:kontakt@simpleframe.pl">kontakt@simpleframe.pl</a>
</p>
      </div>
        <div>
      <p> Test</p>
      
      </div>
      
      <div >
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2446.690595269549!2d21.072874915794703!3d52.17631867975067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecd51214093e5%3A0xa8e9b221662996cd!2sSimple%20Frame!5e0!3m2!1spl!2spl!4v1679660118254!5m2!1spl!2spl" className='mx-auto' width="600" height="450"   loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
   
  )
}