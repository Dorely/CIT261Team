//STORAGE

function storeIt(){
      
    //localStorage.setItem("lastname", "Thurman")
    //localStorage.getItem("lastname")
    
    // happy path to creating storage 
    localStorage.lastname = "Thurman"
    
    localStorage.age = 24
    //localStorage.removeItem("lastname")
    
    var list = [1,3,7,5,9]
    // storing an array
    localStorage.numList = list
    
    var people = {"array":[
        {"first":"Andrew", "last":"Thurman"},
        {"first":"Clarke", "last":"White"},
        {"first":"Jared", "last":"Thurman"}]}
    
    localStorage.peopleList = JSON.stringify(people)
    
    var randonSample = {
        num: 3,
        arry: [1, "Fish", 2, "Fish"],
        method: function(){
            return true
        }    
    }
    
    localStorage.randomThing = randonSample
    
    //nasty path works for both local and session
    //localStorage.88 = "Outatime" Unexpected number COMPILER ERROR
    //can't store stuff with numbers
    localStorage.null = "string"

}

function sStorage(){
    
    sessionStorage.fName = document.getElementById("fName").value
    
}

function displayLocal(){
    //happy path on retriving items
    console.log(localStorage.lastname)
        
    console.log(localStorage.age)
    
    console.log(localStorage.numList)
    
    console.log(localStorage.peopleList)
    
    console.log(localStorage.randomThing)
    
    //nasty path
    //not stored in Storage
    console.log(localStorage.null) // actually stored string
    // a number
    //console.log(localStorage.6) compiler error
}

function displaySession(){
    
     console.log(sessionStorage.fName)
    
}