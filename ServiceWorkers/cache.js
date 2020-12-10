let name = 'cache1';

let pages = ['indexPage.html', 'registerWorker.js', 'script1.js', 'script2.js', 'script3.js'];

self.addEventListener('install', function(e){

        caches.open(name).then(function(resCache){
            resCache.addAll(pages);
        })
});


self.addEventListener('fetch', function(e){
    e.respondWith(
    fetch(e.request).catch(function(){
        caches.match(e.request);
    })
    );
})