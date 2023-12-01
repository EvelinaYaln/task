import { FC, useState } from 'react';
import { InputSelect } from '../shared/ui/inputSelect/InputSelect';
import { Loader } from '../shared/ui/Loader/Loader';
import { useGetCoinsQuery } from '../shared/api/coinApi';
import { CatImg } from '../widgets/CatImg/CatImg';
import { Footer } from '../widgets/Footer/Footer';
import { Header } from '../widgets/Header/Header';
import styles from './CurrencyPage.module.scss';

export const CurrencyPage: FC = () => {
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
          <Header />
          <div className={styles.input__container}>
            <InputSelect
              options={currencies}
              value={selectedOption}
              onChange={handleOptionChange}
            />
          </div>
        </div>
        <CatImg />
      </div>
      <Footer selectedOption={selectedOption} />
    </div>
  );
};
