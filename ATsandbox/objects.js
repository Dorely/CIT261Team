//Simple object creation
console.log("OBJECTS")
var ojbA = {};

var objB = {
    foo: 2,
    taco: [2, "cheese", "beef"],
    bar: function(){
        console.log("here")
    }
}

console.log(objB.foo)
console.log(objB.bar)
objB.bar()

// Another way creating objects and inheritance.
// an object with a constructor
function Vehicle(year, make, model) {
    this.year = year
    this.make = make
    this.model = model
}




// the object with a method
Vehicle.prototype.trunOn = function() {
    console.log("Vehicle Turned On")   
}




// an object name Car
function Car(year, make, model) {
    this.sound = "VRRRRRM"
    this.type = "Car"
    Vehicle.call(this, year, make, model)
  
}

//Create Car that inherits from Vehcile
// YOU DON'T ALWAYS NEED THE PROTOTYPE PART TO ADD FUNCTION OR ATTRIBUTES.
// THIS WORKS AS WELL Car.constructor = Car
Car.prototype = Object.create(Vehicle.prototype)

//set the constructor property to refer to Car
Car.prototype.constructor = Car

Car.prototype.rev = function(){
     console.log(this.type + " goes " + this.sound)
}




// an object name Truck
function Truck(year, make, model) {
    this.sound = "VRUUUM"
    this.type = "Truck"
    Vehicle.call(this, year, make, model)
   
}



//Create Car that inherits from Vehcile
Truck.prototype = Object.create(Vehicle.prototype)

//set the constructor property to refer to Truck
Truck.prototype.constructor = Truck

Truck.prototype.rev = function(){
     console.log(this.type + " goes " + this.sound)
}




// createing a the new Car object
var myCar = new Car(1991, "Cadillac", "DeVille");
myCar.trunOn()
myCar.rev()

var myTruck = new Truck(1995, "Dodge", "Sport Dakota")
myTruck.trunOn()
myTruck.rev()


//nasty path
var car = new Car();
// this is bad due to the fact the constructor is set and there was nothing was being passed

// nasty path
function Bike(year, make, model) {
    this.sound = "VRRRRRM"
    this.type = "Car"
    Vehicle.call(year, make, model)
  
}
// without the right this in the param

//nasy path 
// for each loop pass a car as the container portion
console.log(Car.length)
for (var i = 0; i < Car.length; i++){
    console.log(Car[i])   
}
// foreach is not a function for Car object
try{
Car.forEach(function(value, index){
    console.log(value)
})
}catch(e){
    console.log(e)
}

//nasty path
//Vehicle.prototype.rev = function(){
//    console.log(type + " goes " + sound)   
//}
// causes an error that will say type and sound is not delcared. Need "this." before type and sound for it to work

//nasty
// making a new method for an object before object is not yet created
//Truck.prototype.rev = function(){
//     console.log(this.type + " goes " + this.sound)
//}
//
//Create Car that inherits from Vehcile
//Truck.prototype = Object.create(Vehicle.prototype)
//
////set the constructor property to refer to Truck
//Truck.prototype.constructor = Truck