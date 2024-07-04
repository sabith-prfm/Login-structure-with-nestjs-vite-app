import React from 'react';
import styles from './Button.module.css';
import { IButton } from '../../Types/components/ButtonTypes';

const Button: React.FC<IButton> = ({type, buttonLabel, onClick,loading}) => {
  return (
    <div className={styles.buttonContainer}>
        <button type={type} onClick={onClick}>{loading?"Loading...":buttonLabel}</button>
    </div>
  );
};

export default Button;