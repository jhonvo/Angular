class Bike {
    miles : number;
    constructor (public price: number, public speed:String){
        this.miles = 0;
    } 
    displayInfo = () => console.log(`This bike costs ${this.price}, it has ${this.miles} miles and its max speed is ${this.speed}`)

    ride = () => {
        console.log ("Riding");
        this.miles += 10;
    }

    reverse = () => {
        console.log ("Reversing");
        this.miles -= 5;
    }
}

let bike1 = new Bike(200,"50 m/h");
bike1.displayInfo();
bike1.ride();
bike1.reverse();
bike1.displayInfo();

let bike2 = new Bike(300,"100 m/h");
bike2.displayInfo();
bike2.ride();
bike2.reverse();
bike2.displayInfo();

let bike3 = new Bike(500,"150 m/h");
bike3.displayInfo();
bike3.ride();
bike3.reverse();
bike3.displayInfo();