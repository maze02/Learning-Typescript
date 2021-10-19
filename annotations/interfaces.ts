//generic name
interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
};

//problem: long annotation and repetition of it /\ need interface
/*
const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Name: ${vehicle.year}`);
  console.log(`Name: ${vehicle.broken}`);
};
*/
//instead of the above, do:

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Name: ${vehicle.year}`);
  console.log(`Name: ${vehicle.broken}`);
};
printVehicle(oldCivic);
