console.log("AJAX")

function makeRequest1(){
    console.log("Making Requests")
    
    var xhttp = new XMLHttpRequest()

    if (xhttp != null)
    {
        xhttp.onreadystatechange = function()
        {
            // nasty path
            // if (xhttp.readyState == 2 && xhttp.status == 200) nothing gets done
            console.log(xhttp.responseText)
            
            // print readystat and status
        }
        xhttp.open("GET", "/ATsandbox/triggereventstorage/atse.html", true)
        xhttp.send();
        //nasty path
        // having a bad path
        // xhttp.open("GET", "bla bla", true)
       // xhttp.open("GET", null, true)
        // first agruement missing or bad
       // xhttp.open( "", "/atse.html", true)     
        // xhhtp.open( null , "http://www.byui.edu", true)
        
    }
    else
    {
        console.log("Broswer can't support XMLHTTP")
    }
}

// make multiple requests so that you can see the 