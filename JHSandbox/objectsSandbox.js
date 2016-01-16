// Object Creation Functions, Inheritance, Properties, Methods, Instantiation
function objectCreation() {
    
    //happy path
    var myObject = new Object(); //created like this
    myObject.name = "Fir"; //creating object properties like this
    myObject.color = "Green";
    myObject.attribute = "Getting Old";
    myObject.objHeight = 5;
    
    console.log(myObject.attribute);
    
    //attributes can be dynamically set also
    var str1 = "lastname";
    var str2 = "middlename";
    var str3 = "age";
    
    myObject[str1] = "Tree";
    myObject[str2] = "Thingymajig";
    myObject[str3] = 200;
    
    console.log("Tree is "+myObject[str3]);
    
    //nasty path accessing dynamically created properties
    console.log("Tree is "+myObject.str3); //one would expect this to result in the age, but it does not, instead undefined is returned
    console.log("Tree is "+myObject.age); //this works but is bad form as if the name gets changed this would result in an error
    
    
    //object initializers 
    //happy path
    var mySecondObject = { 
        property_1:   "value_1",   // property_# may be an identifier
        2:            "value_2",   // or a number
        "property n": "value_n" }; // or a string
    
    console.log(mySecondObject.property_1);
    
    //nasty path accessing properties identified by numbers
    //console.log(mySecondObject.2); //this results in a reference error and crashes the function
    console.log(mySecondObject[2]);//instead access like this
    
    //constructor functions
    function myThirdObject(first, middle, last) {
        this.first = first;
        this.middle = middle;
        this.last = last;
    }
    
    var person = new myThirdObject("Abe","","Lincoln");
    
    console.log(person.first);
    
    //nasty path initializing with nulls
    var person2 = new myThirdObject(null,null,null); //no errors    
    console.log(person2.first); //no errors
    
    //nasty path nested constructors
   function myFourthObject(first, middle, last) {
        this.first = first;
        this.middle = middle;
        this.last = last;
       
       //this does not make an error but can only be accessed within this function
        function nestedObject(name) {
            this.name = name;
        }
       
       this.hiddenObject = new nestedObject("Hidden Object");
    }
    
    var person3 = new myFourthObject("Jonathan",null,null);
    
    console.log(person3.hiddenObject.name);
    
    //var person4 = person3.nestedObject("Natalie"null,null); //this doesnt work reference error
    
    //this will created an object with a method that creates another type of object
    function myFifthObject(name) {
        this.name = name;
        this.mySixthObject = function(name){
            this.name = name;
        }
    } 
    
    //this worked
    var person4 = new myFifthObject("Dude");
    var person5 = new person4.mySixthObject("Hidden Dude");
    
    console.log(person5.name);
    
    
}

function objectInheritance(){
    
    //happy path with Object.create
    var obj1 = {a:1};
    console.log(obj1.a);
    var obj2 = Object.create(obj1);
    obj2.b=2;
    console.log(obj2.a+" "+obj2.b);
    var obj3 = Object.create(obj2);
    obj3.c=3;
    console.log(obj3.a+" "+obj3.b+" "+obj3.c);
    
    //nasty path creating based on null    
    var obj4 = Object.create(null);
    console.log(obj4.hasOwnProperty);
    
    //nasty path accessing properties not inherited
    console.log(obj1.b); //returns undefined
           
}

function objectProperties(){
    
    //happy path
    var newObject = new Object();
    var str = "name";
    
    newObject.type = "Dot syntax";
    newObject["string"] = "String Literal";
    newObject[str] = "String value";
    
    console.log(newObject.type+" "+newObject.string+" "+newObject[str]);
    
    //nasty path other types of attribute indexes
    var obj = new Object();
    newObject[obj] = "Object";
    newObject[""] = "emptystring"
    newObject["date created"] = "String with space";
    
    console.log(newObject[obj]+" "+newObject[""]+" "+newObject["date created"]);
    
}

function objectMethods(){
    
    //happy path adding a method to an object
    var Square = new Object();
    function calcArea(height, width){       
        return height*width;
    }
    Square.area = calcArea;
    console.log(Square.area(10,5));
    
    //happy path building methods in constructor function
    
    function person(firstName, lastName) {
        this.firstName = firstName; 
        this.lastName = lastName;
        this.changeName = 
            function (name) {
                this.lastName = name;
            };
    }
    
    var jon = new person("jon","harmon");
    jon.changeName("got married")
    
    console.log(jon.lastName);
    
    //nasty path hard to access hidden constructor method
    function oneObject(first, middle, last) {
        this.first = first;
        this.middle = middle;
        this.last = last;
       
       //this does not make an error but can only be accessed within this function
        function nestedObject(name) {
            this.name = name;
        }
       
       this.hiddenObject = new nestedObject("Hidden Object");
    }
    
    var person3 = new oneObject("Jonathan",null,null);
    
    console.log(person3.hiddenObject.name);
}


