let apples: number = 5;

//declaration and initialization done on the same line
let strawberries = 10;

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

//When to use annotations
// 1) Function that returns the 'any' type

const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);
console.log(coordinates); // type: any

//Fixing the 'Any' Type

const coordinates2: { x: number; y: number } = JSON.parse(json);
console.log(coordinates2); //type: { x: number; y: number }

//2) When we declare a variable on one line and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean; //let foundWord = false would be better, but here's an example of initialisation

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

//3) Vriable whose type cannot be inferred correctly
let numbers = [-10, -1, -12];
let numberAboveZero: boolean | number = false; //character | is a pipe

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}

//Example scenarios
//1. Trying to find a users favorite piece of media and user's choices of media are a blog post or an image or a book or a movie etc...
// let usersFavoriteMedia : Book | Image | Movie;  => use pipe | to express possible different pipes.
