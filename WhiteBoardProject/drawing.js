function setScreen() {
    var w = window.innerWidth;
    var h = window.innerHeight;
//    canvas.style.width = (w - 30) +'px';
    canvas.style.height = (h - 70) +'px';
//    canvas.width = w;
//    canvas.height = h;
    var hw = w/2
    var hh = h/2
    document.getElementById("loadDisplay").style.top = (hh - 62.5) + "px"
    document.getElementById("loadDisplay").style.left = (hw - 200) + "px"
    
    document.getElementById("loadDisplay").style.animationName = "loadFadeIn"   
}
    
//for (i=0; i<len; i++) {
//    var touch = touches[i];
//    var px = touch.pageX;
//    var py = touch.pageY;
//    ctx.beginPath();
//    ctx.arc(px, py, 20, 0, 2*Math.PI, true);
//    ctx.fillStyle = "rgba(0, 0, 200, 0.2)";
//    ctx.fill();
//    ctx.lineWidth = 2.0;
//    ctx.strokeStyle = "rgba(0, 0, 200, 0.8)";
//    ctx.stroke();
//    console.log('drawn circle at ' + px +',' + py);
//}