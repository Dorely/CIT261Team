console.log("AJAX")

function makeRequest(){
    console.log("Making Requests")
    
    var xhttp
    if(window.XMLHttpRequest)
    {
        xhttp = new XMLHttpRequest()
    }
    else if (window.ActiveXObject)
    {
       xhttp = new ActiveXObject("Microsoft.XMLHTTP") 
    }

    if (xhttp != null)
    {
        xhttp.onreadystatechange = function()
        {
            // nasty path
            // if (xhttp.readyState == 2 && xhttp.status == 200) nothing gets done
            if (xhttp.readyState == 4 && xhttp.status == 200)
            {
                console.log(xhttp.responseText)
            
            }
            else if(xhttp.status == 404)
            {
                console.log("Server responded with a 404")
            }
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