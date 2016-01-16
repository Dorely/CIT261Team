//JSON Parse, Stringify

function jsonSandbox(){

    //JSON Rules
    //Data is in name/value pairs
    //Data is separated by commas
    //Curly braces hold objects
    //Square brackets hold arrays

    //happpy path json parse

    var jsonString = '{ "array":[' +
        '{"key1":"value1", "key2":"value2"},' +
        '{"key1":"value3", "key2":"value4"},'+
        '{"key1":"value5", "key2":"value6"}]}';

    console.log(jsonString)
    console.log(JSON.parse(jsonString))

    //nasty path JSON.parse giving it a non JSON string
    try{
        console.log(JSON.parse("Hello World"))
    }catch(e){
        console.log("bad JSON")
    }

    //happy path stringify

    var jsonObject = { "array":[
        {"key1":"value1", "key2":"value2"},
        {"key1":"value3", "key2":"value4"},
        {"key1":"value5", "key2":"value6"}]}
    console.log(jsonObject)

    console.log(JSON.stringify(jsonObject))

    //nasty path stringify with bad inputs

    console.log(JSON.stringify(null))
    var empty;
    console.log(JSON.stringify(empty))
    console.log(JSON.stringify("String value"))

}
