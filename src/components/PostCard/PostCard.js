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
       <div className=" mt-11">
      <div className="bg-white mx-auto shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
        
        <FeaturedImage
        {...featuredImage}
        src={featuredImage.sourceUrl}
        dangerouslySetInnerHTML={featuredImage.caption}
        className="rounded-lg"
      />
        
        <div className="p-5">
          
            <div className=" font-semibold text-2xl  mb-2"> <Link href={postPathBySlug(slug)} >
        <div
          className=""
          dangerouslySetInnerHTML={{
            __html: title,
          }}
        />

      </Link></div>
          
          <p className="font-normal text-gray-700 mb-3"><Metadata className={styles.postCardMetadata} {...metadata} />
      {excerpt && (
        <div
          
          dangerouslySetInnerHTML={{
            __html: sanitizeExcerpt(excerpt),
          }}
        />
      )}
</p>
          
        </div>
      </div>
      
    </div>
      
     
      
    </div>
  );
};

export default PostCard;
