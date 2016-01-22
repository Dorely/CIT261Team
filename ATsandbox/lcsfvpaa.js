var x = 0

//nasty path 
//var 4h
// var can't start a var with a number

//happy
console.log(simple(5))

// nasty path
console.log(simple())
// no params nothing will be added

//happy path continues
function simple(foo){
    var sum = foo + 2
    return sum
}

console.log(noParams("Target", 5, true))

function noParams(){
    return arguments[0]
}
// make another function with no params but pass some to it anyway

function loop() {
    var text = ""
    
    for(var i = 1; i <= 10; i++){
        text += i + "<br>"
    }
    display(text)
}

var sum = 0
var list = [1,3,7,5,9]
list.forEach(function(value, index){
    sum += value
})
console.log(sum)

function wLoop(){
    var num = 1
    var i = 0
    while(i < 1000000){
        document.getElementById("wLoopView").innerHTML = num.toString()
        num++
        i++
    }
}



function display(text){
    document.getElementById("loopView").innerHTML = text
}

function condition(){
    var cond = document.getElementById("ifCon").value
    if(cond == "true"){
        document.getElementById("showCondition").innerHTML = "True"
    }
    else if(cond == "false"){
        document.getElementById("showCondition").innerHTML = "False"
    }
    else{
        document.getElementById("showCondition").innerHTML = "No Bool"
    }
    
    // nasty path
    if (cond = "true"){
        console.log("won't get here")
    }
    // single equals
    
}


function switchCon(){
    var cond = document.getElementById("ifCon").value;
    switch(cond){
        case "true":
            document.getElementById("showCondition").innerHTML = "True";
            break;
        case "false":
            document.getElementById("showCondition").innerHTML = "False"
            break;
        default:
            document.getElementById("showCondition").innerHTML = "No Bool"
            break;
    }
    // nasty path
    switch(cond){
     case "true":
            document.getElementById("showCondition").innerHTML = "True";           
        case "false":
            document.getElementById("showCondition").innerHTML = "False"
            break
        default:
            document.getElementById("showCondition").innerHTML = "No Bool"
    }
    // no breaks

}

var words = [];
function add(){
    words.push(document.getElementById("wordField").value)
}

// van push nulls
words.push(null)
console.log(words)

words = []
words = [1,2,3,4,5]

//nasty path
words.splice(20, 0, "insert")
// this doesn't insert at the specifed index it rather puts it at the end of the array
console.log(words)
console.log(words[20], words[5])

// this isn't bad but it inserts the string at the thrid from the last index position
words.splice(-3, 0, "negative")
console.log(words)
console.log(words.length)

words = ["hello", "world", "nice", "to", "see", "you"]
console.log("Before shift()" , words)
console.log("During shift()" , words.shift())
console.log("After shift()" , words)

console.log("Before unshift()" , words)
words.unshift("HELLO")
console.log("After unshift()" , words)

function clearArray(){
    words = []
    var value = document.getElementById("arrayDisplay").value
    console.log(value);
    document.getElementById("arrayDisplay").innerHTML = ''
    document.getElementById("arrayDisplayToString").innerHTML = ''
}

function showArray(){
    if(words.length == 0){
        document.getElementById("arrayDisplay").innerHTML = "Array is empty"
        document.getElementById("arrayDisplayToString").innerHTML = ''
    }
    else{
        var text = ""
        for(var i = 0; i < words.length; i++){
            text += words[i] + "<br>"  
        }
        document.getElementById("arrayDisplay").innerHTML = text
        document.getElementById("arrayDisplayToString").innerHTML = words.toString()
    }
}

//nasty path
{
    var text = ""
    for(var i = 0; i < words.length; i++){
        text += " " + words[i]  
    }
    console.log(text)
}

function popout(){
    words.pop()  
}

var deck = new Array();
deck['cardK'] = 12;

console.log(deck['cardK'])

//another way is to
var cats = {}// shortcut for "new object()"

cats.fred = "black"
cats["Bob"] = "gray"
// lets access it
console.log(cats.fred)
console.log(cats['fred'])
console.log(cats.Bob)
console.log(cats['Bob']) // doublt qoutes work too

//deletling is easy
delete cats.fred
console.log("deleted " + cats.fred)

cats = {
    fred: "black",
    "Bob": "gray",
    temp: 42
    
};
 
console.log(cats.fred)
console.log(cats.Bob)
console.log(cats.temp)

// nasty path
    //for(;;) while result in a forever loop

//nasty path
    // while(true) will need a break. not good programming

//Bad path
        // for(i = 0; i <= words.length; i++) 
        // goes out ofthe inex bounds

//bad path
//console.log(cats[fred]);
//this will throw an error saying fred is not declared.

//nasty path
// leaving out the commas will result in a compiler error
//cats = {
//    fred: "black"
//    "Bob": "gray"
//    temp: 42
//    
//};