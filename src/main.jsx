import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from '../pages/Header.jsx';
import {QueryClient,QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import { useThemeStore } from '../hooks/useThemeStore.js';

const {isDarkMode} = useThemeStore.getState();
document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');

const queryclient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryclient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  </StrictMode>,
)
