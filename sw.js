const CACHE_NAME = 'edulearn-cache';
const OFFLINE_URL = '/offline.html';

const ASSETS_TO_CACHE = [
  OFFLINE_URL,
  './index.html',   // Your main style
  '/x4konkor3.html',     // Your main logic
  './edulearn.png'    // Your logo
];

// 1. Install: Cache ONLY the essentials (The Shell)
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Caching App Shell');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// 2. Fetch: Network First, Fallback to Offline Page
self.addEventListener('fetch', (event) => {
  // We only handle navigate requests (HTML pages) specially
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .catch(() => {
          // If network fails, show the custom offline page
          return caches.match(OFFLINE_URL);
        })
    );
  } else {
    // For images/css/js, try network first, then cache, or just return network
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  }
});
