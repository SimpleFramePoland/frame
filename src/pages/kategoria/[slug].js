import { getAllCategories, getCategoryBySlug } from 'lib/categories';
import { getPostsByCategoryId } from 'lib/posts';
import usePageMetadata from 'hooks/use-page-metadata';
import React from 'react';
import Layout from 'components/Layout';
import PostCard from 'components/PostCard';
import Container from 'components/Container';
import Link from 'next/link';
import { categoryPathBySlug } from 'lib/categories';
import Carousel from 'components/komponenty/Carousel';
import { Helmet } from 'react-helmet';
import { WebpageJsonLd } from 'lib/json-ld';
import { helmetSettingsFromMetadata } from 'lib/site';
import useSite from 'hooks/use-site';
import Head from 'next/head';
export default function Category({ categories, category, posts,page }) {
  const { name, description, slug } = category;
  const { metadata: siteMetadata = {} } = useSite();
  const { metadata } = usePageMetadata({
    metadata: {
      ...category,
      description: description || category.og?.description || `Read ${posts.length} posts from ${name}`,
    },
  });
  if (process.env.WORDPRESS_PLUGIN_SEO !== true) {
    metadata.title = `${title} - ${siteMetadata.title}`;
    metadata.og.title = metadata.title;
    metadata.twitter.title = metadata.title;
  }
  const helmetSettings = helmetSettingsFromMetadata(metadata);

  return (

 <Layout>
     <Helmet {...helmetSettings} />
      <WebpageJsonLd
        title={metadata.title}
        description={metadata.description}
        siteTitle={siteMetadata.title}
        slug={slug}
      />

   <Carousel/>
   <Container>
   
       <h1 className="text-3xl font-bold mb-6 mt-[4rem] ">{name}</h1>
             {description && <p className="text-xl mb-6">{description}</p>}
         
                  



<div className='max-w-screen'>
   
              <ul className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                {posts.map((post) => {
                  return (
                    <li key={post.slug}>
                      <PostCard post={post} />
                    </li>
                  );
                })}
              </ul>
              </div>         
              <div className=' mt-24 '>
  {categories && categories.length > 0 ? (
  
    <ul className='space-x-5 overflow-x-scroll inline py-2 '>
      {categories.map((category) => (
        <li className=" inline mx-5"key={category.slug}>
          <Link href={categoryPathBySlug(category.slug)}>
          <a className='text-black'> {category.name} </a>
          </Link>
        </li>
      ))}
    </ul>
 
  ) : (
    <p></p>
  )}
  </div>
          </Container>  
          </Layout>)
}

export async function getStaticProps({ params = {} } = {}) {
  const { category } = await getCategoryBySlug(params?.slug);


  if (!category) {
    return {
      props: {},
      notFound: true,
    };
  }
  const { categories } = await getAllCategories();
  const { posts } = await getPostsByCategoryId({
    categoryId: category.databaseId,
    queryIncludes: 'archive',
  });

  return {
    props: {
   
      categories,
      category,
      posts,
    },
  };
}
export async function getStaticPaths() {

  
 // const { categories } = await getAllCategories();

 //const paths = categories.map((category) => {
 //  const { slug } = category;
 //return {
 //    params: {
 //    slug,
 //  },
 //  };
//});

 // 3. Update `paths` in the return statement below to reference the `paths` constant above

 return {
   paths: [],
   fallback: 'blocking',
 };
}