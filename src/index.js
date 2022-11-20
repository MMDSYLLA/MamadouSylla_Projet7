import React from 'react';
import ReactDOM from 'react-dom/client';
//import DecouverteAppl from './components/decouverteAppl';
import Article from './components/Article';
//import Alert from "./components/alert";
import './components/form.css';
//import '../public/index.css';
import App from './components/App';

import Nav from './components/nav';
import MonFormulaire from './form';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Nav />  
    <MonFormulaire />
    <Article />
  </React.StrictMode>
);


