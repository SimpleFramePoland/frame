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
      <h1 className='py-12 text-3xl'>Blog Simple Frame</h1>

    <p>
 Każda animacja czy <a href="https://simpleframe.pl/produkcja-filmowa/">film</a> zarówno produktowy, wizerunkowy, korporacyjny czy reklama telewizyjna to wieloetapowy projekt, praca i zaangażowanie wielu osób, których nie widzicie, bo stoją za kamerą, siedzą za produkcyjnym biurkiem, za monitorami w montażowni czy niemal niewidocznie dbają o bezpieczeństwo planu. Nie widzicie ich, lecz dzięki każdej z tych osób możecie oglądać reklamy w telewizji, a firmy mogą promować się w mediach.

 <br/><br/>Nasz BLOG opisuje projekty filmowe i animacje, niektóre z nich pewnie dobrze znacie. Pokażemy Wam z kim współpracujemy, czym zajęliśmy się w konkretnym projekcie i przede wszystkim zdradzimy kulisy pracy przy ich produkcji. Dowiecie się jak rodzi się scenariusz, jak przygotowujemy się do pracy na planie, jak wyglądają plany zdjęciowe.

<br/><br/>Przekonacie się, że to, co widzicie na ekranie to mała część tego, co tak naprawdę dzieje się podczas kręcenia filmu czy tworzenia animacji. Ile sprzętu, ile metrów kabli i ilu godzin pracy z odpowiednimi programami potrzebujemy żeby zrobić dobry materiał. Zarówno kino jak i każda, nawet najmniejsza <a href="https://prezentacje-multimedialne.com.pl/index.php/prezentacje-interaktywne/">produkcja</a> to magia.

<br/><br/>Oko kamery widzi zupełnie inaczej niż ludzkie. A potencjał i możliwości animacji są niewyobrażalne!

Mamy nadzieję, że zainspirujemy Was do pracy w produkcji oraz, że znajdziecie tu odpowiedzi na pytania dotyczące tajników powstawania <a href="https://simpleframe.pl/produkcja-filmowa/">filmów</a> i animacji.

Zobaczcie jak powstają nasze <a href="https://marketingvideo.com.pl/">produkcje</a>.
</p>
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