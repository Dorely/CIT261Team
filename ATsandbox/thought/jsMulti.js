function main(){
    
    var leftSide = document.getElementById("leftSide")
    leftSide.addEventListener("touchstart", touchLeftStartHandler, false)
    leftSide.addEventListener("touchend", touchLeftEndHandler, false)
    
    var center = document.getElementById("middleBox")
    center.addEventListener("touchstart", touchMiddleStartHandler, false)
    center.addEventListener("touchend", touchMiddleEndHandler, false)
    center.addEventListener("animationend", changeColor, false)
    
    var righSide = document.getElementById("rightSide")
    righSide.addEventListener("touchstart", touchRightStartHandler, false)
    righSide.addEventListener("touchend", touchRightEndHandler, false)

    
    detect = {
        
        left: false,
        middle: false,
        right: false,
        
        checkDouble: function(){
            
            if(this.left == true && this.middle == true){
                console.log("LEFT AND MIDDLE TOUCHING")
                center.style.animationPlayState = "running"
            }
            else if(this.right == true && this.middle == true){
                console.log("RIGHT AND MIDDLE TOUCHING")
                center.style.animationPlayState = "running"
            }            
        }        
        
    }
    //LEFT SIDE
    function touchLeftStartHandler(event){
        
        console.log("touching left")
         console.log(detect.left)
        detect.left = true
        
        detect.checkDouble()
    }
    
    function touchLeftEndHandler(event){
        detect.left = false  
        console.log("Turning off Left: " + detect.left)
    }
    
    
    // Middle
    function touchMiddleStartHandler(event){
        
        console.log("touching center")
        console.log(detect.middle)
        detect.middle = true
        
        detect.checkDouble()        
    }
    
    
    function touchMiddleEndHandler(event){
        if(center.style.backgroundColor == "yellowgreen"){
           
            center.style.animationName = "unalert"
            //center.style.backgroundColor = "aqua"
            //center.addEventListener("animationend", changeColor, false)
        }
        console.log("Turning off Middle: " + detect.middle)
        detect.middle = false
    }
    
    
    //RIGHT SIDE
    function touchRightStartHandler(event){
        
        console.log("touching right")
        console.log(detect.right)
        detect.right = true
        
        detect.checkDouble()
    }
    
    function touchRightEndHandler(event){
        detect.right = false
        console.log("Turning off Right: " + detect.right)
    }
    
    function changeColor(event){
        if(center.style.backgroundColor != "yellowgreen"){
            center.style.backgroundColor = "yellowgreen"
            center.innerHTML = "<h1>YOU WERE TOUCHING THE SIDE!</h1>\
                <p>Tap the center part of the screen to go back."
        }
        else{
            center.style.animationName = "alert"
            center.style.animationPlayState = "paused"
            center.style.backgroundColor = "aqua"
            center.innerHTML = ""
        }
        
        
        
        
    }
}