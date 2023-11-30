import { FC, useState } from 'react';
import styles from './InputSelect.module.scss';

interface Option {
  value: string;
  label: string;
}

interface InputSelectProps {
  options: readonly Option[];
  value: string;
  onChange?: (value: string) => void;
}

export const InputSelect: FC<InputSelectProps> = ({ options, onChange }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>(options[0]?.value || '');

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (optionValue: string) => {
    if (onChange) {
      setSelectedValue(optionValue);
      onChange(optionValue);
      setIsOpen(false);
    } else {
      setSelectedValue(optionValue);
      setIsOpen(false);
    }
  };

  return (
    <div className={styles.inputSelect__content}>
      <div className={styles.inputSelect__label} onClick={handleToggleOpen}>
        {options.find(option => option.value === selectedValue)?.label}
        <button className={styles.button__select} onClick={handleToggleOpen} />
      </div>
      {isOpen && (
        <div className={styles.options__list}>
          {options.map(option => (
            <li
              key={option.value}
              className={
                option.value === selectedValue
                  ? `${styles.list__item} ${styles.selected}`
                  : styles.list__item
              }
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </li>
          ))}
        </div>
      )}
    </div>
  );
};
