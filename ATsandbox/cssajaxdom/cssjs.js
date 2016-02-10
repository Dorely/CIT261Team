//Manipulating css class using javascript

// easiet way to do it with ID's

function change(){
    var element = document.getElementById("area")
    element.style.backgroundColor = "#ffaa44"
}

function run(){
    
    var element = document.getElementById("box")
    // nasty path 
    element.style.width = null // this take the value away
    // seting it to a string
    element.style.height = "bob" // this doesn't do anything
    // setting it to a number and giving a number when expecting a string
    element.style.backgroundColor = 7 // deletes it the orginal
    element.style.height = 7 // still doesn't do anything
    //setting width and height to negative
    element.style.height = "-300px"// doesn't change the value at all
    element.style.width = "-20px"// doesn't change the value at all
    element.style.width = "20px"
    element.style.backgroundColor = "red"
    
}

// but ID's only have one instance. what if you want alot to change at once that have the same css properties
var inElement = document.getElementsByClassName("inside")
console.log(inElement)
inElement[0].style.width = "300px"
inElement[0].style.height = "300px"
inElement[0].style.backgroundColor = "#000000"

//nasty path
//inElement.style.width = "300px"
//results in an error because document.getElementsByClassName() returns an array

//inElement[].style // undefiend
//inElement[1].style // undefiend because it's out of scope for this code.