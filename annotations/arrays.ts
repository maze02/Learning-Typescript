const carMakers = ['ford', 'toyota', 'chevy']; //if hover over carMakers can see type inference in action -> doing it automatically

//if want to do it explicity _> this variable carMarkers2 is always going to point at an array that contains nothing but strings

const carMakers2: string[] = ['ford', 'toyota', 'chevy'];

//when initialising an empty array, add annotation, otherwise it will assign the type any to it

const carMarkers3: string[] = [];

const dates = [new Date(), new Date()]; //here the type is inferred when you hover over, can also put complex objects inside arrays i.e. const dates: Date[] = [...];

//2D arrays  -> simply double up on the syntax

const carsByMake: string[][] = []; //add the type that goes in the inner array & then another square bracket
//by adding type we're putting a restriction on what can be added in the array

const carsByMake2 = [[['f150'], ['corolla'], ['camaro']]];

//corner cases & why arrays

//1. doing type inference whenever pulling a value out of an array

//Help with inference when extracting values
const car5 = carMakers[0];
const myCar4 = carMakers.pop();

//Prevent incompatible values
//carMarkers3.push(100); i.e. adding a number into it

//Help with 'map'
//Receive each car as a string and from this will return a string (bit after the colon)
//have access to all the auto complete
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

//corner cases:
//flexible types

const importantDates = [new Date(), '2030-10-10']; //if nitialize with both types only required, might not need to add annotation

const importantDates2: (string | Date)[] = []; //manual annotation
const onlyDateObjArr: Date[] = [];
const importantDates3: (string | Date)[] = [new Date()]; //want to initialize with date

importantDates2.push('2030-10-10');
importantDates2.push(new Date());
//importantDates.push(100); would show up as an error

//Tuple
