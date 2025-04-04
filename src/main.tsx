
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Apply the saved theme on initial load before rendering
const savedTheme = localStorage.getItem('theme') || 'light';
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

document.documentElement.classList.add(initialTheme);

createRoot(document.getElementById("root")!).render(<App />);
