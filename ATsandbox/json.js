console.log("JSON")
// JSON stands for Javascript Object Notation
// its just like making an object in objects.js file
var foo = {
    make: "General Motors",
    year: 1999,
    model: "Serria"
}

function replacer(key, value){
    //happy path 
    if (typeof value === "string"){
        return undefined
        }
    
    return value;
}

var jsonString = JSON.stringify(foo, replacer)

console.log(jsonString)

var jsonString1 = JSON.stringify(foo)

console.log(jsonString1)
//nasty
// not haveing a =
//var foo {
//    model: "General Motors",
//    year:    
//}