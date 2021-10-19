const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

const pepsi = ['brown', true, 40];
//The order inside a tuple has a very specific meaning to us.

pepsi[0] = 40; //making an assumption about the order here
pepsi[2] = 'brown'; //;

//Here the tupple says that is going to have a consistent ordering of elements inside of it
const pepsi2: [string, boolean, number] = ['brown', true, 40];
//if try and change an order of elements

//alternative

//Type aLias
type Drink = [string, boolean, number];

const coke: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 100];
const tea: Drink = ['brown', false, 0];

//Tuples are not used super often in typescript and maybe not always useful.

//Useful if your working in a csv files and want to represent a single row

const carSpecs: [number, number] = [400, 3354];
//In objects, tuples not useful for trying to understand what we're trying to say -> using keys for descriptions is missing in tuples

//clear to see what we're working with at a glance
const carStats = {
  horsepower: 400,
  weight: 3354,
};
