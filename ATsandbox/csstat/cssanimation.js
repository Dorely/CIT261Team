function load(){
    var moveBox = document.getElementById("secondBox")
    moveBox.style.animationPlayState = "paused"
    var skewBox = document.getElementById("thirdBox")
    skewBox.style.animationPlayState = "paused"
}

function transformRight() {
    
    console.log("moving left")
    var box = document.getElementById("secondBox")
   
    console.log(box.style.animationPlayState)
    
    if(box.style.animationPlayState == "paused"){
        console.log("running")
        box.style.animationPlayState = "running" 
    }
    else{
        console.log("pausing")
        box.style.animationPlayState = "paused"
    }
    
}

function skewGo(){
    
    console.log("skewing")
    var box = document.getElementById("thirdBox")
    
    console.log(box.style.animationPlayState)
    
    if(box.style.animationPlayState == "paused"){
        console.log("running")
        box.style.animationPlayState = "running" 
    }
    else{
        console.log("pausing")
        box.style.animationPlayState = "paused"
    }
}