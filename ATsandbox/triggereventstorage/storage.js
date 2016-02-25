//STORAGE

function localStorage(){
    // happy path to creating storage   
    //localStorage.setItem("lastname", "Thurman") // for some reason it says it's not a function.
    //localStorage.getItem("lastname") // ditto
    
    
    localStorage.lastname = "Thurman"
    
    console.log(localStorage.lastname)
    
    //localStorage.removeItem("lastname") // ditto
}