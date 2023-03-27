import usePageMetadata from 'hooks/use-page-metadata';

import { getAllCategories } from 'lib/categories';

import { getPaginatedPosts } from 'lib/posts';
import React from 'react';
import TemplateArchive from 'templates/archive';

export default function Posts({ posts, pagination, categories }) {
  const title = 'Blog';
  const slug = 'posts';

  const { metadata } = usePageMetadata({
    metadata: {
      title,
      description: false,
    },
  });

  return <TemplateArchive categories={categories} title={title} posts={posts} slug={slug} pagination={pagination} metadata={metadata} />;
}

export async function getStaticProps() {
  const { posts, pagination } = await getPaginatedPosts({
    queryIncludes: 'all',
  });
  const { categories } = await getAllCategories();
  return {
    props: {
      posts,
      pagination: {
        ...pagination,
        basePath: '/posts',
        categories,
      },
      categories,
    },
  };
}