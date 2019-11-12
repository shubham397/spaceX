import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';

const Card = (props) => {
    const { children } = props;
    return (
        <div className={styles.card}>
            {children}
        </div>
    );
}

Card.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
    ]),
}

export default Card;
