//DOM Manipulation Using createElement, appendChild, insertBefore, removeChild, etc.

function createElementSandbox(){
    console.log("createElementSandbox Called")

    //happypath createElement
    var element = document.createElement("div");
    console.log(element)

    //nasty path bad input
    var number = 10
    //var element2 =document.createElement(number)
    //console.log(element2)                         // this breaks things
    var badString = "string with spaces"
    //var element3 = document.createElement(badString)
    //console.log(element3)                         // this breaks things
    var badTag = "justSomeXMLData"
    var element4 = document.createElement(badTag)   // this works just fine
    console.log(element4)

    //happy path atrribute creation
    element.setAttribute("id","newDiv")
    console.log(element)
    var attr = element.getAttribute("id")
    console.log(attr)
    element.setAttribute("id","newNewDiv")
    console.log(element)

    //nasty path attributes
    //var attr = document.createAttribute("id") //this method is deprecated and throws an error on use
    //element.setAttributeNode(attr)            //this method is deprecated and throws an error on use
    //attr.value = "newDiv"

    //happy path text node creation
    var textNode = document.createTextNode("inside the newNewDiv")
    console.log(textNode)

    //nasty path textnode giving it an element
    var badTextNode = document.createTextNode(element) //works just doesnt do much
    console.log(badTextNode)

    //what happens in createelement if you pass null


}

function appendChildSandbox(){
    //happy path appendChild
    var element = document.createElement("div")
    var element2 = document.createElement("div")
    var  element3 = document.createElement("div")
    var text1 = document.createTextNode("firstAppendedDiv")
    var text2 = document.createTextNode("secondAppendedDiv")

    element2.appendChild(text1)
    element3.appendChild(text2)
    element.appendChild(element2)
    element.appendChild(element3)
    console.log(element)

    var currentDiv = document.getElementById("appendChildDiv")
    currentDiv.appendChild(element)

    //nasty path appending itself as a child
    //currentDiv.appendChild(currentDiv) // this creates an error and halts the program

    //nasty path using non element objects to append
    var badString = "hi there!"
    //currentDiv.appendChild(badString) //throws error "not an object"

    //nasty path innerHtml overwriting appended divs
    //currentDiv.innerHTML = "new content" //this not only overwrites everything just appended, it also overwrites the button

    //nasty path appending null
    try{
        currentDiv.appendChild(null)
    }catch(e){
        console.log(e)
    }
    //append something to some element, then append that second element to something else
    var newElement = document.createElement("span")
    newElement.innerHTML = "Span element"
    currentDiv.appendChild(newElement)
    var nextDiv = currentDiv.lastElementChild
    nextDiv.appendChild(newElement) //this appears as if it is just getting ignored

}

var i = 1
function insertBeforeSandbox(){
    //happy path insert before
    var element = document.createElement("div")
    element.innerHTML = "newDiv "+ i
    var parentElement = document.getElementById("insertBeforeDiv")
    //var childElement = parentElement.firstElementChild //this will always insert the new div as the first child div
    var childElement = document.getElementById("insertInnerDiv")//this will always insert the new div above the selected element

    console.log(parentElement)
    console.log(childElement)

    parentElement.insertBefore(element,childElement)
    i++

    //nasty path using a node thats not a child
    var outOfScopeElement = document.getElementById("createElementDiv")
    console.log(outOfScopeElement)
    //parentElement.insertBefore(element,outOfScopeElement) //returns notFoundError

    //nasty path using itself as the child
    try{
        parentElement.insertBefore(element,parentElement)// returns notFoundError
    }catch(e){
        console.log(e.toString())
    }

    //nasty path inserting itself
    try{
        parentElement.insertBefore(parentElement,childElement)//throws HierarchyRequestError
    }catch(e){
        console.log(e.toString())
    }

    //nasty path bad inputs - move these to the end and console log things
    //console.log(parentElement.insertBefore(element,null))// no error just does nothing - had to remove as it messed up my happy path
    try{
        //parentElement.insertBefore(null,childElement) // throws type error
    }catch(e){
        console.log(e)
    }

    try{
        //parentElement.insertBefore(null,null) //throws type error
    }catch(e){
        console.log(e)
    }
}

function removeChildSandbox(){
    //happy path removeChild
    var parentElement = document.getElementById("removeChildDiv")
    var childElement = parentElement.lastElementChild //removing last child each time this is pressed. this will eventually reach the button child
    parentElement.removeChild(childElement)

    //nasty path trying other inputs - change to try catch
    try{
        parentElement.removeChild(null)//throws TypeError
    }catch(e){
        console.log(e.toString())
    }

    try{
        parentElement.removeChild(parentElement)//throws NotFoundError
    }catch(e){
        console.log(e.toString())
    }

    try{
        childElement = document.createElement("span")
    }catch(e){
        console.log(e.toString())
    }

    try{
        parentElement.removeChild(childElement)//NotFoundError
    }catch(e){
        console.log(e.toString())
    }

}

function replaceChildSandbox(){
    //happy path replaceChild
    var parentElement = document.getElementById("replaceInnerDiv")
    var firstChild = parentElement.firstElementChild
    var newElement = document.createElement("div")
    newElement.innerHTML = "New Element"

    console.log(parentElement)
    console.log(firstChild)
    console.log(newElement)

    //happy path works
    parentElement.replaceChild(newElement,firstChild)

    //nasty path swapping incorrectly
    firstChild = parentElement.firstElementChild
    var secondChild = firstChild.nextElementSibling

    //parentElement.replaceChild(secondChild,firstChild) // I thought this would swap things, its actually just a big mess
    //parentElement.replaceChild(firstChild,secondChild)

    //doing it this way works
    newFirstChild = firstChild.cloneNode(true)
    newSecondChild = secondChild.cloneNode(true)
    parentElement.replaceChild(newSecondChild,firstChild)
    parentElement.replaceChild(newFirstChild,secondChild)
}