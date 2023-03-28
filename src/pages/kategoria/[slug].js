import { getAllCategories, getCategoryBySlug } from 'lib/categories';
import { getPostsByCategoryId } from 'lib/posts';
import usePageMetadata from 'hooks/use-page-metadata';
import React from 'react';
import TemplateArchive from 'templates/archive';
import Title from 'components/Title';
import Link from 'next/link';
import Container from 'components/Container';
import { categoryPathBySlug } from 'lib/categories';
import PostCard from 'components/PostCard';
import Layout from 'components/Layout';
export default function Category({ categories, category, posts, page }) {
  const { name, description, slug } = category;

  const { metadata } = usePageMetadata({
    metadata: {
      ...category,
      description: description || category.og?.description || `Read ${posts.length} posts from ${name}`,
    },
  });

  return (
    <>
      <Layout>
        <Container>




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
              {description ? (
                <p className="text-xl mb-6">{description}</p>
              ) : (
                <p className="text-xl mb-6"></p>
              )}
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mx-auto">
                {posts.map((post) => {
                  return (
                    <li key={post.slug}>
                      <PostCard post={post} />
                    </li>
                  );
                })}
              </ul>

            </div>
          </div>

        </Container>
      </Layout>
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

  // 3. Update `paths` in the return statement below to reference the `paths` constant above

  return {
    paths: paths,
    fallback: 'blocking',
  };
}