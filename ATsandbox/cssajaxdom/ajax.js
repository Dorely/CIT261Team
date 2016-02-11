function makeRequest(){
    console.log("Making Requests")
    
    var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function()
        {
            
            if (xhttp.readyState == 4) {
                console.log("-------------First Request---------------")
                // print readystat and status
                console.log("Readystate " + xhttp.readyState 
                            + " Status " + xhttp.status)
                
                var text = xhttp.responseText
                console.log(text)
            
                
            }   
        }
        xhttp.open("GET", "cssTest.html", true);
        xhttp.send();
        
    //-------------------------------------------------------
    var http_req = new XMLHttpRequest();
    
        http_req.onreadystatechange = function () {
            
             if (http_req.readyState == 4) {
                console.log("-------------Second Request---------------")
                console.log("Readystate " + http_req.readyState 
                            + " Status " + http_req.status)
                var jsonObj = JSON.parse(http_req.responseText);
                console.log(jsonObj.name);
                console.log(jsonObj.weather[0].description);
                console.log("------------- End Second Request---------------")
             }
            
        }
        http_req.open("GET", "http://api.openweathermap.org/data/2.5/weather?zip=83440,us&appid=44db6a862fba0b067b1930da0d769e98", true);
        http_req.send();

    //-------------------------------------------------
    var xhttp1 = new XMLHttpRequest()

    xhttp1.onreadystatechange = function()
    {
       if (xhttp1.readyState == 4) {
            console.log("-------------Thrid Request---------------")
            console.log(xhttp1.responseText)
            console.log("-------------End Thrid Request---------------")
       }
    }
    //nasty path
    // having a bad path
    xhttp1.open("GET", "bla bla", true);
    xhttp1.send();
 
    //-----------------------------------------------------------
    
    var xhttp2 = new XMLHttpRequest()

    xhttp2.onreadystatechange = function()
    {
       if (xhttp2.readyState == 4) {
            console.log("-------------Fourth Request---------------")
            console.log(xhttp2.responseText)
            console.log("-------------End Fouth Request---------------")
       }
    }
    //nasty path
    // having a bad path
    xhttp2.open("GET", null, true)
    xhttp2.send();
    
    //-----------------------------------------------------------
    
    var xhttp3 = new XMLHttpRequest()

    xhttp3.onreadystatechange = function()
    {
       if (xhttp3.readyState == 4) {
            console.log("-------------Fifth Request---------------")
            console.log(xhttp3.responseText)
            console.log("-------------End Fifth Request---------------")
       }
    }
    //nasty path
   // first agruement missing or bad
    xhttp3.open( "", "/ATsandbox/triggereventstorage/atse.html", true) // doesn't run at all
    xhttp3.send();
    
    //-----------------------------------------------------------
    
    var xhttp4 = new XMLHttpRequest()

    xhttp4.onreadystatechange = function()
    {
       if (xhttp4.readyState == 4) {
            console.log("-------------Sixth Request---------------")
            console.log(xhttp4.responseText)
            console.log("-------------End Sixth Request---------------")
       }
    }
    //nasty path
   // first agruement missing or bad
    xhttp4.open( null , "http://www.byui.edu", true) // doesn't run either
    xhttp4.send();
}