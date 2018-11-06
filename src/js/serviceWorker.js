export function register() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js')
        .then(function(registration) {
            console.log("Registration completed successfully")
        })
        .catch(function(err){
            console.log("Registration failed", err)
        })
    }
}