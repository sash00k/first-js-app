import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import './index.css';
import LoginPage from './modules/auth.js';
import Game from './modules/game';
import ScoreBoard from './modules/board.js';

function Header() {
    return (
        <div className='header'>
            <Link to='/'>
                <button className='header-button'> LOGIN </button>
            </Link>
            <Link to='/game'>
                <button className='header-button'> PLAY </button>
            </Link>
            <Link to='/scores'>
                <button className='header-button'> SCORES </button>
            </Link>
        </div>
    );
}

const App = () => (
    <BrowserRouter>
        <Helmet>
            <style>{'body { background: linear-gradient(20deg, #7000cc, #c20020);}'}</style>
        </Helmet>
        <div className='outer header'>
            <Header />
            <Routes>
                <Route path='/' element={<LoginPage />} />
                <Route path='/game' element={<Game />} />
                <Route path='/scores' element={<ScoreBoard />} />
            </Routes>
        </div>
    </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

