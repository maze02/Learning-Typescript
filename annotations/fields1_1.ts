class Vehicle5 {

    //declares the property and type - shortcut & can change the modifiers and use private or protected
    constructor(public color: string) {

    }

    protected honk(): void {
        console.log('beep');
    }
}

const vehicle = new Vehicle5('orange');

console.log(vehicle.color);