//Manipulating css class using javascript

// easiet way to do it with ID's

function change(){
    var element = document.getElementById("area")
    element.style.backgroundColor = "#ffaa44"
}

// but ID's only have one instance. what if you want alot to change at once that have the same css properties
var inElement = document.getElementsByClassName("inside")
console.log(inElement)
inElement[0].style.width = "300px"
inElement[0].style.height = "300px"
inElement[0].style.backgroundColor = "#000000"

//nasty path
inElement.style.width = "300px"
//results in an error because document.getElementsByClassName() returns an array

inElement[] // undefiend
inElement[1] // undefiend because it's out of scope for this code.