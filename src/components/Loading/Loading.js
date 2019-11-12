import React from 'react';
import styles from './Loading.module.css';
import loadingImage from './loadingImage.svg';

const Loading = () => {
    return (
        <div className={styles.loading}>
            <img src={loadingImage} alt="Loading!" />
        </div>
    );
}

export default Loading;
