//fields essentially are properties that reference actual values
//sometimes you might see an error -i.e. below because traditionally you want
//to initialise a variable any time you declare inside of a class

/*1 Way 1 of initialising a field/property in a class
class Vehicle2 {
    color: string = 'red';

    protected honk () : void {
        console.log('beep');
    }
}

const vehicle = new Vehicle2();

console.log(vehicle.color);
*/

/*2 Way 2 of initialising a field/property in a class 

*/

class Vehicle4 {
    color:string; //remember to define the property type at the beginning

    constructor(color: string) {
        this.color =  color;
    }
};

const vehicleJo = new Vehicle4 ('orange');

console.log(vehicleJo.color);