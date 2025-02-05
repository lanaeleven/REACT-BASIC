import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Password from './Password.jsx';


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Password/>
    </StrictMode>
);