function screenShot(){
var canvas = sceneEl.canvas;

// here is the most important part because if you dont replace you will get a DOM 18 exception.
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");  

window.location.href=image; // it will save locally
            }