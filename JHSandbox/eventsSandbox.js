/**
 * Created by Jonathan on 1/27/2016.
 */
//Standard JavaScript Events Including those for Mobile Devices ( Ex. onTouchBegin, onLoad, etc.)

//happy path onload being called from inline event call in html
function toCallOnLoad(){
    console.log("Body Loaded")
    //including the rest of my code inside this makes sure that the elements I am trying to interact with actually exist
    var divs = document.getElementsByClassName("colorDiv")
    console.log(divs)
    console.log(divs.length)

    //happy path adding touchstart event listener to my divs
    for(var i =0;i<divs.length;i++){
        console.log(divs[i])
        divs[i].addEventListener("touchstart",function(event){
            console.log("Touch Start Event")
            //console.log(event)
            console.log(event.touches[0].target.id)
        })
    }

    //happy path touchend event
    for(var i =0;i<divs.length;i++){
        console.log(divs[i])
        divs[i].addEventListener("touchend",function(event){
            console.log("Touch End Event")
            console.log(event)
            //console.log(event.touches[0].target.id)
        })
    }

    //happy path touchmove event
    for(var i =0;i<divs.length;i++){
        console.log(divs[i])
        divs[i].addEventListener("touchmove",function(event){
            console.log("Touch Move Event")
            console.log(event)
            //console.log(event.touches[0].target.id)
        })
    }


    //var blueDiv = document.getElementById("blueDiv")
    //blueDiv.addEventListener("touchstart",function(event){
    //    console.log("Touch Start Event called")
    //    console.log(event.touches)
    //})


}

