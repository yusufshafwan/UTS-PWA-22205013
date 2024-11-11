const cacheName = 'portfolio-cache-v1';
const assets = [
  '/',
  '/styles.css',
  '/script.js',
  '/images/about-bg.png',
  '/images/contact-img.svg',
  '/images/footer-bg.png',
  '/images/gambar.jpg',
  '/images/home-bg-img.png',
  '/images/icon-192x192.png',
  '/images/icon-512x512.png',
  '/images/subscribe-bg.png',
  '/images/yusuf.jpg',
];

// Install Service Worker and Cache Assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log('Caching assets...');
      return cache.addAll(assets);
    })
  );
});

// Fetch assets from cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
