//argument annotation: returns number //add annotation as to what the func returns to allow for TS to detect errors
const add = (a: number, b: number): number => {
  return a + b;
};

const substract = (a: number, b: number): number => {
  return a - b;
};
//functions takes 2 arguments
//Typescript is concerned with types, doesn't vet the logic in the funciton

//named function
function divide(a: number, b: number): number {
  return a / b;
}

//anonymous functions assigned to variables
//(*can annotate the return type right after the argument list)
const multiply = function (a: number, b: number): number {
  return a * b;
};
