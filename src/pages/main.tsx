import { FC, useState } from 'react';
import { InputSelect } from '../shared/ui/inputSelect/InputSelect';
import img from '../shared/ui/img/kitten.png';
import styles from './main.module.scss';
const Main: FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
  };
  const OPTIONS = [
    { value: '1', label: 'Yes' },
    { value: '2', label: 'No' },
  ] as const;
  return (
    <div className={styles.main__container}>
      <div className={styles.main}>
        <div className={styles.select__container}>
          <div className={styles.text__container}>
            <h1 className={styles.caption}>CAT</h1>
            <h3 className={styles.subcaption}>currencies academic terms</h3>
          </div>
          <div className={styles.input__container}>
            <InputSelect options={OPTIONS} value={selectedOption} onChange={handleOptionChange} />
          </div>
        </div>
        <div className={styles.img__container}>
          <img src={img} alt='Изображение кота'></img>
        </div>
      </div>
      <div className={styles.block__down}>
        <h2 className={styles.text}>Russian Ruble</h2>
      </div>
    </div>
  );
};

export default Main;
