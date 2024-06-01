// src/CryptoDashboard.js
import React, { useEffect, useState } from 'react';
import CoinCard from './CoinCard';
import SearchPanel from './SearchPanel';

const CryptoDashboard = () => {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('Market Cap');

    useEffect(() => {
        fetch('/api/v1/cryptocurrency/listings/latest', {
            headers: {
                'X-CMC_PRO_API_KEY': 'aa19f499-ce88-46b0-8f8e-d2382133e33b',
            },
        })
        .then(response => response.json())
        .then(data => {
            console.log('Fetched data:', data);
            const specifiedCoins = ['Bitcoin', 'Ethereum', 'Tether USDt', 'BNB', 'Solana', 'USDC', 'XRP', 'Dogecoin', 'Shiba Inu'];
            const filteredData = data.data.filter(coin => specifiedCoins.includes(coin.name));
            setCoins(filteredData);
        })
        .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const handleSelectChange = (e) => {
        setFilter(e.target.value);
    };

    const handleSearchClick = () => {
        // Perform search or filtering when the Search button is clicked
        const filteredCoins = coins.filter(coin =>
            coin.name.toLowerCase().includes(search.toLowerCase())
        );
        setCoins(filteredCoins);
    };

    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <h1 style={styles.title}>Crypto Coin Tracker</h1>
            <SearchPanel 
                onSearchChange={handleSearchChange} 
                onSelectChange={handleSelectChange} 
                onSearchClick={handleSearchClick}
            />
            <div style={styles.cryptoGrid}>
                {filteredCoins.map(coin => (
                    <CoinCard key={coin.id} coin={coin} />
                ))}
            </div>
        </div>
    );
};

const styles = {
    title: {
        textAlign: 'center',
        fontSize: '2.5rem',
        margin: '20px 0',
    },
    cryptoGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
    },
    '@media screen and (max-width: 768px)': {
        cryptoGrid: {
            gridTemplateColumns: '1fr',
        },
    },
    '@media screen and (min-width: 768px) and (max-width: 1024px)': {
        cryptoGrid: {
            gridTemplateColumns: 'repeat(2, 1fr)',
        },
    },
};

export default CryptoDashboard;
