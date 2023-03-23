import Link from 'next/link';

import { postPathBySlug, sanitizeExcerpt } from 'lib/posts';
import React from 'react';
import Metadata from 'components/Metadata';
import FeaturedImage from 'components/FeaturedImage';
import { FaMapPin } from 'react-icons/fa';
import styles from './PostCard.module.scss';


const PostCard = ({ post, options = {} }) => {
  const { title, excerpt, slug, date, featuredImage, categories, isSticky = false } = post;
  const { excludeMetadata = [] } = options;

  const metadata = {};

  if (!excludeMetadata.includes('image')) {
    metadata.featuredImage = featuredImage;
  }

  if (!excludeMetadata.includes('date')) {
    metadata.date = date;
  }

  if (!excludeMetadata.includes('categories')) {
    metadata.categories = categories;
  }

  let postCardStyle = styles.postCard;

  if (isSticky) {
    postCardStyle = `${postCardStyle} ${styles.postCardSticky}`;
  }

  return (
    <div className={postCardStyle}>
  
      {isSticky && <FaMapPin aria-label="Sticky Post" />}
      <div className='flex flex-row'>
        <div className='basis-2/4 '>
      <FeaturedImage
            {...featuredImage}
            src={featuredImage.sourceUrl}
            dangerouslySetInnerHTML={featuredImage.caption}
            className="rounded-lg"
          />
          </div>
          <div>     
      <Link href={postPathBySlug(slug) } >
   
      
         
        <h3
          className={styles.postCardTitle}
          dangerouslySetInnerHTML={{
            __html: title,
          }}
        />

      </Link>
      
      <Metadata className={styles.postCardMetadata} {...metadata} />
      {excerpt && (
        <div
          className={styles.postCardContent}
          dangerouslySetInnerHTML={{
            __html: sanitizeExcerpt(excerpt),
          }}
        />
      )}
      </div>
    </div>
    </div>
  );
};

export default PostCard;
