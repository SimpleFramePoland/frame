import useSite from 'hooks/use-site';
import React from 'react';
import Layout from 'components/Layout';
import Hero from 'components/komponenty/hero';
import Faq from 'components/komponenty/Faq'
import { Testimonials } from 'components/komponenty/testimonials';
import Feature1 from 'components/komponenty/feature1';
import Cta1 from 'components/komponenty/cta1'

export default function Home() {
  const { metadata = {} } = useSite();
  const { title, description } = metadata;

  return (
    <Layout>
      <Hero />
     <Feature1/>
      <Testimonials/>
      <Faq/>
      <Cta1/>
    </Layout>
  );
}


