//Part 1
class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        return "Beep."
    }
    toString(){
        return `This vehicle is a ${this.make} ${this.model} from ${this.year}`
    }
}

//Part 2
class Car extends Vehicle {
    constructor(make, model, year){
        super(make,model,year);
        this.numWheels = 4;
    }
}

//Part 3
class Motorcycle extends Vehicle {
    constructor(make,model,year){
        super (make,model,year);
        this.numWheels = 2;
    }
    revEngine(){
        return "VROOM!!!!!"
    }
}

//Part 4
class Garage{
    constructor(capacity){
        this.capacity = capacity;
        this.vehicles = [];
    }
    add(vehicle){
        if (!(vehicle instanceof Vehicle)) {
            return "Only vehicles allowed!";
        }
        if (this.vehicles.length >= this.capacity){
            return "Too many vehicles!"
        }
        this.vehicles.push(vehicle);
    }
}