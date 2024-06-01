import React from 'react';

const SearchPanel = ({ onSearchChange, onSelectChange, onSearchClick }) => {
    return (
        <div style={styles.searchBox}>
            <input 
                type="text" 
                placeholder="Search Cryptocurrency" 
                onChange={onSearchChange} 
                style={styles.searchInput}
            />
            <div style={styles.marketCapDropdown}>
                <select onChange={onSelectChange} style={styles.selectBox}>
                    <option value="Market Cap">Market Cap</option>
                    <option value="Current Price">Current Price</option>
                    <option value="24h Volume">24h Volume</option>
                    <option value="24h Change">24h Change</option>
                </select>
            </div>
            <button onClick={onSearchClick} style={styles.searchButton}>Search</button>
        </div>
    );
};

const styles = {
    searchBox: {
        backgroundColor: '#f9f9f9',
        padding: '10px',
        borderRadius: '10px',
        marginBottom: '20px',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchInput: {
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        marginRight: '10px',
    },
    marketCapDropdown: {
        marginRight: '10px',
    },
    selectBox: {
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
    },
    searchButton: {
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#007bff',
        color: '#fff',
        cursor: 'pointer',
    }
};

export default SearchPanel;
