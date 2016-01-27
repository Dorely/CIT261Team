//Local Storage API, Storing and Retrieving Simple Data, Arrays, Associative Arrays, and Objects


function localStorageSandbox(){

    //happy path storing simple data
    sessionStorage.setItem("variable1","value1")
    console.log(sessionStorage.getItem("variable1"))

    //happy path storing an array
    var arr1 = new Array()
    arr1.push(1);arr1.push(2);arr1.push(3);arr1.push(4);arr1.push(5);

    sessionStorage.setItem("arr1",arr1)//this stores it as a string representation of the array
    console.log(sessionStorage.getItem("arr1"))
    arr1String = sessionStorage.getItem("arr1")
    var arr2 = new Array()
    arr2 = arr1String.split(",")
    console.log(arr2)

    //happy path storing an associative array / object
    var associativeArray = { "array":[
        {"key1":"value1", "key2":"value2"},
        {"key1":"value3", "key2":"value4"},
        {"key1":"value5", "key2":"value6"}]}

    sessionStorage.setItem("object1",JSON.stringify(associativeArray))
    console.log(sessionStorage.getItem("object1"))

    //nasty path storing object with method
    var methodObject = {
        attribute1:"value1",
        array1: [1,2,3,4,5],
        method1: function(){
            return 2+2;
        }
    }

    sessionStorage.setItem("object2",JSON.stringify(methodObject))
    console.log(sessionStorage.getItem("object2")) //the method doesnt get stored or retrieved

    //nasty path invalid parameters

    //null key
    sessionStorage.setItem(null,"value")//this works
    console.log(sessionStorage.getItem(null))//this works

    //null value
    sessionStorage.setItem("nullValue",null)//this also works
    console.log(sessionStorage.getItem("nullValue"))//as does this

    //extra argument
    sessionStorage.setItem("threeArgs","firstValue","value2")//no error here, just ignores the third argument
    console.log(sessionStorage.getItem("threeArgs"))

    //empty string key
    sessionStorage.setItem("","blankValue")//this works no problems
    console.log(sessionStorage.getItem(""))//as does this

    //using int as key and value
    sessionStorage.setItem(1,2)//works
    console.log(sessionStorage.getItem(1))//returns the value as a string


}