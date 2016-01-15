//Loops, Conditional Statements, Functions, Variables, Parameters, Arrays, Associative Arrays

function loopsSandbox(){
    
    //happy path for loop
    for(var i=0;i<10;i++){
        console.log(i);
    }
    
    //nasty path infinite for loop
    for(;;){
        //infinite loop, have to break out of it
        i++
        if(i>20){
            break;
        }
        console.log(i);
    }
    
}