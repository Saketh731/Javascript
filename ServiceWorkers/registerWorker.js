if('serviceWorker' in navigator){
    window.addEventListener('load', function(){
        navigator.serviceWorker.register('./cache.js')
        .then(res => console.log("Registered"))
        .catch(err => console.log("Not Registered"));
    });
}