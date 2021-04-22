window.onload = () => {
    const button = document.querySelector('button[data-action="change"]');
    button.innerText = ' Share! ';

    saveCapture(element);
};

function saveCapture(element) {
  html2canvas(element).then(function(canvas) {
    download(canvas.toDataURL("image/png"));
  })
}