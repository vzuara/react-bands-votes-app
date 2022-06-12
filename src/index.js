import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BandNamesApp } from './BandNamesApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <BandNamesApp />
    </StrictMode>
);
