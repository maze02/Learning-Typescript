//generic name
interface Reportable {
  summary(): string; //function called summary that returns a string
}

const concorde = {
  name: 'airbus202',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const orangeJuice = {
  carbonated: false,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};
printSummary(concorde);
printSummary(orangeJuice);

//can use an interface to describe the shape of properties of very different objects
//encourages us to write generic functions

//for reusable code design functions to accept arguments that are typed with interfaces as much as possible
