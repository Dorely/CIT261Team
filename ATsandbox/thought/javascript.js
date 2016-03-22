function main() {
    var mContent = document.getElementsByClassName("mailCont")
    var letter = document.getElementsByClassName("mail")
//    console.log(mContent.length)
        
   mail ={
        numMail: mContent.length,
        emails: [],
        populateEmail: function(){
            for(var i = 0; i < this.numMail; ++i){
                //console.log("Inside Loop i= " + i)
                this.emails[i] = mContent[i].innerText
                
            }
        }
    }
   
   //saves the emails
    mail.populateEmail()
    
//    console.log(mail.emails)

    for(var i = 0; i < mContent.length; ++i){
        var truncated = mContent[i].innerText
        
        letter[i].id = "letterID" + i.toString() //set each mail with an emailID#
        letter[i].style.height = "65px"; // start height so transitions will work
        // assign eam amil element a eventlistener
        document.getElementById("letterID" + i.toString())
            .addEventListener("touchstart", tStart, false)
        document.getElementById("letterID" + i.toString())
            .addEventListener("touchend", tEnd, false)
        
         
        if (truncated.length > 53) {
            truncated = truncated.substr(0, 53) + '...';
//            console.log(truncated)
            mContent[i].innerText = truncated
        }
    }
    
    // touch object
    touch = {
        beginY: 0,
        //the - 10 is the padding-top and bottom. since clientHeight returns
        //the padding as well.
        mPxHeight: letter[0].offsetHeight - 11, 
        
        displayHeight: document.getElementById("mailView")
                                .clientHeight.toString() + "px",
        
        displaying: false,
        
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
        
        expandView: function(dom){
            if(this.displaying != true){
                console.log("expanding by: " + document.getElementById("mailView")
                                .clientHeight / 2 + "px") 
            
                console.log("Dom clientHegit: " + dom.clientHeight)

                dom.style.height = "155px"
    //                (document.getElementById("mailView") //set as a specific number
    //                                .clientHeight / 2).toString() + "px"

                console.log("After Expanding: " + dom.style.height)   
            }
        },
        
        miniView: function(dom){
            if(this.displaying != true){
                console.log("minimizing")
                dom.style.height = this.mPxHeight.toString() + "px"
            }
        },
        
        displayLetter: function(dom){       //make a back button, make all the other mail hide
            console.log("displaying")
            this.displaying = true
            dom.style.height = this.displayHeight
//            dom.style.transition = "height .2s ease"
            
        },
        
        calulateY: function(current, domTarget){
            console.log("Current: " + current)
            if(this.beginY < current){
                this.expandView(domTarget) 
            }
            else if(this.beginY > current){
               this.miniView(domTarget)
           }
            else{
                this.displayLetter(domTarget)
            }
        }
        
    }
    
    //event listeners
       
    function tStart(event){
        console.log("start")
//        console.log(event)
        if(touch.getBeginY() == 0){
            touch.setBeginY(event.touches[0].pageY);
        }
    }
    
    function tEnd(event){
        console.log("end")
//        console.log(event)
//        console.log(event.changedTouches[0].pageY)
        
        touch.calulateY(event.changedTouches[0].pageY, event.target)
        
        touch.setBeginY(0)
    }
    
}