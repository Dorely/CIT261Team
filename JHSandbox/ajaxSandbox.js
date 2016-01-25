/**
 * Created by Jonathan on 1/22/2016.
 */
//Using XMLHTTPRequest to Consume a JSON Web Service

function ajaxSandbox(){

    //happy path getting rexburgs weather data
    var data = "http://api.openweathermap.org/data/2.5/weather?zip=83440,us&appid=44db6a862fba0b067b1930da0d769e98";
    var http_request = new XMLHttpRequest();

    http_request.onreadystatechange = function () {

        if (http_request.readyState == 4) {
            var jsonObj = JSON.parse(http_request.responseText);

            console.log(jsonObj.name);
            console.log(jsonObj.weather[0].description);
        }
    };

    http_request.open("GET", data, true);
    http_request.send();
}

function ajaxNastyPath(){
    var data = "http://api.openweathermap.org/data/2.5/weather?zip=83440,us&appid=44db6a862fba0b067b1930da0d769e98";
    var http_request = new XMLHttpRequest();

    //nasty trying different ready codes
    http_request.onreadystatechange = function () {

        if (http_request.readyState == 3) {// no noticable difference
            console.log("Testing code 3")
            console.log(http_request.responseText)
        }
    };

    http_request.open("GET", data, true);
    http_request.send();

    var http_request2 = new XMLHttpRequest();

    //nasty trying different ready codes
    http_request2.onreadystatechange = function () {

        if (http_request2.readyState == 2) {// no data is transferred
            console.log("Testing code 2")
            console.log(http_request2.responseText)
        }
    };

    http_request2.open("GET", data, true);
    http_request2.send();

    var http_request3 = new XMLHttpRequest();

    //nasty trying different ready codes
    http_request3.onreadystatechange = function () {

        if (http_request3.readyState == 1) {// no data is transferred this response shows up first before
            console.log("Testing code 1")
            console.log(http_request3.responseText)
        }
    };

    http_request3.open("GET", data, true);
    http_request3.send();

    var http_request4 = new XMLHttpRequest();

    //nasty trying different ready codes
    http_request4.onreadystatechange = function () {

        if (http_request4.readyState == 0) {//doesnt even seem to enter this statement at all
            console.log("Testing code 0")
            console.log(http_request4.responseText)
        }
    };

    http_request4.open("GET", data, true);
    http_request4.send();
}

function ajaxNastyPath2(){
    //nasty path giving a bad URL
    //var data = "http://google.com"; //cross origin dissallowed
    //var data = "http://www.byui.edu"; //returns part of the webpage's html
    //var data = ""; //really strange - returns my own pages html
    var data = null; //returns error BAD URI
    var http_request = new XMLHttpRequest();

    //nasty trying different ready codes
    http_request.onreadystatechange = function () {

        if (http_request.readyState == 4) {
            console.log(http_request.responseText)
        }
    };

    http_request.open("GET", data, true);
    http_request.send();

}