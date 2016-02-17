function load(){
    console.log("Loading")
    document.getElementsByTagName("body")[0].style.backgroundColor = "#123"
    //for on touch
    var touch = document.getElementById("field")
    touch.addEventListener("touchstart", touchHandler, false)
    
    // for on touch cancel (goes after touch is released)
    var touchoff = document.getElementById("end")
    touchoff.addEventListener("touchend", endHandler, false)
    
    console.log("Done Loading")
    
    //nasty path
    // these doesn't throw an error but they also don't effect anything
    touch.addEventListener(null, touchHandler, false)
    touch.addEventListener("touchstart", null, false)
    touch.addEventListener("touchstart", touchHandler, null)
}

function touchHandler(event){
    var coords = document.getElementById("addText")
    console.log(event)
    coords.innerHTML = "x: " + event.touches[0].pageX + ", y: " + event.touches[0].pageY
}

function caps(){
    var text = document.getElementById("textBox").value 
    console.log(text)
    text = text.charAt(0).toUpperCase() + text.slice(1)
    console.log(text)
    document.getElementById("textBox").value = text
}

function endHandler(event) {
    var coords = document.getElementById("addText2")
    console.log(event)
    coords.innerHTML = "x: " + event.changedTouches[0].pageX + ", y: " + event.changedTouches[0].pageY 
    console.log("ran end handler")
}