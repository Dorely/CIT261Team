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

    //nasty path altering iterator inside loop
    var j=0
    for(var i=0;i<20;i++){
        i--;//this will undo the loops iteration essentially making this infinite
        j++;
        console.log(i+" "+j);
        if(j>10){
            break;
        }
    }

    //nasty path altering the iterator inside the loop again
    for(var i=0;i<20;i++){
        i+=1;
        console.log(i);
        //this will run only 10 times instead of the expected 20
    }

    //nasty path for loop everytime you go through the loop remove the item from the array.remove()

    //happy path while loops
    var i=0;
    while(i<10){
        i++
        console.log(i)
    }

    //happy path while loop with boolean
    var done = true;
    i=0;
    while(done){
        i++
        console.log(i)
        if(i>10){
            done=false
        }
    }

    //nasty path infinite while loop
    i=0
    while(true){
        i++
        console.log(i)
        if(i>10){
            break;
        }
    }

    //nasty path while loop that never enters

    done =false
    while(done){
        console.log("Shouldnt get here");
    }

    //nasty path while loop using wrong operator

    var x = 0
    var y = 1

    while(x=y){//no error, just not what you would expect
        console.log("x is not equal to y this shouldnt show")
        break;
    }

    //happy path for/in loop
    var rectangle = {height:20,width:10}

    for(x in rectangle){
        console.log(x)
        console.log(rectangle[x])
    }

    //nasty path using empty variable
    var empty
    for(y in empty){
        console.log(y)
        console.log(rectangle[y])
        console.log("for in loop empty")
    }

    //nasty path for in loop using same variable as both

    for(rectangle in rectangle){
        console.log(rectangle)
        console.log(rectangle[rectangle])
        console.log("for in loop rectangle")

    }
}

function conditionalSandbox(){

    //happy path if/else if/else statement
    var condition1 = true;
    var condition2 = false;

    if(condition1){
        console.log("if statement entered1")
    }else if(condition2){
        console.log("else if statement entered1")
    }else{
        console.log("else statement entered1")
    }

    if(condition2){
        console.log("if statement entered2")
    }else if(condition1){
        console.log("else if statement entered2")
    }else{
        console.log("else statement entered2")
    }

    if(condition2){
        console.log("if statement entered3")
    }else if(condition2){
        console.log("else if statement entered3")
    }else{
        console.log("else statement entered3")
    }

    //nasty path if statements

    var x = 0;
    var y = 1;

    if(y){
        console.log("if statement entered4")
    }else if(y){
        console.log("else if statement entered4")
    }else{
        console.log("else statement entered4")
    }

    if(y=x){
        console.log("if statement entered5")
    }else if(x=y){
        console.log("else if statement entered5")
    }else{
        console.log("else statement entered5")
    }

    x=true
    y=1
    if(y===x){
        console.log("if statement entered6")
    }else if(x==y){
        console.log("else if statement entered6")
    }else{
        console.log("else statement entered6")
    }

    //happy path ternary operator
    condition1 = true
    condition2 = false

    console.log(condition1 ? "true":"false")
    console.log(condition2 ? "true":"false")
    console.log(condition2 ? "first if": condition2 ?"second if" :"else")

}

function functionSandbox(){

    //happy path function declaration
    function multiply(x, y) {
        return x * y;
    }

    var divide = function(x, y) {
        return x / y;
    };

    var add = function func_name(x, y) {
        return x + y;
    };

    console.log(multiply(5,10))
    console.log(divide(5,10))
    console.log(add(5,10))

    //happy path recursive function
    function recursion(number){
        number+=number;
        console.log(number)
        if(number<300) {
            recursion(number)
        }else{
            return number;
        }
    }
    recursion(1)

    //lookup difference between head recursion and tail recursion

    //nasty path recursion infinite
    //recursion(0) //this would be infinite in the current implementation of recursion
    function recursion2(number){
        number+=number;
        console.log(number)
        if(number<= 0) {
            return number;
        }else if(number<300){
            recursion2(number)
        }else{
            return number;
        }
    }
    recursion2(0)
}

function variablesSandbox(){

    //happy path variable declarations
    var x;
    x=5;
    var y=6;
    var a,b;
    var c,d=4;

    //nasty path
    var f= g, g="value of g"
    console.log(f+" "+g)

    //nasty path text input box retrieves numeric value out of it and add 1
    //to fix this multiply by 1 before operating

    //nasty path hoisted variables
    q=10
    console.log(q)
    var q

    //happy path global variables
    globalExample()

    function globalExample(){
        console.log(q+" global scope")
        var localScope = "Internal Message"
        console.log(localScope)
    }

    //console.log(localScope); //reference error

}

