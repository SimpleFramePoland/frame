import useSite from 'hooks/use-site';
import React from 'react';
import Layout from 'components/Layout';
import Header from 'components/Header';
import Section from 'components/Section';
import Container from 'components/Container';
import Hero from 'components/komponenty/hero';

export default function Home() {
  const { metadata = {} } = useSite();
  const { title, description } = metadata;

  return (
    <Layout>

      

      
    
        <Hero />
        
    </Layout>
  );
}


