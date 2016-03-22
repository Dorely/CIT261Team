function truncateText() {
    var element = document.getElementsByClassName("mailCont")
    var letter = document.getElementsByClassName("mail")
    console.log(element.length)
    
   mail ={
        numMail: element.length,
        emails: [],
        populateEmail: function(){
            for(var i = 0; i < this.numMail; ++i){
                //console.log("Inside Loop i= " + i)
                this.emails[i] = element[i].innerText
                
            }
        }
    }
   
    mail.populateEmail()
    
    console.log(mail.emails)

    for(var i = 0; i < element.length; ++i){
        var truncated = element[i].innerText
        //assign each email a touch
         letter[i].addEventListener("touchstart", tStart, false)
         letter[i].addEventListener("touchend", tEnd, false)
         
        if (truncated.length > 53) {
            truncated = truncated.substr(0, 53) + '...';
            console.log(truncated)
            element[i].innerText = truncated
        }
    }
    
    
    touch = {
        beginY: 0,
        
        getBeginY: function(){
            console.log("getBeginY(): " + this.beginY)
            return this.beginY;
        },
        
        setBeginY: function(num){
            /*if(arguments.length == 2){
                console.log("reset beginY" + this.beginY)
                this.beginY = arguments[1]
            }
            else{*/
            this.beginY = num
            console.log("after setting beginY " + this.beginY)
            //}
        },
        
        expandView: function(event){
            
            console.log("expanding")
        },
        
        calulateY: function(current){
            if(this.beginY < current){
                return true 
            }
            else{
               return false
           }
        }
        
    }
    
    //event listeners
       
    function tStart(event){
        console.log("start")
        if(touch.getBeginY() == 0){
            touch.setBeginY(event.touches[0].pageY);
        }
    }
    
    function tEnd(event){
        console.log("end")
        console.log(event.changedTouches[0].pageY)
        
        if(touch.calulateY(event.changedTouches[0].pageY)){
            touch.expandView(event)
        }
        
        touch.setBeginY(0)
    }
    
}








/*function touchMoveD(event){
   
    console.log(event)
    
    touch = {
        beginY: 0,
        
        getBeginY: function(){
            console.log("getBeginY(): " + this.beginY)
            return this.beginY;
        },
        
        setBeginY: function(num){
            if(arguments.length == 2){
                console.log("reset beginY" + this.beginY)
                this.beginY = arguments[1]
            }
            else{
                this.beginY = num
                console.log("after setting beginY " + this.beginY)
            }
        },
        
        expandView: function(){},
        
        calulateY: function(current){
            if(this.beginY > current){
                return false  
            }
            else{
               return true
           }
        }
        
    }
    
    if(touch.getBeginY() == 0){
        console.log("before setting beginY: " + touch.beginY)
        touch.setBeginY(event.touches[0].pageY);
    }
    
    if(touch.calulateY(event.touches[0].pageY)){
//        console.log(event)
        touch.setBeginY(event, null)
    }
}*/