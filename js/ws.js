/* eslint-disable */

var CACHE_NAME = 'static-v1';

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/css/land.css',
        '/css/doc.css',
        '/css/responsive-nav.css',
        '/js/lunr.min.js',
        '/js/main.js',
        '/js/responsive-nav.min.js',
        '/js/search.js',          
        'https://tray-desenvolvedores.github.io/',
        'https://tray-desenvolvedores.github.io/frontend/',
        'https://tray-desenvolvedores.github.io/frontend/console-tool/',
        'https://tray-desenvolvedores.github.io/frontend/objetos/',
        'https://tray-desenvolvedores.github.io/frontend/methods/'
      ]);
    })
  )
});

self.addEventListener('activate', function activator(event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys
        .filter(function (key) {
          return key.indexOf(CACHE_NAME) !== 0;
        })
        .map(function (key) {
          return caches.delete(key);
        })
      );
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (cachedResponse) {
      return cachedResponse || fetch(event.request);
    })
  );
});