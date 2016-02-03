function drop(){
    var img = document.getElementById("ball")

    var field = document.getElementById('field')

    var from = 0
    var to = field.clientHeight - img.clientHeight

    animate({
        delay: 20,
        duration: 1000,
        delta: makeEaseOut(bounce), 
        step: function(delta) {
            img.style.top =to*delta + 'px'
        }
    })

    function makeEaseOut(delta){
        return function(progress){
            return 1- delta(1- progress)
        }
    }

    function bounce(progress){
        for(var a=0,b=1,result;1;a+=b,b/=2){
            if(progress>=(7- 4*a)/ 11) {
                return-Math.pow((11- 6*a- 11*progress)/ 4, 2) + Math.pow(b, 2);
            }
        }
    }
}

function dropRight(){
    var img = document.getElementById("ball")
    
    var field = document.getElementById('field')

    var height  = document.getElementById('field').clientHeight - img.clientHeight
    var width = 100

    animate({
        delay: 20,
        duration: 1000,
        delta: makeEaseOut(bounce), 
        step: function(delta) {
            img.style.top = height*delta + 'px'
        }
    })
    
    animate({
        delay: 20,
        duration: 1000, 
        delta: makeEaseOut(quad),
        step: function(delta) {
            img.style.left = width*delta  + "px"
        }
    }) 

    function makeEaseOut(delta){
        return function(progress){
            return 1- delta(1- progress)
        }
    }

    function bounce(progress){
        for(var a=0,b=1,result;1;a+=b,b/=2){
            if(progress>=(7- 4*a)/ 11) {
                return-Math.pow((11- 6*a- 11*progress)/ 4, 2) + Math.pow(b, 2);
            }
        }
    }

    function quad(progress){
        return Math.pow(progress,2)
    }
}  

function animate(opts) {
    var start = new Date  
  
    var id = setInterval(function() {
      
    var timePassed = new Date - start
    var progress = timePassed / opts.duration
    
    if (progress > 1) progress = 1
    
    var delta = opts.delta(progress)
    opts.step(delta)
    
    if (progress == 1) {
      clearInterval(id)
    }
      
  }, opts.delay || 10)
}