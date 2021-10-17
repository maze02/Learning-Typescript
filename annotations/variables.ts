let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

//built in objects
let now: Date = new Date();

//Array

//Indicating an array of strings
let colors: string[] = ['red', 'green', 'blue'];
let nums: number[] = [10, 20, 30, 40];
let resTruths: boolean[] = [true, false, false, true];

//Classes

class Car {}

let car: Car = new Car(); //capitalised name refering to the type of class Car

//Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//Function

//Function that takes in the argument number and returns nothing (/\ void)
//First bit is a description of a function, after the equal sign is where the implementation is provided
//i.e. the name, what it does and then after the equal sign , its implementation
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};
