interface Vehicle {
  make: string;
  model: string;
  year: number;
}
class Car implements Vehicle {
  make: string;
  model: string;
  year: number;
  constructor(make: string, model: string, year: number){
      this.make = make;
      this.model = model;
      this.year = year;
      
  }

  start(): void {
      console.log(Car);
    }


}
const myCar = new Car('Toyota', 'Corolla', 2020);
myCar.start(); // This should log "Car engine started" to the console


