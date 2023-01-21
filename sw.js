// wait for install event to happen, then waitUntil() to handle install process of the app.
// This means creating a new cache called "static" and adding a series of assets to it

self.addEventListener("install", e => {
    console.log("Install!");
    e.waitUntil(
        caches.open("static").then(cache => { // cache name "static" could be anything
            return cache.addAll(["./", "./images/venmo.png"]);
        })
    )
})

// if we found response in cache then return that response
// if we don't have a cached version of the resource, fetch the
// resource regularly

self.addEventListener("fetch", e => {
    console.log('Intercepting fetch request forL ${e.request.url}');
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    )
})