console.log("JSON")
// JSON stands for Javascript Object Notation
// its just like making an object in objects.js file
var foo = {
    make: "General Motors",
    year: 1999,
    model: "Serria"
}

function replacer(key, value){
    if (typeof value === "string"){
        return undefined
        }
    return value;
}

var jsonString = JSON.stringify(foo, replacer)

console.log(jsonString)

//nasty
// not haveing a =
//var foo {
//    model: "General Motors",
//    year:    2005   
//}

// happy path json parse

var jsonString = '{ "array":[' +
        '{"key1":"value1", "key2":"value2"},' +
        '{"key1":"value3", "key2":"value4"},'+
        '{"key1":"value5", "key2":"value6"}]}';

    console.log(jsonString)
    console.log(JSON.parse(jsonString))
    
    // nasty, just prints null
    console.log(JSON.parse(null))
    
    // nasty trying a normal string to parse
     try{
        console.log(JSON.parse("Hello World"))
    }catch(e){
        console.log(e)
    }

// happy path for another stringy
var jsonString = { "array":[
        {"key1":"value1", "key2":"value2"},
        {"key1":"value3", "key2":"value4"},
        {"key1":"value5", "key2":"value6"}]}

console.log(JSON.stringify(jsonString))

// nasty path bad inputs
console.log(JSON.stringify(null))
console.log(JSON.stringify("String value")) // this one just prints out the arguement

