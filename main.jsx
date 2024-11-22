import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App.jsx';
import './style.css';
import {StrictMode} from "react";
import {PrimeReactProvider} from "primereact/api";
import 'primeicons/primeicons.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <PrimeReactProvider>
            <App />
        </PrimeReactProvider>
    </StrictMode>
);