function parametersSandbox(){

    //happy path function with parameters
    var x = function(y){
        console.log("Parameter value = "+y)
    }
    x("words")

    //happy path function with optional parameters(or default values)

    //var z= function(a,b = 1){//works but IDE thinks this is an error
    //    console.log(a+" "+b)
    //}
    //
    //z(5)
    //z(5,5)

    //nasty path function that has no declared parameters but which you pass parameters and use them

    //function that requires multiple parameters but you dont pass them all

    //nasty path passing objects by reference

    var car = new Object()
    car.make = "Ford"
    car.model = "Festiva"

    function passByReference(newCar){
        console.log(newCar.make+" "+newCar.model)
        console.log(car.make+" "+car.model)
        newCar.model = "Fusion"
        console.log(newCar.make+" "+newCar.model)
        console.log(car.make+" "+car.model)
    }
    passByReference(car)
    console.log(car.make+" "+car.model)
}

function arraysSandbox(){

    //happy path arrays
    var ar1 = []
    ar1[0] ="one"
    ar1[1] = "two"

    var ar2 = [1,2,3,4,5]

    //demonstrating push
    ar2.push(6)
    console.log(ar2.toString())

    //desmonstrating pop
    ar2.pop()
    console.log(ar2.toString())

    //demonstrating shift
    ar2.shift()
    console.log(ar2.toString())

    //demonstrating unshift
    ar2.unshift("one")
    console.log(ar2.toString())

    //demonstrating indexOf
    console.log(ar2.indexOf("one"))//returns 0

    //insert method happy path and nasty path
    //bro Barney mentioned, cannot find
    //all internet says to use splice
    //remove method
    //bro Barney Mentioned, cannot find
    //internet says to use splice


    //for loop array length
    for(var i=0;i<ar2.length;i++){
        console.log(ar2[i])
    }

    //demonstrating foreach loop
    var ar3 = ["One","Two","Three","Four","Five"]

    ar3.forEach(function(element,index,array){//accepts up to these three arguments but as few as one
        console.log(element+" "+index+" "+array.toString())
    })

    //remove item[s] by index with splice
    var removed = ar2.splice(0,2)
    console.log(removed)
    console.log(ar2.toString())

    //insert items with splice at an index
    var toBeAdded = "words here"
    ar2.splice(3,0,toBeAdded)
    console.log(ar2)

    //copy items by index with slice
    var copied = ar2.slice(0,2)//or the whole array ar2.slice() with no parametes
    console.log(copied)
    console.log(ar2.toString())

    //two dimensional arrays
    var ar2d =[
        [1,2,3,4,5,6,7,8,9,10],//index [0][0-9]
        [11,12,13,14,15,16,17,18,19,20]//index [1][0-9]
    ]

    console.log(ar2d[0][0])
    console.log(ar2d[0][1])
    console.log(ar2d[1][0])

    //nasty path invalid parameters various methods
    var newArray = new Array()
    console.log(newArray.pop())
    console.log(newArray[null] = "null value")
    console.log(newArray[null])//why does this work????
    console.log(newArray[-1]="negative one")

    console.log(newArray)
    console.log(newArray[-1])//why does this work????
    console.log(ar3)
    console.log(ar3.slice(10,20))
    console.log(ar3)
    console.log(ar3.slice(-2,5))//im so confused by this
    console.log(ar3)
    ar3.splice(10,20)
    console.log(ar3)
    ar3.splice(-2,5)//and this
    console.log(ar3)
    ar3.splice(-10,0,toBeAdded)
    console.log(ar3)
    ar3.splice(1,2,toBeAdded)
    console.log(ar3)
    //car3.splice(100,1,toBeAdded) // exception referenceError
    console.log(ar3)


    //foreach that changes array inside
    var ar4 = [1,2,3,4,5,6,7,8,9,10]
    ar4.forEach(function(element,index,array){
        console.log(array.toString()+" pop")
        array.pop()
    })

    var ar4 = [1,2,3,4,5,6,7,8,9,10]
    ar4.forEach(function(element,index,array){
        console.log(array.toString()+" shift")
        array.shift()
    })
}

function associativeSandbox(){

    //it is considered bad practice to use an array as an associative array, because instead of actually being an associative array
    //you are actually just setting arbitrary properties on the object itself, not actually array values
    //as such this is the proper way using an Object

    //happy path Object associative arrays
    var assAr = new Object()
    assAr["one"] = 1
    assAr["two"] = 2

    for(element in assAr){
        console.log(element)
    }
    console.log(assAr)

    //nasty path using an array to do this
    var assAr2 = []
    assAr2["three"] = 1
    assAr2["four"] = 2

    for(element in assAr2){//still works, not proper
        console.log(element)
    }
    console.log(assAr2)
}