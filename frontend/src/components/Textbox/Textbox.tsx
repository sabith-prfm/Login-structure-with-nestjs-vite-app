import React, { useState } from 'react';
import styles from './Textbox.module.css';
import { ITextbox } from '../../Types/components/textboxTypes';

const Textbox: React.FC<ITextbox> = ({ type, placeholder, onChange, value, showError, errorMessage }) => {
  const [showPswd, setShowPswd] = useState<boolean>(false)

  return (
    <div className={styles.textBoxContainer}>
      <input type={showPswd ? "text" : type} placeholder={placeholder} value={value} onChange={onChange} />
      {showError && (<div className={styles.errorMessage}>{errorMessage}</div>)}
      {type === "password" && <label className={styles.pswdShowBtn} onClick={() => setShowPswd(!showPswd)}>{showPswd ? 'hide' : 'show'}</label>}
    </div>
  );
};

export default Textbox;