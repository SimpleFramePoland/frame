import { getAllCategories, getCategoryBySlug } from 'lib/categories';
import { getPostsByCategoryId } from 'lib/posts';
import usePageMetadata from 'hooks/use-page-metadata';
import React from 'react';
import TemplateArchive from 'templates/archive';
import Title from 'components/Title';

import Container from 'components/Container';


export default function Category({ categories, category, posts,page }) {
  const { name, description, slug } = category;

  const { metadata } = usePageMetadata({
    metadata: {
      ...category,
      description: description || category.og?.description || `Read ${posts.length} posts from ${name}`,
    },
  });

  return (
  <>
 
   <Container>
 
       <h1 className="text-3xl font-bold mb-6 ">{name}</h1>
             {description && <p className="text-xl mb-6">{description}</p>}
         
             </Container>     
             
  <TemplateArchive categories={categories} title={name} Title={<Title title={name} />} posts={posts} slug={slug} metadata={metadata} />; 
  
  </>)
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
  const { categories } = await getAllCategories();

  const paths = categories.map((category) => {
    const { slug } = category;
    return {
      params: {
        slug,
      },
    };
  });

  return {
    paths:paths,
    fallback: 'blocking',
  };
}