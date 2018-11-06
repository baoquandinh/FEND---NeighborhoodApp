console.log("SW Startup!");


window.self.addEventListener('install', function(e){
    console.log("Service worker installed from service-worker.js")
})
window.self.addEventListener('active', function(e){
    console.log("Service worker active from service-worker.js")
})
window.self.addEventListener('fetch', function(e){
    console.log("Service worker fetch from service-worker.js", e.request.url)
})