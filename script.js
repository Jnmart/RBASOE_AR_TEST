window.onload = () => {
    const button = document.querySelector("#btnSave");
    button.innerText = ' Share! ';

    saveCapture(element);
};

function saveCapture(element) {
  html2canvas(element).then(function(canvas) {
    download(canvas.toDataURL("image/png"));
  })
}