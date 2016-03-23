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
        mContent[i].style.fontSize = "35px" // initalize font for transition
        var truncated = mContent[i].innerText
        
        letter[i].id = "letterID" + i.toString() //set each mail with an emailID#
        letter[i].style.height = "112px"; // start height so transitions will work
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
        beginX: 0,
        
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
        
        setBeginX: function(num){
       
            this.beginX = num
            console.log("after setting beginX " + this.beginX)
        },
            
        setBeginY: function(num){
       
            this.beginY = num
            console.log("after setting beginY " + this.beginY)
        
        },
        
        expandView: function(dom){
            if(this.displaying != true){
                console.log("expanding by: " + document.getElementById("mailView")
                                .clientHeight / 2 + "px") 
            
                console.log("Dom clientHegit: " + dom.clientHeight)

                dom.style.height = "250px"
                var mID = dom.id.slice(-1)
                var text = mail.emails[mID]
                mContent[mID].style.fontSize = "45px"
                
                if (text.length > 150) {
                    text = text.substr(0, 150) + '...'
                    mContent[mID].innerText = text
                }
                
                console.log("After Expanding: " + dom.style.height)   
            }
        },
        
        miniView: function(dom){
            if(this.displaying != true){
                console.log("minimizing")
                dom.style.height = this.mPxHeight.toString() + "px"
                var mID = dom.id.slice(-1)
                var text = mail.emails[mID]
                mContent[mID].style.fontSize = "35px"
                
                if (text.length > 53) {
                    text = text.substr(0, 53) + '...'
                    mContent[mID].innerText = text
                }
            }
        },
        
        displayLetter: function(dom){       //make a back button, make all the other mail hide
            console.log("displaying")
            this.displaying = true
            dom.style.height = this.displayHeight
            
            var mID = dom.id.slice(-1)
            var text = mail.emails[mID]
            mContent[mID].style.fontSize = "45px"
            mContent[mID].innerText = text
                        
        },
        
        closeDisplay: function(){
            
            if(this.displaying != true){
                console.log("minimizing")
                dom.style.height = this.mPxHeight.toString() + "px"
                var mID = dom.id.slice(-1)
                var text = mail.emails[mID]
                mContent[mID].style.fontSize = "35px"
                
                if (text.length > 53) {
                    text = text.substr(0, 53) + '...'
                    mContent[mID].innerText = text
                }
            }
            
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
        },
        
        calulateX: function(current, domTarget){
            if(this.displaying == true){
                console.log("Current: " + current)
                if(this.beginX < current){
                    this.displaying = false
                    console.log("closing")
                    this.miniView(domTarget) 
                }
            }
        }
    }
    
    //event listeners
       
    function tStart(event){
        console.log("start")
        touch.setBeginY(event.touches[0].pageY)
        touch.setBeginX(event.touches[0].pageX)
    
    }
    
    function tEnd(event){
        console.log("end")
//        console.log(event)
//        console.log(event.changedTouches[0].pageY)
        
        touch.calulateY(event.changedTouches[0].pageY, event.target)
        touch.calulateX(event.changedTouches[0].pageX, event.target)
        touch.setBeginY(0)
    }
    
}