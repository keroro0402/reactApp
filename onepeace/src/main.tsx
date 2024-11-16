import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'normalize.css'; // リセット用
import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap用
import 'bootstrap/dist/js/bootstrap.min.js'; // bootstrap用
import '@/assets/index.css';
import App from './App.tsx';

const root = createRoot(document.getElementById('root')!);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
