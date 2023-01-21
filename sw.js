// wait for install event to happen, then waitUntil() to handle install process of the app.
// This means creating a new cache called "static" and adding a series of assets to it

self.addEventListener("install", e => {
    console.log("Install!");
    e.waitUntil(
        caches.open("static").then(cache => { // cache name "static" could be anything
            return cache.addAll("./", "./images/venmo.png");
        })
    )
})