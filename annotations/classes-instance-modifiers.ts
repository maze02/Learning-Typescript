//classes in ES2015 JS (more or less)
class Vehicle1 {
  //blueprint of what a vehicle should be
  //always capitalize the name of class like in JS
  public honk(): void {
    console.log('beep');
  }
}

//extends tells typescript that we want to inherit all the methods inside of the Vehicles class i.e. not rewrite them -> basically copy pastes them
class Car22 extends Vehicle1 {
  //car is the child class and vehicle is the superclass or the parent class
  private drive(): void {
    //private means only methods within the class can call drive
    //methods are not marked private over security concern of being hacked, does not add layer of app security
    //only -reason is to restrict the methods that other developers can call
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
  }
}

//instance of a class
const vehicle2 = new Car22();
vehicle2.startDrivingProcess(); //method over-ridden in the child class
vehicle2.honk();
