import { createRoot } from "react-dom/client";
import { StrictMode, lazy, Suspense } from "react";
import "./index.css";

// Lazy load App component
const App = lazy(() => import("./App.tsx"));

// Remove loading indicator when app is ready
const removeLoading = () => {
  const loadingEl = document.querySelector('.loading');
  if (loadingEl) {
    loadingEl.classList.add('fade-out');
    setTimeout(() => loadingEl.remove(), 300);
  }
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={null}>
      <App />
    </Suspense>
  </StrictMode>
);

// Listen for when the app is fully loaded
window.addEventListener('load', () => {
  removeLoading();
  
  // Register Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(() => {
        console.log('ServiceWorker registration successful');
      })
      .catch(err => {
        console.log('ServiceWorker registration failed: ', err);
      });
  }
});
