


function callOnLoad() {

    addTouchListeners();





}

function addTouchListeners(){

    window.addEventListener("click",slideOut)
    console.log("events added")

    var topButton = document.getElementById("topClassButton")
    var middleButton = document.getElementById("middleClassButton")
    var bottomButton = document.getElementById("bottomClassButton")
    var goButton = document.getElementById("goButton")


    topButton.addEventListener("click",buttonSelect)
    middleButton.addEventListener("click",buttonSelect)
    bottomButton.addEventListener("click",buttonSelect)
    goButton.addEventListener("click",enterGame)


}

function enterGame(){

    var topImageUnder = document.getElementById("topImageUnder")
    var bottomImageUnder = document.getElementById("bottomImageUnder")
    var topButton = document.getElementById("topClassButton")
    var middleButton = document.getElementById("middleClassButton")
    var bottomButton = document.getElementById("bottomClassButton")
    var topButtonUnder = document.getElementById("topClassButtonUnder")
    var middleButtonUnder = document.getElementById("middleClassButtonUnder")
    var bottomButtonUnder = document.getElementById("bottomClassButtonUnder")
    var goButton = document.getElementById("goButton")
    var nameBox = document.getElementById("characterName")
    var gameDiv = document.getElementById("gameMainDiv")

    var imageArray = [topButton,middleButton,bottomButton,topButtonUnder,middleButtonUnder,bottomButtonUnder,goButton,nameBox]

    for(var i=0;i<imageArray.length;i++){
        imageArray[i].className = "transitionProperties2"
        imageArray[i].style.transform = "translateX(-100%)"
    }
    nameBox.style.display = "none";
    topImageUnder.className = "transitionProperties2";
    topImageUnder.style.transform = "translate(-60%,-10%)"

    bottomImageUnder.className = "transitionProperties2";
    bottomImageUnder.style.transform = "translate(60%,10%)"

    topButton.removeEventListener("click",buttonSelect)
    middleButton.removeEventListener("click",buttonSelect)
    bottomButton.removeEventListener("click",buttonSelect)
    goButton.removeEventListener("click",enterGame)

    var frameImage = document.getElementById("frameImage")
    frameImage.style.transform = "scale(1.15,1.1)"

    gameDiv.style.transform = "translate(-50%,-27%)"
    gameDiv.style.zIndex = "0"
    gameDiv.style.opacity = "1"



}

function buttonSelect(event){

    //console.log(button.target.id)

    var id = event.target.id

    var topButton = document.getElementById("topClassButton")
    var middleButton = document.getElementById("middleClassButton")
    var bottomButton = document.getElementById("bottomClassButton")


    if(id == "topClassButton"){
        topButton.style.transform = "translateX(-10%)"
        middleButton.style.transform = "translateX(0%)"
        bottomButton.style.transform = "translateX(0%)"
    }else if(id == "middleClassButton"){
        topButton.style.transform = "translateX(0%)"
        middleButton.style.transform = "translateX(-10%)"
        bottomButton.style.transform = "translateX(0%)"
    }else{
        topButton.style.transform = "translateX(0%)"
        middleButton.style.transform = "translateX(0%)"
        bottomButton.style.transform = "translateX(-10%)"
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

function setScreenSize(){
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




