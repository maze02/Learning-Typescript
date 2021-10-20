//classes in ES2015 JS (more or less)
class Vehicle {
  //blueprint of what a vehicle should be
  //always capitalize the name of class like in JS
  drive(): void {
    //method example, annotate takes no argument and a return of void
    console.log('chugga chugga');
  }
  honk(): void {
    console.log('beep');
  }
}

//instance of a class
const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();
