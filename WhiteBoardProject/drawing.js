function setScreenAndDrawing() {
    var w = window.innerWidth;
    var h = window.innerHeight;
//    canvas.style.width = (w - 20) +'px';
//    canvas.style.height = (h - 70) +'px';
//    canvas.width = w;
//    canvas.height = h;
    var hw = w/2
    var hh = h/2
    
    var myCanvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    
    //set sample image
    var img = new Image();
    img.onload = function () {
        myCanvas.width = img.width;
        myCanvas.height = img.height;
        ctx.drawImage(img, 0, 0);
    }
    img.src = "sample.jpg";
    
    // set load menu positon relative to the screen
    var load = document.getElementById("loadDisplay")
    load.style.top = (hh - 62.5) + "px"
    load.style.left = (hw - 200) + "px"
 
    load.style.animationName = "loadFadeIn"  

    // makes the page not move while drawing
    document.body.addEventListener("touchstart", function (e) {
        if (e.target == canvas) {
            e.preventDefault();
        }
    }, false);
    document.body.addEventListener("touchend", function (e) {
        if (e.target == canvas) {
            e.preventDefault();
        }
    }, false);

    document.body.addEventListener("touchmove", function (e) {
        if (e.target == canvas) {
            e.preventDefault();
        }
    }, false);
    
    
    // drawing with mouse
    if (myCanvas) {
        var isDown = false;
        var canvasX, canvasY;
        ctx.lineWidth = 5;
        
        myCanvas.addEventListener("mousedown", function(e){
			isDown = true;
			ctx.beginPath();
			canvasX = e.pageX - myCanvas.offsetLeft;
			canvasY = e.pageY - myCanvas.offsetTop;
			ctx.moveTo(canvasX, canvasY);
		}, false)
        
		myCanvas.addEventListener("mousemove",function(e){
			if(isDown !== false) {
				canvasX = e.pageX - myCanvas.offsetLeft;
				canvasY = e.pageY - myCanvas.offsetTop;
				ctx.lineTo(canvasX, canvasY);
				ctx.strokeStyle = "#000";
				ctx.stroke();
			}
		}, false)
        
        myCanvas.addEventListener("mouseup",function(e){
			isDown = false;
			ctx.closePath();
		}, false);
	}
	
	// Touch Events Handlers
	draw = {
		started: false,
		start: function(evt) {
            var pos = getTouchPos(myCanvas, evt);
			ctx.beginPath();
			ctx.moveTo(
                pos.x, pos.y
//				evt.touches[0].pageX,
//				evt.touches[0].pageY
			);

			this.started = true;

		},
		move: function(evt) {

			if (this.started) {
                
                var pos = getTouchPos(myCanvas, evt);
                console.log("POS: x: " + pos.x + " y:" + pos.y)
                
                console.log("X: " + evt.touches[0].pageX + " Y: " +
				evt.touches[0].pageY)
                
				ctx.lineTo(
                    pos.x, pos.y
//					evt.touches[0].pageX,
//					evt.touches[0].pageY
				);

				ctx.strokeStyle = "#000";
				ctx.lineWidth = 5;
				ctx.stroke();
			}

		},
		end: function(evt) {
			this.started = false;
		}
	};
	
	// Touch Events
	myCanvas.addEventListener('touchstart', draw.start, false);
	myCanvas.addEventListener('touchend', draw.end, false);
	myCanvas.addEventListener('touchmove', draw.move, false);
	
	// Disable Page Move
	document.body.addEventListener('touchmove',function(evt){
		evt.preventDefault();
	},false);
}

function getTouchPos(canvasDom, touchEvent) {
  var rect = canvasDom.getBoundingClientRect();
  return {
    x: touchEvent.touches[0].clientX - rect.left,
    y: touchEvent.touches[0].clientY - rect.top
  };
}