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
    
    var tLoadDevice = document.getElementById("loadDevicePic")
    tLoadDevice.addEventListener("change", touchLoDeviPic, false)
    
    var tLoadLink = document.getElementById("loadLink")
    tLoadLink.addEventListener("touchstart", touchLoLink, false)
}

function touchLoLink(event){
    
    console.log("loading link image")
    
    function loadCanvas(dataURL){
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        
        // load image from data url
        var img = new Image();
        
        img.onload = function() {
            ctx.drawImage(img, 0, 0);
        };

        img.src = link;
    }
    
    var xhttp = new XMLHttpRequest();
    var link = document.getElementById("link").value    
    
    // make ajax call to get image data url
    console.log("Link: " + link)
    xhttp.open('GET', link, true);
    
    xhttp.onreadystatechange = function() {
        // Makes sure the document is ready to parse.
        if(xhttp.readyState == 4) {
        // Makes sure it's found the file.
            if(xhttp.status == 200) {
                loadCanvas(xhttp.responseText);
            }
        }
    };
    
    xhttp.send(null); 
    
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
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img,0,0);
        }
        
        img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);
    
    console.log("imageloaded")
    loadCancel()
}


function loadCancel(){
    document.getElementById("loadDisplay").style.display = "none"
}
