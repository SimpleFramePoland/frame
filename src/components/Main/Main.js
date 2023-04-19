import styles from './Main.module.scss';
import React from 'react';
const Main = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};

export default Main;
