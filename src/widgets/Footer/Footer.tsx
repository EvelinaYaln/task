import { FC } from 'react';
import styles from './Footer.module.scss';

interface IProps {
  selectedOption: string;
}
export const Footer: FC<IProps> = props => {
  const { selectedOption } = props;
  return (
    <footer className={styles.footer}>
      <h2 className={styles.footer__text}>{selectedOption}</h2>
    </footer>
  );
};
