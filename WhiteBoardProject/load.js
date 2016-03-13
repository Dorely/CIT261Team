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

function loadPicture(){
    console.log("menupopup") 
    
    document.getElementById("loadDisplay").style.display = "block"
    
//    var tLoadDevice = document.getElementById("loadDevicePic")
//    tLoadDevice.addEventListener("touchstart", touchLoDeviPic, false)
//    
//    var tLoadLink = document.getElementById("loadLink")
//    tLoadLink.addEventListener("touchstart", touchLoLink, false)
}

function loadoDevicePic(event){
   // document.getElementById("canvas").innerHTML = event
}

function touchLoLink(event){
    //ajax
}

function loadCanvas(event){
    console.log(event)
//    var file = event.target.files
//    if(file.length > 0){
//        console.log("there is file")
//        //picture url
//        try{
//            var fileReader = new FileReader();
//                fileReader.onload = function (event) {
//                    showPicture.src = event.target.result;
//                };
//                fileReader.readAsDataURL(file);
//            
//           // var picURL = window.URL.createObjectURL(file[0])
//        }
//        catch(e){
//            try {
//                // Fallback if createObjectURL is not supported
//                var fileReader = new FileReader();
//                fileReader.onload = function (event) {
//                    showPicture.src = event.target.result;
//                };
//                fileReader.readAsDataURL(file);
//            }
//            catch (e) {
//                //
//                var error = document.querySelector("#error");
//                if (error) {
//                    error.innerHTML = "Neither createObjectURL or FileReader are supported";
//                }
//            }        
//        }
//        
//        //get canvas
//        var photoCanvas = document.getElementById("canvas")
//        var ctx = photoCanvas.getContext("2d");
//        //create image
//        var photo = new Image();
//        photo.onload = function(){
//            //draw photo into canvas when ready
//            ctx.drawImage(photo, 0, 0, 500, 400);
//        };
//        //load photo into canvas
//        photo.src = picURL;
//        //release object url
//        window.URL.revokeObjectURL(picURL);
    var canvas = document.getElementById('viewport'),
        context = canvas.getContext('2d');

    make_base();

    function make_base()
    {
  base_image = new Image();
  base_image.src = 'img/base.png';
  base_image.onload = function(){
    context.drawImage(base_image, 100, 100);
  }
}
        console.log("imageloaded")
    }
}

function loadCancel(){
    document.getElementById("loadDisplay").style.display = "none"
}