import { FC } from 'react';
import img from '../../shared/ui/img/kitten.png';
import styles from './CatImg.module.scss';

export const CatImg: FC = () => {
  return (
    <div className={styles.img__container}>
      <img src={img} alt='Изображение кота'></img>
    </div>
  );
};
