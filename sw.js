const CACHE='uno-no-mercy-v1-2';
const ASSETS=[
'./','./index.html','./manifest.json','./apple-touch-icon.png','./icon-192.png','./icon-512.png',
'./discard-all.png','./skip-everyone.png','./draw-4.png','./draw-2.png','./reverse.png','./skip.png',
'./wild-reverse-draw-4.png','./wild-draw-10.png','./wild-draw-6.png','./wild-color-roulette.png'
];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
