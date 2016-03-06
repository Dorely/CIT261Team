function updateTransition() {

  var el = document.getElementById("img2")
   
  if (el.style.height != "100px") {
    /*console.log(el.getAttribute('id'))
    el.setAttribute("id", "img-2")*/
    el.style.width = "100px"
    el.style.height = "100px"
    el.style.left = "510px"
    el.style.top = "170px"
    console.log(el)
  } else {
    /*console.log("else")
    el = document.getElementById("img-2")
    el.setAttribute("id", "img2")*/
    el.style.width = "300px"
    el.style.height = "300px"
    el.style.left = "400px"
    el.style.top = "70px"
  }
  
}

//var intervalID = window.setInterval(updateTransition, 3000)
// nasty path
//var intervalID = //window.setInterval(updateTransition, 0)
// don't set to zero

function maketransition(){
    var el2 = document.getElementById("img3")
    
    if (el2.style.height != "100px") {
    /*console.log(el2.getAttribute('id'))
    el2.setAttribute("id", "img-3")*/
        el2.style.top = "100px"
        el2.style.width = "100px"
        el2.style.height = "100px"
        el2.style.transition = "width 1s ease, height .2s ease, top .2s ease"
    } else {
    /*console.log("else")
    el2 = document.getElementById("img-3")
    el2.setAttribute("id", "img3")*/
        el2.style.top = "0px"
        el2.style.width = "300px"
        el2.style.height = "300px"
        el2.style.transition = "width .2s ease, height 1s ease, top 1s ease"
    
    }
    
    
    
    
}