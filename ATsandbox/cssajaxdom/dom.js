function createElem(){
    console.log("createElement() called")
    
    // happypath creating element
    var element = document.createElement("div")
    console.log(element)
    
    var element3 = document.createElement("thisworks")
    console.log(element3)
    
    //nastypath
    //var element1 = document.createElement(20)
    //console.log(element1)
    // not a valid name
    
    //var element2 = document.createElement("this string")
    // not a valid name
    console.log("creating an atrribute")
    //happy path of createing an attribute
    element.setAttribute("id", "newDiv")
    console.log(element)
    element3.setAttribute("class", "newClass")
    console.log(element3)
    
    console.log("creating text node")
    // happy path putting a text node in an element
    var tNode = document.createTextNode("A new string formed")
    element.appendChild(tNode)
    
}

//nastypath
//function createElement()
// calling you function this doesn't work cuz its save by js

function append(){
    console.log("Appending")
    //happy path appendChild
    var element = document.createElement("div")
    var element1 = document.createElement("div")
    
    var text = document.createTextNode("First Div")
    var text1 = document.createTextNode("Second Div")
    
    element.appendChild(text)
    element1.appendChild(text1)
    
    element.appendChild(element1)
    console.log(element)
    
    var connect = document.getElementById("parent")
    connect.appendChild(element)
    
    //nasty path
    //appending itself to itself
    //connect.appenChild(connect)
    
    //trying to append non node items
    var string = "asdfasdfa"
    //connect.appendChild(string)
    // says its not a node
    
    
}

function inBefore(){
    console.log("Inserting")
    // happy path inserting before 
    var element = document.createElement("div")
    element.innerHTML = "Insert Before"
    
    var beforeElem = document.getElementById("child")
    var afterElem = document.getElementById("parent")
    
    afterElem.insertBefore(element, beforeElem)
    
    //nasty path
    //inserting afterElem 
    try{
        afterElem.insertBefore(element,afterElem)
    }catch(e){
        console.log(e)
    }
    
    // null arguments
    //afterElem.insertBefore(null, null)
    // causes the elent to be inserted like a normal append
    
}

function removeEl(){
    console.log("removing child")
    
    //happy path removing elements
    var element = document.getElementById("rmParent")
    var rm = element.lastElementChild
    console.log(rm)
    
    // this is both happy and nasty. when there is nothing to delete you 
    // can catch an error
    try{
        element.removeChild(rm)
    }catch(e){
        console.log(e)
    }
    
    // nasty path
    var element1 = document.createElement("img")
    //element.removeChild(element1) can't find it
}

function replace(){
    
    //happy path replacing
    var parentElement = document.getElementById("rmParent")
    var child = parentElement.lastElementChild
    
    var newElement = document.createElement("img")
    newElement.setAttribute("src","http://weneedfun.com/wp-content/uploads/2015/10/Beautiful-Food-Photos-1.jpeg")
    console.log(newElement)
    
    parentElement.replaceChild(newElement, child)

    // nasty path
    // parentElement.replaceChild(null, null)
    //parentElement.replaceChild(newElement,null) // or the other way
    //parentElement.replaceChild(newElement,newElement)
}
























