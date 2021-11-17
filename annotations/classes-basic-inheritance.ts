//classes in ES2015 JS (more or less)
class Vehicle11 {
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

//extends tells typescript that we want to inherit all the methods inside of the Vehicles class i.e. not rewrite them -> basically copy pastes them
class Car21 extends Vehicle11 {
  //car is the child class and vehicle is the superclass or the parent class
    drive(): void {
    //over-riding methods
    console.log('vroom');
  }
}

//instance of a class
const vehicle21 = new Car21();
vehicle21.drive(); //method over-ridden in the child class
vehicle21.honk();
