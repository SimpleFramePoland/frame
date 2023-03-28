import { Helmet } from 'react-helmet';

import { WebpageJsonLd } from 'lib/json-ld';
import { helmetSettingsFromMetadata } from 'lib/site';
import useSite from 'hooks/use-site';

import Layout from 'components/Layout';
import Link from 'next/link';
import { categoryPathBySlug } from 'lib/categories';


import PostCard from 'components/PostCard';


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

    

      
    <div className='flex  px-2 mt-[8rem] px-12 justify-center  '>
    <div className='flex-1 flex-none'>
  {categories && categories.length > 0 ? (
    <ul className='border-4 border-babyblue max-w-[13rem] lg:max-w-full rounded-xl'>
      {categories.map((category) => (
        <li key={category.slug}>
          <Link href={categoryPathBySlug(category.slug)}>
           {category.name}
          </Link>
        </li>
      ))}
    </ul>
  ) : (
    <p></p>
  )}
</div>
         <div className='flex-2'>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mx-auto">
                {posts.map((post) => {
                  return (
                    <li key={post.slug}>
                      <PostCard post={post} options={postOptions} />
                    </li>
                  );
                })}
              </ul>
             
          </div>
          </div>
     
    </Layout>
  );
}
export async function getStaticProps() {
  const { posts } = await getPaginatedPosts({
    queryIncludes: 'all',
  });
  const { categories } = await getAllCategories();
  return {
    props: {
      posts,
      categories,
    },
  };
}