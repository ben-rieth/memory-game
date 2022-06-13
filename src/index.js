import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Game from './Game';

import Fonts from './components/global-styles/Fonts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Fonts />
    <Game />
  </React.StrictMode>
);

