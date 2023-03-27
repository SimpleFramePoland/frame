import { getCategoryBySlug } from 'lib/categories';
import { getPostsByCategoryId } from 'lib/posts';
import usePageMetadata from 'hooks/use-page-metadata';
import React from 'react';
import TemplateArchive from 'templates/archive';
import Title from 'components/Title';
import { getAllCategories } from 'lib/categories';

export default function Category({ categories, category, posts }) {
  const { name, description, slug } = category;

  const { metadata } = usePageMetadata({
    metadata: {
      ...category,
      description: description || category.og?.description || `Read ${posts.length} posts from ${name}`,
    },
  });

  return <TemplateArchive categories={categories} title={name} Title={<Title title={name} />} posts={posts} slug={slug} metadata={metadata} />;
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

  // we're considering them non-critical pages

  // To enable pre-rendering of Category pages:

  // 1. Add import to the top of the file
  //
  // import { getAllCategories, getCategoryBySlug } from 'lib/categories';

  // 2. Uncomment the below
  //
  // const { categories } = await getAllCategories();

  // const paths = categories.map((category) => {
  //   const { slug } = category;
  //   return {
  //     params: {
  //       slug,
  //     },
  //   };
  // });

  // 3. Update `paths` in the return statement below to reference the `paths` constant above

  return {
    paths: [],
    fallback: 'blocking',
  };
}
