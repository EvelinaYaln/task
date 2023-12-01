import { FC } from 'react';
import styles from './Header.module.scss';

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__caption}>CAT</h1>
      <h3 className={styles.header__subcaption}>currencies academic terms</h3>
    </header>
  );
};
