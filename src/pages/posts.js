import usePageMetadata from 'hooks/use-page-metadata';
import { getAllCategories, categoryPathBySlug } from 'lib/categories';
import { getPaginatedPosts } from 'lib/posts';

import TemplateArchive from 'templates/archive';

export default function Posts({ posts, pagination,categories }) {
  const title = 'All Posts';
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
    queryIncludes: 'archive',
  });
  const { categories } = await getAllCategories();
  return {
    props: {
      categories,
      posts,
      pagination: {
        ...pagination,
        basePath: '/posts',
      },
    },
  };
}

//bymarcin