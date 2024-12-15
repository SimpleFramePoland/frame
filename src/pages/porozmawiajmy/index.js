import useSite from 'hooks/use-site';
import React from 'react';
import Layout from 'components/Layout';
import ContactForm from 'components/komponenty/ContactForm'
import { Helmet } from 'react-helmet';
import Carousel from 'components/komponenty/Carousel'
import Head from 'next/head';
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Zrealizujemy Twój projekt',
    description:
      'Nasze produkcje to setki zrealizowanych filmów reklamowych, promocyjnych, filmów wizerunkowych i animacji komputerowych.',
    icon: CloudArrowUpIcon,
  },


]

export default function Home() {
  const  title = 'Kontakt - Simple Frame';
  const  description  = 'Porozmawiaj z Simple Frame';

  return (
    
    <Layout>
    <Head>
    
<script>
  {`gtag('event', 'conversion', {'send_to': 'AW-10799461749/WC8KCL-fk58YEPXqyp0o'}); `}
</script>

        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        </Head> 
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

    </Layout>
  );
}

