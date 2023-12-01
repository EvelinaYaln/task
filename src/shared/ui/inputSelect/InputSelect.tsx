import { FC, useState } from 'react';
import cn from 'classnames';
import styles from './InputSelect.module.scss';

interface Option {
  name: string;
  id: string;
  minSize?: string;
}

interface InputSelectProps {
  options: readonly Option[];
  value: string;
  onChange?: (value: string) => void;
}

export const InputSelect: FC<InputSelectProps> = ({ options, onChange }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>(options[0]?.name || '');

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
        {options.find(option => option.name === selectedValue)?.id}
        <button className={styles.button__select} onClick={handleToggleOpen} />
      </div>
      {isOpen && (
        <div className={styles.options__list}>
          {options.map((option, i) => (
            <li
              key={i}
              className={cn(styles.list__item, option.name === selectedValue && styles.selected)}
              onClick={() => handleOptionClick(option.name)}
            >
              {option.id}
            </li>
          ))}
        </div>
      )}
    </div>
  );
};
