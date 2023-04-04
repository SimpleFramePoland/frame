import useSite from 'hooks/use-site';
import React from 'react';
import Layout from 'components/Layout';
import ContactForm from 'components/komponenty/ContactForm'
import Container from 'components/Container';
import Carousel from 'components/komponenty/Carousel'

import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Zrealizujemy Twój projekt',
    description:
      'Nasze produkcje to setki zrealizowanych filmów reklamowych, promocyjnych, filmów wizerunkowych i animacji.',
    icon: CloudArrowUpIcon,
  },


]

export default function Home() {
  const { metadata = {} } = useSite();
  const { title, description } = metadata;

  return (
    <Layout>
      <Carousel />




      <div className="overflow-hidden bg-white py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-babyblue">Darmowa wycena</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">Porozmawiajmy <span className="text-6xl animate-bounce">👋🏼</span></p>
                <p className="mt-6 text-lg leading-8 text-black">
                  Współpracowaliśmy z ponad 4000 firmami.<br/> <b>Znajdziemy dla Ciebie najlepsze rozwiązanie.</b>
                </p>

                <h3 className="mt-6 text-3xl font-bold leading-8 text-black">Simple <span className='text-babyblue'> Frame</span></h3>
                <p className="mt-6 text-lg leading-8 text-black">
                  Kontakt: <br/>
                </p>

                <p className="mt-6 text-lg leading-8 text-black">
                  <a href="tel:+48 502 061 431">+48 502 061 431</a> <br />
                  <a href="mailto:kontakt@simpleframe.pl">kontakt@simpleframe.pl</a>
                </p>


                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-black lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-black">
                        <feature.icon className="absolute left-1 top-1 h-5 w-5 text-babyblue" aria-hidden="true" />
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>


     <div className="flex flex-col items-center">
      <h1 className="text-3xl lg:text-4xl font-semibold text-black mb-12">
       Zapraszamy do naszego biura w Warszawie
      </h1>
      </div>
     
      <div className="w-full h-[36rem] md:w-3/4  mx-auto">
      <iframe
        title="Simple Frame Location"
        className="w-full h-full border-none"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2446.690595269549!2d21.072874915794703!3d52.17631867975067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecd51214093e5%3A0xa8e9b221662996cd!2sSimple%20Frame!5e0!3m2!1spl!2spl!4v1679660118254!5m2!1spl!2spl"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>

    </Layout>
  );
}

