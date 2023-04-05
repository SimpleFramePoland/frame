import { Helmet } from 'react-helmet';

import { WebpageJsonLd } from 'lib/json-ld';
import { helmetSettingsFromMetadata } from 'lib/site';
import useSite from 'hooks/use-site';

import Layout from 'components/Layout';
import Link from 'next/link';
import { categoryPathBySlug } from 'lib/categories';

import Carousel from 'components/komponenty/Carousel';
import PostCard from 'components/PostCard';
import Pagination from 'components/Pagination';
import Container from 'components/Container';
import React from 'react';

const DEFAULT_POST_OPTIONS = {};


export default function TemplateArchive({
  categories,
  title = 'Archive',
  posts,
  postOptions = DEFAULT_POST_OPTIONS,
  slug,
  metadata,
  description,
  pagination,

  
}) {
  const { metadata: siteMetadata = {} } = useSite();

  if (process.env.WORDPRESS_PLUGIN_SEO !== true) {
    metadata.title = `${title} - ${siteMetadata.title}`;
    metadata.og.title = metadata.title;
    metadata.twitter.title = metadata.title;
  }

  const helmetSettings = helmetSettingsFromMetadata(metadata);

  return (
    <Layout>
      <Helmet {...helmetSettings} />

      <WebpageJsonLd title={title} description={metadata.description} siteTitle={siteMetadata.title} slug={slug} />
<Carousel/>
      <Container>

      <div className=' mt-24 '>
  {categories && categories.length > 0 ? (
  
    <ul className='space-x-5 overflow-x-scroll inline py-2 '>
      {categories.map((category) => (
        <li className=" inline mx-5  "key={category.slug}>
          <Link  href={categoryPathBySlug(category.slug)}>
          <a className='text-black'>{category.name}</a>
          </Link>
        </li>
      ))}
    </ul>
 
  ) : (
    <p></p>
  )}
  </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mx-auto mt-12">
                {posts.map((post) => {
                  return (
                    <li key={post.slug}>
                      <PostCard post={post} options={postOptions} />
                    </li>
                  );
                })}
              </ul>
             
              {pagination && (
                <Pagination
                  currentPage={pagination?.currentPage}
                  pagesCount={pagination?.pagesCount}
                  basePath={pagination?.basePath}
                />
              )}
          
              </Container>
    </Layout>
  );
}
export async function getStaticProps() {
  const { posts } = await getPaginatedPosts({
    queryIncludes: 'archive',
  });
  const { categories } = await getAllCategories();
  return {
    props: {
      posts,
      categories,
    },
  };
}