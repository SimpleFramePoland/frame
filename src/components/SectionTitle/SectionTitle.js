import styles from './SectionTitle.module.scss';
import React from 'react';
const SectionTitle = ({ children }) => {
  return <h2 className={styles.sectionTitle}>{children}</h2>;
};

export default SectionTitle;
