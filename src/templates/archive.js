import { Helmet } from 'react-helmet';
import { postPathBySlug } from 'lib/posts';
import { WebpageJsonLd } from 'lib/json-ld';
import { helmetSettingsFromMetadata } from 'lib/site';
import useSite from 'hooks/use-site';
import { useEffect, useRef, useState, useCallback } from 'react';
import Layout from 'components/Layout';
import Link from 'next/link';
import { categoryPathBySlug } from 'lib/categories';
import { FaSearch } from 'react-icons/fa';


import useSearch, { SEARCH_STATE_LOADED } from 'hooks/use-search';
import Carousel from 'components/komponenty/Carousel';
import PostCard from 'components/PostCard';
import Pagination from 'components/Pagination';
import Container from 'components/Container';
import React from 'react';
import styles from 'components/Nav/Nav.module.scss';
const DEFAULT_POST_OPTIONS = {};
const SEARCH_VISIBLE = 'visible';
const SEARCH_HIDDEN = 'hidden';


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
  const { query, results, search, clearSearch, state } = useSearch({
    maxResults: 5,
  });
  const [searchVisibility, setSearchVisibility] = useState(SEARCH_HIDDEN);
  const searchIsLoaded = state === SEARCH_STATE_LOADED;
  const formRef = useRef();

  // When the search visibility changes, we want to add an event listener that allows us to
  // detect when someone clicks outside of the search box, allowing us to close the results
  // when focus is drawn away from search

  useEffect(() => {
    // If we don't have a query, don't need to bother adding an event listener
    // but run the cleanup in case the previous state instance exists

    if (searchVisibility === SEARCH_HIDDEN) {
      removeDocumentOnClick();
      return;
    }

    addDocumentOnClick();
    addResultsRoving();

    // When the search box opens up, additionall find the search input and focus
    // on the element so someone can start typing right away

    const searchInput = Array.from(formRef.current.elements).find((input) => input.type === 'search');

    searchInput.focus();

    return () => {
      removeResultsRoving();
      removeDocumentOnClick();
    };
 
  }, [searchVisibility]);

  /**
   * addDocumentOnClick
   */

  function addDocumentOnClick() {
    document.body.addEventListener('click', handleOnDocumentClick, true);
  }

  /**
   * removeDocumentOnClick
   */

  function removeDocumentOnClick() {
    document.body.removeEventListener('click', handleOnDocumentClick, true);
  }

  /**
   * handleOnDocumentClick
   */

  function handleOnDocumentClick(e) {
    if (!e.composedPath().includes(formRef.current)) {
      setSearchVisibility(SEARCH_HIDDEN);
      clearSearch();
    }
  }

  /**
   * handleOnSearch
   */

  function handleOnSearch({ currentTarget }) {
    search({
      query: currentTarget.value,
    });
  }

  /**
   * handleOnToggleSearch
   */

  function handleOnToggleSearch() {
    setSearchVisibility(SEARCH_VISIBLE);
  }

  /**
   * addResultsRoving
   */

  function addResultsRoving() {
    document.body.addEventListener('keydown', handleResultsRoving);
  }

  /**
   * removeResultsRoving
   */

  function removeResultsRoving() {
    document.body.removeEventListener('keydown', handleResultsRoving);
  }

  /**
   * handleResultsRoving
   */

  function handleResultsRoving(e) {
    const focusElement = document.activeElement;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (focusElement.nodeName === 'INPUT' && focusElement.nextSibling.children[0].nodeName !== 'P') {
        focusElement.nextSibling.children[0].firstChild.firstChild.focus();
      } else if (focusElement.parentElement.nextSibling) {
        focusElement.parentElement.nextSibling.firstChild.focus();
      } else {
        focusElement.parentElement.parentElement.firstChild.firstChild.focus();
      }
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (focusElement.nodeName === 'A' && focusElement.parentElement.previousSibling) {
        focusElement.parentElement.previousSibling.firstChild.focus();
      } else {
        focusElement.parentElement.parentElement.lastChild.firstChild.focus();
      }
    }
  }

  /**
   * escFunction
   */

  // pressing esc while search is focused will close it

  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      clearSearch();
      setSearchVisibility(SEARCH_HIDDEN);
    }
    
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);

    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
    
  }, []);
  return (
    <Layout>
      <Helmet {...helmetSettings} />

      <WebpageJsonLd title={title} description={metadata.description} siteTitle={siteMetadata.title} slug={slug} />
<Carousel/>
      <Container>
      <div className="mt-12">
         
            <form ref={formRef} action="/search" data-search-is-active={!!query}>
              <input
                type="search"
                name="q"
                value={query || ''}
                onChange={handleOnSearch}
                autoComplete="off"
                placeholder="Szukaj wpisów..."
                required
              />
              <div className={styles.navSearchResults}>
                {results.length > 0 && (
                  <ul>
                    {results.map(({ slug, title }, index) => {
                      return (
                        <li key={slug}>
                          <Link tabIndex={index} href={postPathBySlug(slug)}>
                            {title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
                {results.length === 0 && (
                  <p>
                    Sorry, not finding anything for <strong>{query}</strong>
                  </p>
                )}
              </div>
            </form>
         
        </div>
      <h1 className='py-12 text-3xl'>Blog Simple Frame</h1>

    <p>
 Każda animacja czy <a href="https://simpleframe.pl/produkcja-filmowa/">film</a> zarówno produktowy, wizerunkowy, korporacyjny czy reklama telewizyjna to wieloetapowy projekt, praca i zaangażowanie wielu osób, których nie widzicie, bo stoją za kamerą, siedzą za produkcyjnym biurkiem, za monitorami w montażowni czy niemal niewidocznie dbają o bezpieczeństwo planu. Nie widzicie ich, lecz dzięki każdej z tych osób możecie oglądać reklamy w telewizji, a firmy mogą promować się w mediach.

 <br/><br/>Nasz BLOG opisuje projekty filmowe i animacje, niektóre z nich pewnie dobrze znacie. Pokażemy Wam z kim współpracujemy, czym zajęliśmy się w konkretnym projekcie i przede wszystkim zdradzimy kulisy pracy przy ich produkcji. Dowiecie się jak rodzi się scenariusz, jak przygotowujemy się do pracy na planie, jak wyglądają plany zdjęciowe.

<br/><br/>Przekonacie się, że to, co widzicie na ekranie to mała część tego, co tak naprawdę dzieje się podczas kręcenia filmu czy tworzenia animacji. Ile sprzętu, ile metrów kabli i ilu godzin pracy z odpowiednimi programami potrzebujemy żeby zrobić dobry materiał. Zarówno kino jak i każda, nawet najmniejsza <a href="https://prezentacje-multimedialne.com.pl/index.php/prezentacje-interaktywne/">produkcja</a> to magia.

<br/><br/>Oko kamery widzi zupełnie inaczej niż ludzkie. A potencjał i możliwości animacji są niewyobrażalne.

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