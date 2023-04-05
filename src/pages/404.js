import Link from 'next/link';
import { Helmet } from 'react-helmet';

import Layout from 'components/Layout';
import Section from 'components/Section';
import Container from 'components/Container';

import styles from 'styles/pages/Error.module.scss';

export default function Custom404() {
  return (
    <Layout>
      <Helmet>
        <title>404 - Page Not Found</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Section>
        <Container className={styles.center}>
          <h1 className='pt-[12rem]'>Niestety nie ma takiej strony :/ </h1>
          <p className="py-12 text-xl">404</p>
        
          <p>
            <Link href="/">
             Wróć na stronę główną 
            </Link>
          </p>
        </Container>
      </Section>
    </Layout>
  );
}

// Next.js method to ensure a static page gets rendered
export async function getStaticProps() {
  return {
    props: {},
  };
}
