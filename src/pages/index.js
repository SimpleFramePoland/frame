
import React from 'react';
import Layout from 'components/Layout';
import Hero from 'components/komponenty/hero';
import Faq from 'components/komponenty/Faq'
import { Testimonials } from 'components/komponenty/testimonials';
import Feature1 from 'components/komponenty/feature1';
import Cta1 from 'components/komponenty/cta1'
import Head from 'next/head';


export default function Home({ page }) {
  const title = 'Producent filmowy - Simple Frame';
  const description = 'Tworzymy Filmy, Animacje i reklamy';
  

  return (
    
    <Layout>
      
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
</Head>


        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
  





      <Hero />
      


      <Feature1 />

      <Testimonials />
      <Faq />
      <Cta1 />
    </Layout>
  );
}

