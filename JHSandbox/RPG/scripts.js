

function callOnLoad(){

    addTouchListeners();

    var divs = document.getElementsByTagName("div");

    for(var i=0 ;i<divs.length;i++){
        divs[i].addEventListener("click",function(event){
            console.log(event);
        })
    }

}

function addTouchListeners(){

    window.addEventListener("click",slideOut)
    console.log("events added")

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
    window.addEventListener("click",slideTogethor)

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






