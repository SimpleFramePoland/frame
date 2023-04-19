import Link from 'next/link';
import { Helmet } from 'react-helmet';
import { getPageByUri, getAllPages, getBreadcrumbsByUri } from 'lib/pages';
import { WebpageJsonLd } from 'lib/json-ld';
import { helmetSettingsFromMetadata } from 'lib/site';
import useSite from 'hooks/use-site';
import usePageMetadata from 'hooks/use-page-metadata';
import React from 'react';
import Layout from 'components/Layout';
import Script from 'next/script';
import Content from 'components/Content';
import Section from 'components/Section';
import Container from 'components/Container';
import styles from 'styles/pages/Page.module.scss';
import $ from 'jquery';
export default function Page({ page, breadcrumbs }) {
  const { title, metaTitle, description, slug, content, children } = page;

  const { metadata: siteMetadata = {} } = useSite();

  const { metadata } = usePageMetadata({
    metadata: {
      ...page,
      title: metaTitle,
      description: description || page.og?.description || `Read more about ${title}`,
    },
  });

  if (process.env.WORDPRESS_PLUGIN_SEO !== true) {
    metadata.title = `${title} - ${siteMetadata.title}`;
    metadata.og.title = metadata.title;
    metadata.twitter.title = metadata.title;
  }

  const hasChildren = Array.isArray(children) && children.length > 0;
  const hasBreadcrumbs = Array.isArray(breadcrumbs) && breadcrumbs.length > 0;

  const helmetSettings = helmetSettingsFromMetadata(metadata);

  return (
    <Layout>
      <script async src="/js/jquery.js" />
      <script async src='/js/fancybox.js' id='modula-fancybox-js' />
      <link rel='stylesheet' id='modula-video-css-css' href='https://old.simpleframe.pl/wp-content/plugins/modula-video/assets/css/modula-video-css.css?ver=6.1.1' type='text/css' media='all' />
      <link rel='stylesheet' id='modula-css' href='https://old.simpleframe.pl/wp-content/plugins/modula-best-grid-gallery/assets/css/front.css?ver=2.7.3' type='text/css' media='all' />
      <link rel='stylesheet' id='modula-pro-effects-css' href='https://old.simpleframe.pl/wp-content/plugins/modula/assets/css/effects.min.css' type='text/css' media='all' />
      <script async src='/js/fancybox-modula-video.js' id='modula-fancybox-video-js' />
      <script async src='/js/modula-wf.js' id='modula-wf-js' />
      <script async src='/js/modula-pro.js' id='modula-pro-js' />
    

    
      <Helmet {...helmetSettings} />
      <WebpageJsonLd
        title={metadata.title}
        description={metadata.description}
        siteTitle={siteMetadata.title}
        slug={slug}
      />
     
     <div className=" bg-black">
        <video autoPlay loop muted playsInline className="w-screen pt-[5rem]">
          {page.podstrony?.urlVideo
            ? <source src={page.podstrony.urlVideo} type="video/mp4" />
            : <source src="/videopodstrony.mp4" type="video/mp4" />}
        </video>
      </div>
      <Content>
        <Section>
          <Container>
            <div className="text-lg mt-[5rem] mb-5  ">
              <div
                className={styles.content}
                dangerouslySetInnerHTML={{
                  __html: content,
                }}
              />
              <div
                className=" prose max-w-screen-lg w-full  mx-auto"
                dangerouslySetInnerHTML={{ __html: page.podstrony?.pierwszaCzescTekstu }}
              ></div>
            </div>
          </Container>
          <div
            className='mt-10 mb-10  '
            dangerouslySetInnerHTML={{ __html: page.podstrony?.shortcodeGrid }}
          ></div>
          <Container>
            <div className='druga'>
              <div
                className="prose max-w-screen-lg w-full  mx-auto  "
                dangerouslySetInnerHTML={{ __html: page.podstrony?.drugaCzescTekstu }}
              ></div></div>
          </Container>
          <div
            className='mt-10 w-full max-w-none'
            dangerouslySetInnerHTML={{ __html: page.podstrony?.shortcodeGridDrugi }}
          ></div>
        </Section>
          {hasChildren && (
          <Section className={styles.sectionChildren}>
            <Container>
              <aside>
                <p className={styles.childrenHeader}>
                  <strong>{title}</strong>
                </p>
                <ul>
                  {children.map((child) => {
                    return (
                      <li key={child.id}>
                        <Link href={child.uri}>
                          {child.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </aside>
            </Container>
          </Section>
        )}
      </Content>
    </Layout>
  );
}

export async function getStaticProps({ params = {} } = {}) {
  const { slugParent, slugChild } = params;

  // We can use the URI to look up our page and subsequently its ID, so
  // we can first contruct our URI from the page params

  let pageUri = `/${slugParent}/`;

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

  const { pages } = await getAllPages({
    queryIncludes: 'index',
  });

  const breadcrumbs = getBreadcrumbsByUri(pageUri, pages);

  return {
    props: {
      page,
      breadcrumbs,
    },
  };
}

export async function getStaticPaths() {
  // const { pages } = await getAllPages({
  //   queryIncludes: 'index',
  // });

  // // Take all the pages and create path params. The slugParent will always be
  // // the top level parent page, where the slugChild will be an array of the
  // // remaining segments to make up the path or URI

  // // We also filter out the `/` homepage as it will conflict with index.js if
  // // as they have the same path, which will fail the build

  // const paths = pages
  //   .filter(({ uri }) => typeof uri === 'string' && uri !== '/')
  //   .map(({ uri }) => {
  //     const segments = uri.split('/').filter((seg) => seg !== '');

  //     return {
  //       params: {
  //         slugParent: segments.shift(),
  //         slugChild: segments,
  //       },
  //     };
  //   });

  return {
    paths:[
      { params: { slugParent: 'film-reklamowy', slugChild: [] } },
    { params: { slugParent: 'film-korporacyjny', slugChild: [] } },
    { params: { slugParent: 'film-promocyjny', slugChild: [] } },
    { params: { slugParent: 'film-produktowy', slugChild: [] } },
    { params: { slugParent: 'dron-filmowanie-z-powietrza', slugChild: [] } },
    { params: { slugParent: 'postprodukcja', slugChild: [] } },
    { params: { slugParent: 'montaz-filmow', slugChild: [] } },
    { params: { slugParent: 'animacja-3d', slugChild: [] } },
    { params: { slugParent: 'animacja-2d', slugChild: [] } },
    { params: { slugParent: 'animacja-techniczna', slugChild: [] } },
    { params: { slugParent: 'produkcja-animacji', slugChild: [] } },
    { params: { slugParent: 'prezentacje-multimedialne', slugChild: [] } },
    { params: { slugParent: 'billboard-sponsorski', slugChild: [] } },
    { params: { slugParent: 'teledyski', slugChild: [] } },
    { params: { slugParent: 'fotografia', slugChild: [] } },
    { params: { slugParent: 'streaming-video', slugChild: [] } },
    ],
    fallback: 'blocking',
  };
}
