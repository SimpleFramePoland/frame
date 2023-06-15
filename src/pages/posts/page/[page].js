import { getPaginatedPosts } from 'lib/posts';
import usePageMetadata from 'hooks/use-page-metadata';
import React from 'react';
import TemplateArchive from 'templates/archive';

import { getAllCategories} from 'lib/categories';
export default function Posts({ posts, pagination,categories }) {
  const title = `Nasze wpisy`;
  const slug = 'posts';

  const { metadata } = usePageMetadata({
    metadata: {
      title,
      description: `Page ${pagination.currentPage}`,
    },
  });

  return (

  <TemplateArchive title={title} posts={posts} slug={slug} pagination={pagination} metadata={metadata} categories={categories} />  
 )

}

export async function getStaticProps({ params = {} } = {}) {
  const { posts, pagination } = await getPaginatedPosts({
    currentPage: params?.page,
    queryIncludes: 'archive',
  });
  const { categories } = await getAllCategories();
  if (!pagination.currentPage) {
    return {
      props: {},
      notFound: true,
    };
  }

  return {
    props: {
      posts,
      categories,
      pagination: {
        ...pagination,
        basePath: '/posts',
      },
    },
  };
}

export async function getStaticPaths() {
 

  return {
    paths: [],
    fallback: 'blocking',
  };
  
}