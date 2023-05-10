import { useEffect } from 'react';
import { useRouter } from 'next/router';
import React from 'react';
import Layout from 'components/Layout';
import Hero from 'components/komponenty/hero';
import Faq from 'components/komponenty/Faq'
import { Testimonials } from 'components/komponenty/testimonials';
import Feature1 from 'components/komponenty/feature1';
import Cta1 from 'components/komponenty/cta1'

import { getPageByUri } from 'lib/pages';

export default function Home({ page }) {
  const title = 'Producent filmowy - Simple Frame';
  const description = 'Tworzymy Filmy, Animacje i reklamy';
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      // This will force a full re-render of the page
      window.location.reload();
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  return (


    <Layout>
     <script  src="/js/jquery.js" />
        
      <script  src='/js/fancybox.js' id='modula-fancybox-js' />
      <link rel='stylesheet' id='modula-video-css-css' href='/css/modula-video.css' type='text/css' media='all' />
      <link rel='stylesheet' id='modula-css' href='/css/modula-css.css' type='text/css' media='all' />
      <link rel='stylesheet' id='modula-pro-effects-css' href='/css/modula-pro.css' type='text/css' media='all' />
      <script src='/js/fancybox-modula-video.js' id='modula-fancybox-video-js' />
      <script  src='/js/modula-wf.js' id='modula-wf-js' />
      <script  src='/js/modula-pro.js' id='modula-pro-js' />
    

        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
    




      <Hero />
      <div className='pt-10 bg-black'>
        <div


          dangerouslySetInnerHTML={{ __html: page.podstrony.shortcodeGrid }}
        ></div>
      </div>


      <Feature1 />

      <Testimonials />
      <Faq />
      <Cta1 />
    </Layout>
  );
}

export async function getStaticProps({ params = {} } = {}) {
  const { slugParent, slugChild } = params;

  // We can use the URI to look up our page and subsequently its ID, so
  // we can first contruct our URI from the page params

  let pageUri = `/`;

  // We only want to apply deeper paths to the URI if we actually have
  // existing children

  if (Array.isArray(slugChild) && slugChild.length > 0) {
    pageUri = `${pageUri}${slugChild.join('/')}/`;
  }

  const { page } = await getPageByUri(pageUri);

  if (!page) {
    return {
      props: {},
      notFound: true,
    };
  }

  // In order to show the proper breadcrumbs, we need to find the entire
  // tree of pages. Rather than querying every segment, the query should
  // be cached for all pages, so we can grab that and use it to create
  // our trail


  return {
    props: {
      page,

    },
  };
}

