var scopeAdj = null



function loadPage(){
    var button = document.getElementById("nextButton")
    button.addEventListener("touchstart", cameraView, false)
}

function getscope(){
    var xhttp = new XMLHttpRequest();
        
    xhttp.onreadystatechange = function()
    {
        
        if (xhttp.readyState == 4) {
            // print readystat and status
            console.log("Readystate " + xhttp.readyState 
                        + " Status " + xhttp.status)
            
            var text = xhttp.responseText
            console.log(text)
        
            
        }   
    }
    xhttp.open("GET", "fake.php", true);
    xhttp.send();
    
}

function cameraView(){
    console.log("changing")
    
    var body = document.getElementById("body")
    var header = document.getElementById("header")
    var main = document.getElementById("main")
    var footer = document.getElementById("footer")
    
    var elmCrossHair = document.createElement("div")
    elmCrossHair.id = "rectical"
    elmCrossHair.innerText = "+"
    console.log(main.clientHeight)
    elmCrossHair.style.marginTop = (main.clientHeight / 2 - 100) + "px"
    
    openCamera(body)
    
    header.innerHTML = "Put the target inside the box"
    header.style.fontSize = "600%"
    
    main.innerHTML = ""
    main.appendChild(elmCrossHair)
    main.style.borderStyle = "solid"
    main.style.borderRadius = "20px"
    main.style.borderWidth = "10px"
    main.style.height = "60%"
    main.style.padding = "0px"
    main.style.margin = "0px 20px"
    
    
    footer.innerHTML = "Put the crosshair at the point of aim"
    footer.style.paddingTop = "50px"
    footer.style.textAlign = "center"
}

function openCamera(element){
    window.addEventListener("DOMContentLoaded", function() {
            // Grab elements, create settings, etc.

//            video = document.getElementById("liveFeed");
            videoObj =
            {   "video": true };
                errBack = function(error) {
                console.log("Video capture error: ", error.code);
            }

            // Put video listeners into place
            if(navigator.getUserMedia) { // Standard
                navigator.getUserMedia(videoObj, function(stream) {
                    element.src = stream;
                    element.play();
                }, errBack);
            }else if(navigator.mozGetUserMedia) { // Firefox-prefixed
                navigator.mozGetUserMedia(videoObj, function(stream){
                    element.src = window.URL.createObjectURL(stream);
                    element.play();
                }, errBack);
            }else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
                navigator.webkitGetUserMedia(videoObj, function(stream){
                    element.src = window.webkitURL.createObjectURL(stream);
                    element.play();
                }, errBack);
            }

//            var canvas = document.getElementById("canvas");
//            context = canvas.getContext("2d");

//            document.getElementById("snap").addEventListener("click", function() {
//                context.drawImage(video, 0, 0, 640, 480);
//            });
        }, false);
}