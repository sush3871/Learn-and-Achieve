import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Import Bootstrap's CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Import Bootstrap's JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './assets/font/Gilroy/stylesheet.css'
import './assets/scss/index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
