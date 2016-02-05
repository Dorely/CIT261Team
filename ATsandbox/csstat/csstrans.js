function updateTransition() {

  var el = document.getElementById("img2")
   
  if (el) {
    console.log(el.getAttribute('id'))
    el.setAttribute("id", "img-2")
  } else {
    console.log("else")
    el = document.getElementById("img-2")
    el.setAttribute("id", "img2")
  }
   
  return el
}

var intervalID = window.setInterval(updateTransition, 3000)
// nasty path
//var intervalID = //window.setInterval(updateTransition, 0)
// don't set to zero

function maketransition(){
    var el2 = document.getElementById("img3")
    
    if (el2) {
    console.log(el2.getAttribute('id'))
    el2.setAttribute("id", "img-3")
  } else {
    console.log("else")
    el2 = document.getElementById("img-3")
    el2.setAttribute("id", "img3")
    
  }
}