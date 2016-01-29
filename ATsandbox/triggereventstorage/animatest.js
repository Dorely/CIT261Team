function moveLeft(){
    console.log("Moving Left")
    var blueID = document.getElementById("blueBox")
    
    // happy path of animation box to the left
    
    var left = blueID.getBoundingClientRect().left
    console.log(left)
    var stop = left - 100
    console.log(stop)
    
    function frame() {
        
        left--
        
        blueID.style.left = left + 'px'
        
        if(left == stop){
            clearInterval(id)
        }
    }
            
    var id = setInterval(frame, 10)
    
}

function moveRight(){
    console.log("Moving Right")
    var blueID = document.getElementById("blueBox")
    
    // happy path of animation box to the left
    
    var left = blueID.getBoundingClientRect().left
    console.log(left)
    var stop = left + 100
    console.log(stop)
    
    function frame() {
        
        left++
        
        blueID.style.left = left + 'px'
        
        if(left == stop){
            clearInterval(id)
        }
    }
            
    var id = setInterval(frame, 10)
    
}

function moveDown(){
    console.log("Moving Down")
    var blueID = document.getElementById("blueBox")
    
    // happy path of animation box to the left
    
    var top = blueID.getBoundingClientRect().top
    console.log(top)
    var stop = top + 100
    console.log(stop)
    
    function frame() {
        
        top++
        
        blueID.style.top = top + 'px'
        
        if(top == stop){
            clearInterval(id)
        }
    }
            
    var id = setInterval(frame, 10)
    
}

function moveUp(){
    console.log("Moving Up")
    var blueID = document.getElementById("blueBox")
    
    // happy path of animation box to the left
    
    var top = blueID.getBoundingClientRect().top
    console.log(top)
    var stop = top - 100
    console.log(stop)
    
    function frame() {
        
        top--
        
        blueID.style.top = top + 'px'
        
        if(top == stop){
            clearInterval(id)
        }
    }
            
    var id = setInterval(frame, 10)
    
}

// nasty path 

