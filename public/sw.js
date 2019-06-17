const CACHE_NAME = 'hexconverter';

const STATICS_TO_PRELOAD = [
	'img/hexc-32.png',
	'img/hexc-512.png',
	'img/new_window.png',
	'index.html',
	'hexc.js',
	'hexc.css',
];

self.addEventListener('install', function (event) {
	event.waitUntil(
		caches.open(CACHE_NAME)
		.then(cache => cache.addAll(STATICS_TO_PRELOAD)
			.then(self.skipWaiting)
		)
	);
});

self.addEventListener('activate', function (event) {
	event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.open(CACHE_NAME).then(function(cache) {
			return cache.match(event.request).then(function (resp) {
				return fetch(event.request).then(function(response) {
					if (event.request.method === 'GET' && event.request.cache !== 'no-store') {
						cache.put(event.request, response.clone());
					}
					return response;
				}).catch(function (err) {
					return resp;
				});
			});
		})
	);
});
