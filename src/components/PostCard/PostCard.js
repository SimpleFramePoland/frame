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
    <div >
       <div className="">
      <div className="bg-white mx-auto shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
     
      <a href={postPathBySlug(slug)} >
      <FeaturedImage
        {...featuredImage}
        src={featuredImage.sourceUrl}
        dangerouslySetInnerHTML={featuredImage.caption}
  
      /> </a>
        
        
        <div className="p-5">
          
            <div className=" font-semibold text-2xl cursor-pointer mb-2"> <a href={postPathBySlug(slug)} >
        <div
          className=""
          dangerouslySetInnerHTML={{
            __html: title,
          }}
        />

      </a></div>
          
       <Metadata className={styles.postCardMetadata} {...metadata} />
      {excerpt && (
        <div
          
          dangerouslySetInnerHTML={{
            __html: sanitizeExcerpt(excerpt),
          }}
        />
      )}

          
        </div>
      </div>
      
    </div>
      
     
      
    </div>
  );
};

export default PostCard;
