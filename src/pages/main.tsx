import { FC, useState } from 'react';
import { InputSelect } from '../shared/ui/inputSelect/InputSelect';
import { Loader } from '../shared/ui/Loader/Loader';
import { useGetCoinsQuery } from '../shared/api/coinApi';
import img from '../shared/ui/img/kitten.png';
import styles from './main.module.scss';

const Main: FC = () => {
  const { data, isLoading, isError } = useGetCoinsQuery();
  const currencies = data ?? [];

  const [selectedOption, setSelectedOption] = useState<string>('United Arab Emirates Dirham');
  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
  };

  if (isError) {
    return 'Something went wrong. Try again later';
  }
  if (isLoading) {
    return <Loader />;
  }
  if (currencies.length < 1)
    return <div>There are no results found. Please try another search.</div>;

  return (
    <div className={styles.main__container}>
      <div className={styles.main}>
        <div className={styles.select__container}>
          <div className={styles.text__container}>
            <h1 className={styles.caption}>CAT</h1>
            <h3 className={styles.subcaption}>currencies academic terms</h3>
          </div>
          <div className={styles.input__container}>
            <InputSelect
              options={currencies}
              value={selectedOption}
              onChange={handleOptionChange}
            />
          </div>
        </div>
        <div className={styles.img__container}>
          <img src={img} alt='Изображение кота'></img>
        </div>
      </div>
      <div className={styles.block__down}>
        <h2 className={styles.text}>{selectedOption}</h2>
      </div>
    </div>
  );
};

export default Main;
