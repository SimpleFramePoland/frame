import { getCategoryBySlug } from 'lib/categories';
import { getPostsByCategoryId } from 'lib/posts';
import usePageMetadata from 'hooks/use-page-metadata';
import { getAllCategories} from 'lib/categories';
import TemplateArchive from 'templates/archive';
import Title from 'components/Title';
import { getPaginatedPosts } from 'lib/posts';
import React from 'react';
export default function Category({ category, posts,categories }) {
  const { name, description, slug } = category;

  const { metadata } = usePageMetadata({
    metadata: {
      ...category,
      description: description || category.og?.description || `Read ${posts.length} posts from ${name}`,
    },
  });

  return <TemplateArchive categories={categories} title={name} Title={<Title title={name} />} posts={posts} slug={slug} metadata={metadata} description={description} />;
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
      category,
      categories,
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
    paths: paths,
    fallback: 'blocking',
  };
}