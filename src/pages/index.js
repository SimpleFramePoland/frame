
import React from 'react';
import Layout from 'components/Layout';
import Hero from 'components/komponenty/hero';
import Faq from 'components/komponenty/Faq'
import { Testimonials } from 'components/komponenty/testimonials';
import Feature1 from 'components/komponenty/feature1';
import Cta1 from 'components/komponenty/cta1'
import { Helmet } from 'react-helmet';
import { getPageByUri } from 'lib/pages';
import Script from 'next/script'

export default function Home({page}) {
  const title = 'Simple Frame';
  const description = 'Tworzymy Filmy, Animacje i reklamy';

  return (
    <Layout>
           
           
           <head>

        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" />

       
<script async src='/js/fancybox.js' beforeInteractive id='modula-fancybox-js'/>

<link rel='stylesheet' id='modula-video-css-css' href='https://old.simpleframe.pl/wp-content/plugins/modula-video/assets/css/modula-video-css.css?ver=6.1.1' type='text/css' media='all' />
<link rel='stylesheet' id='modula-css' href='https://old.simpleframe.pl/wp-content/plugins/modula-best-grid-gallery/assets/css/front.css?ver=2.7.3' type='text/css' media='all' />
<link rel='stylesheet' id='modula-pro-effects-css' href='https://old.simpleframe.pl/wp-content/plugins/modula/assets/css/effects.min.css' type='text/css' media='all' />
<script async src='/js/fancybox-modula-video.js' id='modula-fancybox-video-js'/>

<script async src='/js/modula-wf.js' id='modula-wf-js'/>
<script async src='/js/modula-pro.js' id='modula-pro-js'/>
</head>

      <Hero />
      <div className='pt-10 bg-black'>
      <div

       
        dangerouslySetInnerHTML={{ __html: page.podstrony?.shortcodeGrid }}
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

