// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import CryptoDashboard from './CryptoDashboard';

const App = () => {
    return (
        <Router>
            <div>
                <Navigation />
                <Routes>
                    <Route path="/dashboard" element={<CryptoDashboard />} />
                    <Route path="/watchlist" element={<div>Watchlist Page</div>} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;

