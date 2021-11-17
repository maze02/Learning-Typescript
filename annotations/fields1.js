//fields essentially are properties that reference actual values
//sometimes you might see an error -i.e. below because traditionally you want
//to initialise a variable any time you declare inside of a class
var Vehicle2 = /** @class */ (function () {
    function Vehicle2() {
        this.color = 'red';
    }
    Vehicle2.prototype.honk = function () {
        console.log('beep');
    };
    return Vehicle2;
}());
var vehicle = new Vehicle2();
console.log(vehicle.color);
