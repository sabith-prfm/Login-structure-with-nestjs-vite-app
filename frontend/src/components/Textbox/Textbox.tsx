import React from 'react';
import styles from './Textbox.module.css';
import { ITextbox } from '../../Types/components/textboxTypes';

const Textbox: React.FC<ITextbox> = ({type, placeholder, onChange, value,showError,errorMessage}) => {
  return (
    <div className={styles.textBoxContainer}>
        <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
        {showError && (<div className={styles.errorMessage}>{errorMessage}</div>)}
    </div>
  );
};

export default Textbox;