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
            if (xhttp.readyState == 4 && xhttp.status == 200)
            {
                console.log(xhttp.responseText)
            
            }
            else if(xhttp.status == 404)
            {
                console.log("Server responded with a 404")
            }
        }
        xhttp.open("GET", "http://www.byui.edu", true)
        xhttp.send();
        //nasty path
        // having a bad path
        xhttp.open("GET", "bla bla", true)
        xhttp.send()
        
        
    }
    else
    {
        console.log("Broswer can't support XMLHTTP")
    }
}