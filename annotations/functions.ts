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

//void functions (returns  no value/ or returns null or undefined)
const logger = (message: string): void => {
  console.log(message);
};

//never functions -> means you're never going to reach the end of this function
//so never going to execute the function completely, at some point we're going to throw an error and exit the function early without returning any value

//*rare/big corner case <------------------------------
const throwError = (message: string): never => {
  throw new Error(message);
};

//variations of the scenarios
const throwErrorS = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }
  return message;
};

const throwErrorV = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
};

//
const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

//Destructuring date and weather properties

//ES2015
const logWeather2 = ({ date, weather }) => {
  console.log(date);
  console.log(weather);
};

//destructuring with typescript
const logWeather3 = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};
