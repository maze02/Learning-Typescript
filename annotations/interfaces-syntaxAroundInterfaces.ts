//generic name
interface Plane {
  name: string;
  year: Date; //can express any type you want within an interface
  broken: boolean;
  summary(): string; //function called summary that returns a string
}

const airbus = {
  name: 'airbus202',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const printPlane = (plane: Plane): void => {
  console.log(`Name: ${plane.name}`);
  console.log(`Name: ${plane.year}`);
  console.log(`Name: ${plane.broken}`);
  console.log(plane.summary());
};
printVehicle(oldCivic);
