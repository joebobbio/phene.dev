var cacheName='phene.dev';
var filesToCache=['/','/index.html','/css/main.css',"/about","/about/index.html","/about/main.css","/privacy","/privacy/index.html"];
self.addEventListener('install',function(e){
    console.log('[ServiceWorker] Install event detected');
    e.waitUntil(caches.open(cacheName).then(function(cache){
        console.log('[ServiceWorker] caching app shell');
        return cache.addAll(filesToCache);
    }))
});
self.addEventListener('activate',event=>{
    event.waitUntil(self.clients.claim())
});
self.addEventListener('fetch',event=>{
    event.respondWith(caches.match(event.request,{
        ignoreSearch:true
    }).then(Response=>{
        return Response||fetch(event.request)
    }))
})