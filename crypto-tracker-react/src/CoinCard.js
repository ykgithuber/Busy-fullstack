import React from 'react';

const CoinCard = ({ coin }) => {
    const imageMap = {
        'Bitcoin': 'https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=032',
        'Ethereum': 'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=032',
        'BNB': 'https://cryptologos.cc/logos/bnb-bnb-logo.png?v=032',
        'Solana': 'https://s3.coinmarketcap.com/static-gravity/image/5cc0b99a8dd84fbfa4e150d84b5531f2.png',
        'USDC': 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=032',
        'XRP' : 'https://cryptologos.cc/logos/xrp-xrp-logo.png?v=032',
        'Dogecoin' : 'https://cryptologos.cc/logos/dogecoin-doge-logo.png?v=032',
        'Tether USDt': 'https://cryptologos.cc/logos/tether-usdt-logo.png?v=032',
        'Shiba Inu' : 'https://cryptologos.cc/logos/shiba-inu-shib-logo.png?v=032'
    };

    const imageUrl = imageMap[coin.name] || 'https://via.placeholder.com/50';

    return (
        <div style={styles.cryptoCard}>
            <img src={imageUrl} alt={coin.name} style={styles.cryptoLogo} />
            <span style={styles.cryptoName}>{coin.name} ({coin.symbol.toUpperCase()})</span>
            <div style={styles.cryptoDetails}>
                <p>Current Price: ${coin.quote.USD.price.toFixed(2)}</p>
                <p>Market Cap: ${coin.quote.USD.market_cap.toFixed(2)}</p>
                <p>24h Volume: ${coin.quote.USD.volume_24h.toFixed(2)}</p>
                <p>24h Change: {coin.quote.USD.percent_change_24h.toFixed(2)}%</p>
            </div>
        </div>
    );
};

const styles = {
    cryptoCard: {
        backgroundColor: '#ffffff',
        borderRadius: '5px',
        padding: '20px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
    },
    cryptoLogo: {
        width: '50px',
        height: '50px',
        marginBottom: '10px',
    },
    cryptoName: {
        fontWeight: 'bold',
        marginTop: '10px',
    },
    cryptoDetails: {
        fontSize: '14px',
    },
};

export default CoinCard;
