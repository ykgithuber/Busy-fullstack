// src/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav style={styles.nav}>
            <Link to="/dashboard" style={styles.link}>Dashboard</Link>
            <Link to="/watchlist" style={styles.link}>Watchlist</Link>
        </nav>
    );
};

const styles = {
    nav: {
        display: 'flex',
        justifyContent: 'center',
        padding: '10px',
        backgroundColor: '#f9f9f9',
    },
    link: {
        margin: '0 10px',
        textDecoration: 'none',
        color: 'black',
        fontWeight: 'bold',
    },
};

export default Navigation;
