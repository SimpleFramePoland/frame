
import { Helmet } from 'react-helmet';
import { getPostBySlug, } from 'lib/posts';
import { ArticleJsonLd } from 'lib/json-ld';
import { helmetSettingsFromMetadata } from 'lib/site';
import useSite from 'hooks/use-site';
import usePageMetadata from 'hooks/use-page-metadata';
import React from 'react';
import Layout from 'components/Layout';
import Header from 'components/Header';
import Metadata from 'components/Metadata';

export default function Post({ post, socialImage, }) {
  const {
    title,
    description,
    content,
    date,
    categories,
    featuredImage,
    isSticky = false,
  } = post;

  const { metadata: siteMetadata = {}, homepage } = useSite();

  if (!post.og) {
    post.og = {};
  }

  post.og.imageUrl = `${homepage}${socialImage}`;
  post.og.imageSecureUrl = post.og.imageUrl;
  post.og.imageWidth = 1000;
  post.og.imageHeight = 1000;


  const { metadata } = usePageMetadata({
    metadata: {
      ...post,
      title: title,
      description: description || post.og?.description || `Read more about ${title}`,
    },
  });

  if (process.env.WORDPRESS_PLUGIN_SEO !== true) {
    metadata.title = `${title} - ${siteMetadata.title}`;
    metadata.og.title = metadata.title;
    metadata.twitter.title = metadata.title;
  }

  const metadataOptions = {
    compactCategories: false,
  };

  const helmetSettings = helmetSettingsFromMetadata(metadata);

  return (
    <Layout>
      <Helmet {...helmetSettings} />
      <ArticleJsonLd post={post} siteTitle={siteMetadata.title} />
      <Header >
        <div className="mx-auto mt-[120px] mb-12">
          <div className="relative isolate overflow-hidden  bg-black shadow-2xl rounded-3xl sm:px-16  lg:flex lg:gap-x-20 lg:px-24 ">
            <svg
              viewBox="0 0 1024 1024"
              className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2"
              aria-hidden="true"
            >
              <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor={"#19b5fe"} />
                  <stop offset={1} stopColor="#19b5fe" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-12 lg:text-left align-middle mt-10">
              <h1
                className='text-white banerek '
                dangerouslySetInnerHTML={{
                  __html: title,
                }}
              />
              <Metadata
                className="text-white "
                date={date}
                categories={categories}
                options={metadataOptions}
                isSticky={isSticky}
              />
                 <script src="/js/jquery.js" />
      <script  src='/js/fancybox.js' id='modula-fancybox-js' />
      <link rel='stylesheet' id='modula-video-css-css' href='/css/modula-video.css' type='text/css' media='all' />
      <link rel='stylesheet' id='modula-css' href='/css/modula-css.css' type='text/css' media='all' />
      <link rel='stylesheet' id='modula-pro-effects-css' href='/css/modula-pro.css' type='text/css' media='all' />
      <script  src='/js/fancybox-modula-video.js' id='modula-fancybox-video-js' />
      <script  src='/js/modula-wf.js' id='modula-wf-js' />
      <script  src='/js/modula-pro.js' id='modula-pro-js' />
    
            </div>
            <div className=' max-w-md mx-auto text-center mlg:flex-auto justify-center lg:py-12 justify-self-center align-center flex items-center   ' >
              {featuredImage && (
                <img
                  {...featuredImage}
                  src={featuredImage.sourceUrl}
                  dangerouslySetInnerHTML={featuredImage.caption}
                  className="  flex items-center justify-center object-cover max-w-full h-[400px] w-[400px] rounded-xl  "
                />
              )}
            </div>
          </div>
        </div>
      </Header>
     
      <div
        className="prose max-w-screen-lg mx-auto px-7 sm:px-10 text-xl"
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
       <div
            className='mt-10 mb-10  '
            dangerouslySetInnerHTML={{ __html: post.wpis?.modulapost}}
          ></div>
    </Layout>
  );
}
export async function getStaticProps({ params = {} } = {}) {
  const { post } = await getPostBySlug(params?.slug);
  if (!post) {
    return {
      props: {},
      notFound: true,
      queryIncludes: 'all',
    };
  }
  const props = {
    post,
    socialImage: `${process.env.OG_IMAGE_DIRECTORY}/${params?.slug}.png`,
  };
  return {
    props,
    revalidate:3600,
  };
}
export async function getStaticPaths() {
 
  return {
    paths: [],
    fallback: 'blocking',
  };
}