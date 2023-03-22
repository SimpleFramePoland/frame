import useSite from 'hooks/use-site';
import React from 'react';
import Layout from 'components/Layout';
import Hero from 'components/komponenty/hero';
import Faq from 'components/komponenty/Faq'
export default function Home() {
  const { metadata = {} } = useSite();
  const { title, description } = metadata;

  return (
    <Layout>
      <Hero />
      <Faq/>
    </Layout>
  );
}


