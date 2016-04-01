var scopeAdj = null

function loadPage(){
    var button = document.getElementById("nextButton")
    button.addEventListener("touchstart", cameraView, false)
    
    body.style.height = (window.innerHeight + 150) + "px"
    var scopeVal = document.getElementById("scope").value
    
    getScope(scopeVal)
    
}

function getScope(value){
    var xhttp = new XMLHttpRequest();
    
    var path = "fake.php?scope=" + value
    
    console.log(path)
    
    xhttp.onreadystatechange = function()
    {
        
        if (xhttp.readyState == 4) {
            // print readystat and status
            console.log("Readystate " + xhttp.readyState 
                        + " Status " + xhttp.status)
            
            var scopeSpec = JSON.parse(xhttp.responseText)
            console.log(scopeSpec)
            
            document.getElementById("spec").innerText = "MOA: " + scopeSpec[0]
            scopeAdj = scopeSpec[1]  
        }   
    }
    xhttp.open("GET", path, true);
    xhttp.send();
    
}

function cameraView(){
    console.log("changing")

    
    var body = document.getElementById("body")
    var video = document.getElementById("video")
    var img = document.getElementById("img")
    var header = document.getElementById("header")
    var main = document.getElementById("main")
    var mainContent = main.innerHTML
    var footer = document.getElementById("footer")

    body.style.animationPlayState = "running"
    body.addEventListener("animationend", bodyAnimEnd, false)
    
    body.addEventListener("touchstart", function(){
        
        console.log(event)
        
        if(body.style.backgroundColor == "rgb(23, 33, 9)" 
           && (event.target.nodeName != "IMG" && event.target.nodeName != "VIDEO")){
            
            console.log("Going Back")
            body.style.animationName = "fromShader"
            
            header.innerHTML = "Lets Get Started..."
            header.style.fontSize = "600%"
            
            img.innerHTML = ""
            img.style.padding = "0px 0px"
            img.style.width = "0"   
            
            video.innerHTML = ""
            video.style.display = "none"
            
            main.innerHTML = mainContent
            
            footer.innerHTML = "<button id='nextButton'>Lets Go!</button>"
            footer.style.fontSize = "600%"
            footer.style.paddingTop = "200px"
            
            loadPage()
        }
        
    }, false)
    
    openCamera(video)
    
    header.innerHTML = "Put the crosshair on the point of aim"
//    header.style.fontSize = "600%"
    
    main.innerHTML = ""

    var image = new Image()
    image.src = "crosshair.png"
    image.onload = function() {
//        console.log(this.height)
        video.style.height = this.height *2 + "px";
        return true;
    }   
    
    img.src = image.src
    img.style.padding = "0px 10px"
    img.style.position = "absolute"
    img.style.width = "98%"
    img.style.opacity = ".9"
    
    video.style.display = "block"
    
    footer.innerHTML = "Tap outside the scope to go back"
    footer.style.fontSize = "400%"
    footer.style.paddingTop = "0px"
    footer.style.textAlign = "center"
}

function openCamera(element){
            // Grab elements, create settings, etc.
        console.log("opnening camera")
           
            videoObj =
            {   "video": true };
                errBack = function(error) {
                console.log("Video capture error: ", error.code);
            }

            // Put video listeners into place
            if(navigator.getUserMedia) { // Standard
                navigator.getUserMedia(videoObj, function(stream) {
                    console.log("standard")
                    element.src = stream;
                    element.play();
                }, errBack);
            }else if(navigator.mozGetUserMedia) { // Firefox-prefixed
                navigator.mozGetUserMedia(videoObj, function(stream){
                    console.log("Firefox")
                    element.src = window.URL.createObjectURL(stream);
                    element.play();
                }, errBack);
            }else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
                navigator.webkitGetUserMedia(videoObj, function(stream){
                    console.log("webkit")
                    element.src = window.webkitURL.createObjectURL(stream);
                    element.play();
                }, errBack);
            }
} 

function bodyAnimEnd(){
//    console.log("checking")
//    console.log(this.style.backgroundColor)
    if(this.style.backgroundColor != "rgb(23, 33, 9)"){
        this.style.backgroundColor = "rgb(23, 33, 9)"
    }
    else{
        this.style.animationName = "toShader"
        this.style.animationPlayState = "paused"
        this.style.backgroundColor = "darkolivegreen"
        
    }
}