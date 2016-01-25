/**
 * Created by Jonathan on 1/20/2016.
 */

function changeCSS(){

    var element = document.getElementById("cssDiv")
    element.style.background = "green"
    console.log(element.style.opacity)

}

function opacityPlus(){
    var element = document.getElementById("cssDiv")
    currentOpacity = Number(element.style.opacity)
    console.log(currentOpacity)
    if(currentOpacity<1){
        element.style.opacity = currentOpacity+.1
    }

    //nasty path
    //element.style.opacity = element.style.opacity * 1 +.1
    // this doesnt work because element.style.[attribute] returns a string value and "+" contatenates instead of math
}

function opacityMinus(){
    var element = document.getElementById("cssDiv")
    currentOpacity = Number(element.style.opacity)
    console.log(currentOpacity)
    if(currentOpacity>0){
        element.style.opacity = currentOpacity-.1
    }

    //nasty path
    //element.style.opacity-=.1
    // unlike the + example this one actually work because the "-" does not have a string operation and it casts it to a number implicitly
}