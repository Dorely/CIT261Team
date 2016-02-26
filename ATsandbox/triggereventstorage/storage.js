//STORAGE

function localStorage(){
      
    //localStorage.setItem("lastname", "Thurman") // for some reason it says it's not a function. setItem
    //localStorage.getItem("lastname") // ditto
    
    // happy path to creating storage 
    localStorage.lastname = "Thurman"
    
    //localStorage.removeItem("lastname") // ditto
    
    var list = [1,3,7,5,9]
    // storing an array
    localStorage.numList = list
    
    var associArray = {"array":[
        {"first":"Andrew", "last":"Thurman"},
        {"first":"Clarke", "last":"White"},
        {"first":"Jared", "last":"Thurman"}]}
    
    localStorage.obj = JSON.stringify(associArray)
    
    var obj1 = {
        num: 3,
        arry: [1, "Fish", 2, "Fish"],
        method: function(){
            return true
        }    
    }
    
    localStorage.object = obj1
    
    //nasty path works for both local and session
    //localStorage.88 = "Outatime" Unexpected number COMPILER ERROR
    //can't store stuff with numbers
    localStorage.null = "string"

}

function sessionStorage(){
    
    sessionStorage.fName = document.getElementById("fName").value
    
}

function displayLocal(){
    //happy path on retriving items
    console.log(localStorage.numList)
    
    console.log(localStorage.obj)
    
    console.log(localStorage.object)
    
    //nasty path
    //not stored in Storage
    console.log(localStorage.null) // comes back a undefined
    // a number
    //console.log(localStorage.6) compiler error
}

function displaySession(){
    
     console.log(sessionStorage.fName)
    
}