import useSite from 'hooks/use-site';
import React from 'react';
import Layout from 'components/Layout';
import Kontaktiusz from 'components/komponenty/Kontaktiusz'

export default function Home() {
  const { metadata = {} } = useSite();
  const { title, description } = metadata;

  return (
    <Layout>
      <Kontaktiusz/>
    </Layout>
  );
}

