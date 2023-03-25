import ClassName from 'models/classname';

import Image from 'components/Image';
import React from 'react';
import styles from './FeaturedImage.module.scss';

const FeaturedImage = ({ className, alt, ...rest }) => {
  const featuredImageClassName = new ClassName(styles.featuredImage);

  featuredImageClassName.addIf(className, className);

  return <Image className={featuredImageClassName} alt={alt} {...rest} />;
};

export default FeaturedImage;
