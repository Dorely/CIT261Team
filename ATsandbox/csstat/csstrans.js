function trans(){
    
}

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

function maketransition(){
    var el2 = document.getElementById("img3")
    
    el2.// trying to trigger the transition in the css
}