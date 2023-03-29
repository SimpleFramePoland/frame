import useSite from 'hooks/use-site';
import React from 'react';
import Layout from 'components/Layout';
import Kontaktiusz from 'components/komponenty/Kontaktiusz'
import Container from 'components/Container';
import Carousel from 'components/komponenty/Carousel'
export default function Home() {
  const { metadata = {} } = useSite();
  const { title, description } = metadata;

  return (
    <Layout>
      <Carousel/>
      <Container>
      <Kontaktiusz/>
      </Container>
    </Layout>
  );
}

