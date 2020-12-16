function  getImage(){
    let xhr = new XMLHttpRequest();
    xhr.open("GET","./nature.png");
    xhr.responseType = "arraybuffer";
    xhr.onload = function(){
        let img = document.getElementById('image');
        let blob = new Blob([xhr.response], {type: "image/png"});
        let url = URL.createObjectURL(blob);
        console.log(url);
        img.src = url;
    }
    xhr.send();
}