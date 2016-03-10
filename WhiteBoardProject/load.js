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

function webImageLoad(){
    
    var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function()
        {
            var image = ""
            
            if (xhttp.readyState == 4) {    
                image = xhttp.responseText
            }   
            
            document.getElementById("canvas").innerHTML = image
        }
        xhttp.open("GET", /*link goes here*/, true);
        xhttp.send();
}