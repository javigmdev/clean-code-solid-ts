import {
  Audi,
  Ford,
  Honda,
  Tesla,
  Toyota,
  Vehicle,
} from './04-example-liskov-substitution-b';

(() => {
  const printCarSeats = (cars: Vehicle[]) => {
    cars.forEach(car => {
      console.log(car.constructor.name, car.getNumberOfSeats());
    });
  };

  const cars = [
    new Tesla(7),
    new Audi(2),
    new Toyota(5),
    new Honda(5),
    new Ford(2),
  ];

  printCarSeats(cars);
})();
