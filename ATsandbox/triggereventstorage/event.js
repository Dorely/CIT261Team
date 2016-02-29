function load(){
    console.log("Loading")
    document.getElementsByTagName("body")[0].style.backgroundColor = "#123"
    //for on touch
    var touch = document.getElementById("field")
    touch.addEventListener("touchstart", touchHandler, false)
    
    // for on touch end (goes after touch is released)
    var touchoff = document.getElementById("end")
    touchoff.addEventListener("touchend", endHandler, false)
    
    // for moving an item
    var touchmove = document.getElementById("touchMove")
    touchmove.addEventListener("touchmove", moveHandler, false)
    
    //multi touch
    var multiTouch = document.getElementById("multi")
    multiTouch.addEventListener("touchstart", multiTouchHandler, false) 
    
    //use starttouch to find multipule touches
    
    // nasty path
    var nullTouch = document.getElementById("nullTouch")
    nullTouch.addEventListener("touchstart",null, false) // this does nothing cuz no function is being called
    //nullTouch.addEventListener("touchstart", nullTouchHandler, null) // this one runs
    // bad string
    //nullTouch.addEventListener("asdf",nullTouchHandler, false) // nothing happens
     //nullTouch.addEventListener(null, nullTouchHandler, false) // nothing happens
     
    console.log("Done Loading")

}

function touchHandler(event){
    var coords = document.getElementById("addText")
    console.log("Touch: ", event)
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
    console.log("Endtouch: ", event)
    coords.innerHTML = "x: " + event.changedTouches[0].pageX + ", y: " + event.changedTouches[0].pageY 
    console.log("ran end handler")
}

//NOTE: you don't need event in the paramaters to get it to work
function nullTouchHandler(){
       console.log("nullTouch: ", event)
}

function moveHandler(event){
    console.log("moveHandler: ", event)
    var coords = document.getElementById("addText3")
    coords.innerHTML = "x: " + event.touches[0].pageX + ", y: " + event.touches[0].pageY
}

function multiTouchHandler(event){
    console.log("Multitouch: ", event)
    var coords1 = document.getElementById("addText4")
    var coords2 = document.getElementById("addText5")
    coords1.innerHTML = "First Touch: x: " + event.touches[0].pageX + ", y: " + event.touches[0].pageY
    coords2.innerHTML = "Second Touch: x: " + event.touches[1].pageX + ", y: " + event.touches[1].pageY
    
}