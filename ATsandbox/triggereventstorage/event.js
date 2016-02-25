function load(){
    console.log("Loading")
    document.getElementsByTagName("body")[0].style.backgroundColor = "#123"
    var touch = document.getElementById("field")
    touch.addEventListener("touchstart", touchHandler, false)
    console.log("Done Loading")
}

function touchHandler(event){
    var coords = document.getElementById("addText")
    coords.innerHTML = "x: " + event.touches[0].pageX + ", y: " + event.touches[0].pageY
}

