import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactHook from './ReactHook';
import CleanUp from './CleanUp';
import App from './App';
import Coin from './Coin';
import Movie from './Movie'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Movie />
  // </React.StrictMode>
);
