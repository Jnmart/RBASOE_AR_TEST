function resizeCanvas(origCanvas, width, height) {
    let resizedCanvas = document.createElement("canvas");
    let resizedContext = resizedCanvas.getContext("2d");
 
    resizedCanvas.height = height;
    resizedCanvas.width = width;
 
    resizedContext.drawImage(origCanvas, 0, 0, width, height);
    return resizedCanvas.toDataURL();
}
 
document.getElementById("scr-button").addEventListener("click", function() {
    let aScene = document.querySelector("a-scene").components.screenshot.getCanvas("perspective");
    let frame = captureVideoFrame("video", "png");
    aScene = resizeCanvas(aScene, frame.width, frame.height);
    frame = frame.dataUri;
     
  mergeImages([frame, aScene]).then(b64 =&gt; {
        let link = document.getElementById("down-link", "jpeg");
        link.setAttribute("download", "RBASOE.jpeg");
        link.setAttribute("href", b64);
        link.click();
    console.log("Screenshot taken");
    });
});