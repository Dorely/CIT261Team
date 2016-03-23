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
    console.log("Loading Menu") 
    
    var load = document.getElementById("loadDisplay")
    
    console.log(load.style.animationName)
    
    load.style.display = "inline-block"

    console.log(load.style.display)
    
    var tLoadDevice = document.getElementById("loadDevicePic")
    tLoadDevice.addEventListener("change", touchLoDeviPic, false)
    
    var tLoadLink = document.getElementById("loadLink")
    tLoadLink.addEventListener("touchstart", touchLoLink, false)
}

function touchLoLink(event){
    
    console.log("loading link image")
    
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    var link = document.getElementById("link").value    
	
    var img = new Image();
    img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
    }
    img.src = link;
    
    loadCancel()
}

function touchLoDeviPic(e){
    console.log(e)
    
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    
    var reader = new FileReader();
    reader.onload = function(event){
        var img = new Image();
        
        img.onload = function() {
            //img.style.opacity = 1;
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img,0,0);
        }

//        img.style.opacity = 0
//        img.style.transitionProperty = "opacity"
//        img.style.transitionDuration = ".5s"
//        img.style.transtionTimingFunction = "ease"
        img.src = event.target.result;
        //console.log(img)
    }
    reader.readAsDataURL(e.target.files[0]);
    
    console.log("imageloaded")
    loadCancel()
}


function loadCancel(){
    var load = document.getElementById("loadDisplay")
    
    console.log(load.style.animationName)
    
    load.style.display = "none"
    
//    load.style.animationName = "loadFadeOut"
//    
//    load.style.animationPlayState = "running"
//    
//    load.addEventListener("animationend", function(){
//        console.log(load.style.display)
//        if(load.style.display == "inline-block"){
//            load.style.display = "none"
//        }
//        else{
//            load.style.display = "inline-block"
//        }
//         
//    }, false)
    
}
