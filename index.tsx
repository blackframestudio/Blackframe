import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

/**
 * World-class entry point.
 * Ensures the DOM is ready and the React 19 root is mounted correctly.
 */
const mount = () => {
  const container = document.getElementById('root');
  if (!container) {
    console.error("Critical: Root element #root not found in the DOM.");
    return;
  }

  try {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("Black Frame Studio application mounted successfully.");
  } catch (error) {
    console.error("Critical: React failed to mount:", error);
  }
};

// Handle cases where script might run before DOM is fully parsed
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mount);
} else {
  mount();
}