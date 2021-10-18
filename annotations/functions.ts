//argument annotation: returns number //add annotation as to what the func returns to allow for TS to detect errors
const add = (a: number, b: number): number => {
  return a + b;
};

//functions takes 2 arguments
//Typescript is concerned with types, doesn't vet the logic in the funciton
