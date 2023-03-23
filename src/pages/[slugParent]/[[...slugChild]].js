import Link from 'next/link';
import { Helmet } from 'react-helmet';

import { getPageByUri, getAllPages, getBreadcrumbsByUri } from 'lib/pages';
import { WebpageJsonLd } from 'lib/json-ld';
import { helmetSettingsFromMetadata } from 'lib/site';
import useSite from 'hooks/use-site';
import usePageMetadata from 'hooks/use-page-metadata';
import React from 'react';
import Layout from 'components/Layout';
import Header from 'components/Header';
import Content from 'components/Content';
import Section from 'components/Section';
import Container from 'components/Container';
import Carousel from 'components/komponenty/Carousel';


import styles from 'styles/pages/Page.module.scss';

export default function Page({ page, breadcrumbs }) {
  const { title, metaTitle, description, slug, content, featuredImage, children } = page;

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
      
      <script async src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script async src='https://simpleframe.pl/wp-content/plugins/modula-best-grid-gallery/assets/js/front/fancybox.js?ver=2.7.3' id='modula-fancybox-js'></script>

      <link rel='stylesheet' id='modula-video-css-css' href='https://simpleframe.pl/wp-content/plugins/modula-video/assets/css/modula-video-css.css?ver=6.1.1' type='text/css' media='all' />
      <link rel='stylesheet' id='modula-css' href='https://simpleframe.pl/wp-content/plugins/modula-best-grid-gallery/assets/css/front.css?ver=2.7.3' type='text/css' media='all' />
      <link rel='stylesheet' id='modula-pro-effects-css' href='https://simpleframe.pl/wp-content/plugins/modula/assets/css/effects.min.css' type='text/css' media='all' />
      <script async src='https://simpleframe.pl/wp-content/plugins/modula-video/assets/js/fancybox-modula-video.js?ver=6.1.1' id='modula-fancybox-video-js'></script>
      <script async src='https://simpleframe.pl/wp-content/plugins/modula-best-grid-gallery/assets/js/front/fancybox.js?ver=2.7.3' id='modula-fancybox-js'></script>
      <script async src='https://simpleframe.pl/wp-content/plugins/modula-best-grid-gallery/assets/js/modula-wf.js?ver=2.7.3' id='modula-wf-js'></script>
      <script async src='https://simpleframe.pl/wp-content/plugins/modula/assets/js/modula-pro.js?ver=2.6.1' id='modula-pro-js'></script>

    

      <Helmet {...helmetSettings} />
      <WebpageJsonLd
        title={metadata.title}
        description={metadata.description}
        siteTitle={siteMetadata.title}
        slug={slug}
      />

      <Header>

      <Carousel/>
      </Header>

      <Content>
        <Section>
          <Container>
       
            <div

              className={styles.tekstiusz}
              dangerouslySetInnerHTML={{ __html: page.podstrony?.pierwszaCzescTekstu }}
            ></div>
 

            <div

              className='text-base text-grey-darker mt-10 mb-10  '
              dangerouslySetInnerHTML={{ __html: page.podstrony?.shortcodeGrid }}
            ></div>

            <div
               className={styles.tekstiusz}
              dangerouslySetInnerHTML={{ __html: page.podstrony?.drugaCzescTekstu }}
            ></div>
            <div
              className='text-base text-grey-darker mt-10 mb-10 '
              dangerouslySetInnerHTML={{ __html: page.podstrony?.shortcodeGridDrugi }}
            ></div>
          </Container>
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
  const { pages } = await getAllPages({
    queryIncludes: 'index',
  });

  // Take all the pages and create path params. The slugParent will always be
  // the top level parent page, where the slugChild will be an array of the
  // remaining segments to make up the path or URI

  // We also filter out the `/` homepage as it will conflict with index.js if
  // as they have the same path, which will fail the build

  const paths = pages
    .filter(({ uri }) => typeof uri === 'string' && uri !== '/')
    .map(({ uri }) => {
      const segments = uri.split('/').filter((seg) => seg !== '');

      return {
        params: {
          slugParent: segments.shift(),
          slugChild: segments,
        },
      };
    });

  return {
    paths,
    fallback: 'blocking',
  };
}
