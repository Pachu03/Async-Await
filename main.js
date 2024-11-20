import "./style.css";
import { Car } from "./Car.js";
import cars from "./mockData.js";

const iniciarEvento = () => {
  mapToCarClasses(cars)
    .then((carInstances) => {
      console.log("Instancias de Car:");
      console.log(carInstances);

      filterCar(carInstances)
        .then((carFilters) => {
          console.log(carFilters);
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => {
      console.error(error);
    });
};

const mapToCarClasses = (carsData) => {
  return new Promise((resolve, reject) => {
    const carInstances = carsData.map(
      (car) => new Car(car.id, car.year, car.make, car.model, car.type)
    );
    if (carInstances) {
      resolve(carInstances);
    } else {
      reject("Error al mapear los datos");
    }
  });
};

const filterCar = (cars) => {
  return new Promise((resolve, reject) => {
    const carsFilters = cars.filter((car) => car.year > 2010);

    if (carsFilters) {
      resolve(carsFilters);
    } else {
      reject("Error al filtrar los datos");
    }
  });
};

document.addEventListener("DOMContentLoaded", iniciarEvento);
