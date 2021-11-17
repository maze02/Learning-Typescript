//when you don't want other developers to call a method because they 
//are very likely to break sth, then you use  private
/*class Vehicle {
    public drive(): void{
        console.log('chugga chugga');
    }

    public honk(): void {
        console.log('beep');
    }
}

class Car extends Vehicle {
    private drive() : void { //cannot override a method modifier in a child class with a different 
        //modifier from the parent class
        console.log('vroom');
    }
}

*/
/*
class Vehicle {
    public drive() : void {
        console.log('yo yo yo');

     honk(): void {
        console.log('beep');
    }
}

class Car5 extends Vehicle {
    drive() : void {
        console.log('vroom');
    }
}
*/
class Vehicle {
     honk(): void {
        console.log('beep');
    }
}

class Car5 extends Vehicle {
    private drive() : void {
        console.log('vroom');
    }
}