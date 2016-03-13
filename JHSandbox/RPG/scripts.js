


function callOnLoad() {

    addTouchListeners();

    console.log(window.innerWidth)
    console.log(window.innerHeight)

    //TODO Come back to this later
    window.addEventListener("resize",function(event){

        //alert(window.innerHeight)

    })
    //set the initial length to equal the screen length on small screens
    //750 is the width of iphone 6
    if (window.innerWidth < 750) {
        var mainDiv = document.getElementById("mainDiv")
        var height = window.innerHeight
        var width = (height/16)*9 //calculate width keeping with 9:16 ratio
        mainDiv.style.minHeight = height + "px"
        mainDiv.style.minWidth = width + "px"
    }



}

function addTouchListeners(){

    window.addEventListener("click",slideOut)
    console.log("events added")

    var mainGameDiv = document.getElementById("gameMainDiv")

    mainGameDiv.addEventListener("click",function(event){
        console.log(event)
    })

    var topButton = document.getElementById("topClassButton")
    var middleButton = document.getElementById("middleClassButton")
    var bottomButton = document.getElementById("bottomClassButton")

    console.log(topButton)
    console.log(middleButton)
    console.log(bottomButton)

    topButton.addEventListener("click",buttonSelect)
    middleButton.addEventListener("click",buttonSelect)
    bottomButton.addEventListener("click",buttonSelect)



}

function buttonSelect(button){

    //console.log(button.target.id)

    var id = button.target.id

    var topButton = document.getElementById("topClassButton")
    var middleButton = document.getElementById("middleClassButton")
    var bottomButton = document.getElementById("bottomClassButton")


    if(id == "topClassButton"){
        topButton.style.transform = "translateX(-15%)"
        middleButton.style.transform = "translateX(0%)"
        bottomButton.style.transform = "translateX(0%)"
    }else if(id == "middleClassButton"){
        topButton.style.transform = "translateX(0%)"
        middleButton.style.transform = "translateX(-15%)"
        bottomButton.style.transform = "translateX(0%)"
    }else{
        topButton.style.transform = "translateX(0%)"
        middleButton.style.transform = "translateX(0%)"
        bottomButton.style.transform = "translateX(-15%)"
    }


}

function slideOut(){
    var topImage = document.getElementById("topImage")
    var bottomImage = document.getElementById("bottomImage")

    topImage.className = "transitionProperties1"
    topImage.style.transform = "translate(-2%,-2%)"

    bottomImage.className = "transitionProperties1"
    bottomImage.style.transform = "translate(2%,2%)"

    window.removeEventListener("click",slideOut)
    topImage.addEventListener("transitionend",slideApart)

    console.log("slideOut")
}

function slideApart(){
    var topImage = document.getElementById("topImage")
    var bottomImage = document.getElementById("bottomImage")

    topImage.className = "transitionProperties2"
    bottomImage.className = "transitionProperties2"

    topImage.style.transform = "translate(-2%,-100%)"
    bottomImage.style.transform = "translate(2%,100%)"

    topImage.removeEventListener("transitionend",slideApart)
    //window.addEventListener("click",slideTogethor)

    console.log("slideApart")

}

function slideTogethor(){
    var topImage = document.getElementById("topImage")
    var bottomImage = document.getElementById("bottomImage")

    topImage.className = "transitionProperties2"
    bottomImage.className = "transitionProperties2"

    topImage.style.transform = "translate(-2%,-2%)"
    bottomImage.style.transform = "translate(2%,2%)"

    window.removeEventListener("click",slideTogethor)
    topImage.addEventListener("transitionend",slideIn)

    console.log("slideTogethor")

}

function slideIn(){
    var topImage = document.getElementById("topImage")
    var bottomImage = document.getElementById("bottomImage")

    topImage.className = "transitionProperties1"
    topImage.style.transform = "translate(0%,0%)"

    bottomImage.className = "transitionProperties1"
    bottomImage.style.transform = "translate(0,0%)"

    topImage.removeEventListener("transitionend",slideIn)
    window.addEventListener("click",slideOut)

    console.log("slideIn")
}






