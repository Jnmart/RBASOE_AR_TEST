            function draw(){
                var canvas = document.getElementById("thecanvas");
                var ctx = canvas.getContext("2d");
                ctx.fillStyle = "rgba(125, 46, 138, 0.5)";
                ctx.fillRect(25,25,100,100); 
                ctx.fillStyle = "rgba( 0, 146, 38, 0.5)";
                ctx.fillRect(58, 74, 125, 100);
            }

            function screenShot(){
                var canvas = document.getElementById("thecanvas");
                document.getElementById("theimage").src = canvas.toDataURL();
                Canvas2Image.saveAsPNG(canvas);
            }