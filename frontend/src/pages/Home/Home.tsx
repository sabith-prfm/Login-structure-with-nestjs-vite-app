import React from 'react';
import styles from './Home.module.css';
import { clearStorageItem, getStorageItem } from '../../util/Storage';
import { StorageEnums } from '../../Types/enum/StorageEnum';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
    const navigate = useNavigate()
    const { name } = JSON.parse(getStorageItem(StorageEnums.USER_INFO) as string)
    // console.log(JSON.parse(userInfo as string))
    return (
        <div className={styles.homePage}>
            <h1>Hi {name}, </h1>
            <h2>Welcome to the Homepage</h2>
            <Button buttonLabel='Logout' onClick={() => { clearStorageItem(); navigate('/login') }} />
        </div>
    );
};

export default Home;