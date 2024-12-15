import { Fragment, useState } from 'react'

import { Dialog, Disclosure, Popover, Transition, } from '@headlessui/react'
import {

  CameraIcon,
  MusicalNoteIcon,
  ArrowsPointingOutIcon,
  CakeIcon,
  WrenchScrewdriverIcon,
  CubeIcon,
  AdjustmentsHorizontalIcon,
  ComputerDesktopIcon,
  PaperAirplaneIcon,
  VideoCameraIcon,
  EyeIcon,
  BuildingOffice2Icon,
  ArrowPathIcon,
  Bars3Icon,
  FilmIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faVimeo, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

const produkcje = [
  { name: 'Film Reklamowy', description: 'Skuteczna reklama dla Twojego biznesu', href: '/film-reklamowy', icon: FilmIcon },
  { name: 'Film Korporacyjny', description: 'Profesjonalna prezentacja Twojej firmy', href: '/film-korporacyjny', icon: BuildingOffice2Icon },
  { name: 'Film Promocyjny', description: 'Zachęć swoich klientów do zakupów ', href: '/film-promocyjny', icon: EyeIcon },
  { name: 'Film Produktowy', description: 'Pokaż swoje produkty w najlepszym świetle', href: '/film-produktowy', icon: VideoCameraIcon },
  { name: 'Teledyski', description: 'Twoja muzyka, nasza wizja–teledyski, które zachwycają', href: '/teledyski', icon: MusicalNoteIcon },

];
const Postprodukcja = [
  { name: 'Postprodukcja', description: 'Profesjonalne narzędzia do tworzenia wyjątkowych efektów i doskonalenia filmowych produkcji', href: '/postprodukcja', icon: ComputerDesktopIcon },
  { name: 'Montaż filmów', description: 'Zaoszczędź czas i powierz montaż swojego filmu naszym profesjonalnym edytorom', href: '/montaz-filmow', icon: AdjustmentsHorizontalIcon },
  { name: 'Kolor korekcja', description: 'Precyzja kolorów, która podkreśla Twój przekaz', href: '/korekcja_kolorow', icon: AdjustmentsHorizontalIcon },

];
const animacje = [
  { name: 'Animacja 3D', description: 'Ożyw swoje pomysły w trójwymiarowej przestrzeni', href: '/animacja-3d/', icon: CubeIcon },
  { name: 'Animacja 2D', description: 'Zaprojektuj animację dopasowaną do Twojej marki', href: '/animacja-2d', icon: ArrowPathIcon },
  { name: 'Animacja Techniczna', description: 'Wyjaśnij skomplikowane tematy w prosty sposób', href: '/animacja-techniczna', icon: WrenchScrewdriverIcon },
  { name: 'Produkcja Animacji', description: 'Stwórz wyjątkową animację od pomysłu po finalny efekt', href: '/produkcja-animacji', icon: SquaresPlusIcon },
  { name: 'Animacja medyczna', description: 'Precyzja i wiedza w każdym kadrze – animacja medyczna dla Ciebie!', href: '/animacja-medyczna', icon: SquaresPlusIcon },


];
const uslugi = [
  { name: 'Billboard Sponsorski', description: 'Promuj swoją markę i dotrzyj do szerszej publiczności', href: '/billboard-sponsorski', icon: ArrowsPointingOutIcon },
  { name: 'Fotografia', description: 'Uchwyć wspaniałe obrazy, które reprezentują Twoją markę i przyciągają klientów', href: '/fotografia', icon: CameraIcon },
  { name: 'Fotografia techniczna', description: 'Technologia uchwycona w perfekcyjnym kadrze', href: '/streaming-video', icon: ComputerDesktopIcon },
  { name: 'Filmowanie dronem', description: 'Osiągnij nowe perspektywy i zaskocz swoich odbiorców', href: '/dron-filmowanie-z-powietrza', icon: PaperAirplaneIcon },
  { name: 'Prezentacje multimedialne', description: 'Twórz wizualnie atrakcyjne prezentacje, które skutecznie komunikują Twoją wiadomość', href: '/prezentacje-multimedialne', icon: ArrowPathIcon },

];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (

    <header className="bg-black w-full lg:px-5 left-0 z-30 fixed">



      <nav className="mx-auto flex max-w-8xl items-center justify-between p-6 " aria-label="Global">
        <div className="flex lg:flex-1 max-w-[13rem] lg:max-w-none m:max-w-none ">

          <Link href="/" className="-m-1.5 p-1.5 " >


            <img
              src="/logo.png"
              alt="Logo Simple Frame"
              width={315}
              height={45}
              className="sm:max-w-12 cursor-pointer animate-in slide-in-from-left duration-300 delay-100"

            />
          </Link>
        </div>
        <div className="flex lg:hidden">

          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12 animate-in slide-in-from-top duration-300 delay-200">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white focus:outline-none">
              Produkcja filmowa
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-black shadow-lg ring-1 ring-white/5">
                <div className="p-4">
                  {produkcje.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-black-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-black-50 group-hover:bg-grey">
                        <item.icon className="h-6 w-6 text-white group-hover:text-babyblue" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-white group-hover:text-babyblue">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-white">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>


          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white focus:outline-none">
              Postprodukcja
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-black shadow-lg ring-1 ring-white/5">
                <div className="p-4">
                  {Postprodukcja.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-black-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-black-50 group-hover:bg-grey">
                        <item.icon className="h-6 w-6 text-white group-hover:text-babyblue" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-white group-hover:text-babyblue">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-white">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white focus:outline-none">
              Animacja
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-black shadow-lg ring-1 ring-white/5">
                <div className="p-4">
                  {animacje.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-black-50 "
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-black-50 group-hover:bg-black group-hover:text-babyblue">
                        <item.icon className="h-6 w-6 text-white group-hover:text-babyblue" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-white group-hover:text-babyblue">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-white">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

              </Popover.Panel>
            </Transition>
          </Popover>
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white focus:outline-none ">
              Usługi
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-black shadow-lg ring-1 ring-white/5 group-hover:text-babyblue">
                <div className="p-4">
                  {uslugi.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-black-50 group-hover:text-babyblue"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-black-50 group-hover:bg-black group-hover:text-babyblue">
                        <item.icon className="h-6 w-6 text-white group-hover:text-babyblue" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-white group-hover:text-babyblue">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-white">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

              </Popover.Panel>
            </Transition>
          </Popover>

          <Link href="/posts" ><a className="text-sm font-semibold leading-6 text-white" >Blog</a></Link>



        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end  ">
          <div className=' hidden lg:flex lg:space-x-4 md:space-x-1 mr-10 md:ml-5 whitespace-nowrap  '>
            <a href="https://www.youtube.com/channel/UCezq74RQJ37tiOvJjTYx8ow/videos" className='align-middle  ' target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} className="text-white hover:text-babyblue h-6 w-6 animate-in slide-in-from-top duration-500 delay-400" />
            </a>
            <a href="https://www.facebook.com/simpleframe" className='align-middle  ' target="_blank" rel="noopener noreferrer"  >
              <FontAwesomeIcon icon={faFacebook} className="text-white hover:text-babyblue h-6 w-6  animate-in slide-in-from-top duration-500 delay-400" />
            </a>
            <a href="https://vimeo.com/simpleframe" className='align-middle  ' target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faVimeo} className="text-white hover:text-babyblue h-6 w-6 animate-in slide-in-from-top duration-500 delay-400" />
            </a>
            <a href="https://www.instagram.com/simpleframe_warszawa/" className='align-middle  ' target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="text-white hover:text-babyblue h-6 w-6 animate-in slide-in-from-top duration-500 delay-400" />
            </a>
          </div>


          <button className='bg-babyblue rounded-md w-20 h-8  transition hover:ease-in-out animate-in slide-in-from-right duration-300 delay-500'>
            <Link href="/porozmawiajmy"  >
              <a className="text-white font-semibold leading-6 capitalize" >
                Kontakt
              </a>
            </Link>
          </button>

        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-30" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-30 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5" >
              <span className="sr-only">Simple Frame</span>

            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-white font-semibold leading-7 hover:text-babyblue">
                        Produkcja filmowa
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...produkcje,].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:text-babyblue"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  href="/postprodukcja"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-black-50"
                >
                <a className="text-white">
                  Postprodukcja
                </a>
                </Link>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-white font-semibold leading-7 hover:text-babyblue">
                        Animacja
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...animacje,].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:text-babyblue"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-white font-semibold leading-7 hover:text-babyblue">
                        Usługi
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...uslugi,].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:text-babyblue"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  href="/posts"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-black-50"
                >
                <a className="text-white">
                  Blog
                </a>
                </Link>
              </div>
              <button className="bg-babyblue text-white rounded-md w-20 h-10 ">
                <Link
                  href="/porozmawiajmy"
                  className='text-white'
                >
                <a className="text-white">
                  Kontakt
                </a>
                </Link>
              </button>

            </div>
            <div className=' mt-16 space-x-6'>
              <a href="https://www.youtube.com/channel/UCezq74RQJ37tiOvJjTYx8ow/videos" className='align-middle  ' target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} className="text-white hover:text-babyblue h-12 w-12 " target="_blank" rel="noopener noreferrer" />
              </a>
              <a href="https://www.facebook.com/simpleframe" className='align-middle  '>
                <FontAwesomeIcon icon={faFacebook} className="text-white hover:text-babyblue h-12 w-12 " target="_blank" rel="noopener noreferrer" />
              </a>
              <a href="https://vimeo.com/simpleframe" className='align-middle  '>
                <FontAwesomeIcon icon={faVimeo} className="text-white hover:text-babyblue h-12 w-12 " target="_blank" rel="noopener noreferrer" />
              </a>
              <a href="https://www.instagram.com/simpleframe_warszawa/" className='align-middle  '>
                <FontAwesomeIcon icon={faInstagram} className="text-white hover:text-babyblue h-12 w-12 " target="_blank" rel="noopener noreferrer" />
              </a>
              
             
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
