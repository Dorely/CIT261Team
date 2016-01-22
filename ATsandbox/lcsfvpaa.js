var x = 0

//nasty path 
// var x = 4h
// can't start a var with a number

function loop() {
    var text = ""
    
    for(var i = 1; i <= 10; i++){
        text += i + "<br>"
    }
    display(text)
}

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
}

var words = [];
function add(){
    words.push(document.getElementById("wordField").value)
}

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
        for(var i = 0; i < words.length; i++ ){
            text += words[i] + "<br>"  
        }
        document.getElementById("arrayDisplay").innerHTML = text
        document.getElementById("arrayDisplayToString").innerHTML = words.toString()
    }
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

// Inheritance
var objA = Object.create(cats);

console.log(objA.Bob);

//nasty path
// for getting brackets on a function

// nasty path
    //for(;;) while result in a forever loop

// nasty path
    // diplay(text) there is no function named that
    // or giving it passing a null will print nothing. 

//nasty path
    // while(true) will need a break. no good programming

//nasty path
// function display() no paramater will never be called.


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