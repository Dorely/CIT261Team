/***
* Author: Andrew Thurman
*
* load.js
*
* This file helps the user load an image into the canvas so that 
* the user can draw on the image. The image can either be loaded
* from a link given by the user or an image from the user's
* phone. 
*/

function loadPicture(){
    console.log("menupopup") 
    
    document.getElementById("loadDisplay").style.display = "block"
    
    var touch = document.getElementById("loadDevicePic")
    touch.addEventListener("touchstart", touchLoDeviPic, false)
}

function touchLoDevPic(event){
    
}