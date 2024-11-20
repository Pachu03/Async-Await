import "./style.css";
import { Car } from "./Car.js";
import cars from "./mockData.js";

const body = document.body;
//ToDo Mejorar el codigo incluir las promesas en otro js. 
const iniciarEvento = () => {
  mapToCarClasses(cars)
    .then((carInstances) => {
      console.log("Instancias de Car:");
      console.log(carInstances);

      filterCar(carInstances)
        .then((carFilters) => {
          console.log(carFilters);

          createElement(carFilters).then((elementos) => {

          });
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

const createElement = (cars) => {
  return new Promise((resolve, reject) => {
    const h1 = document.createElement("h1");
    h1.textContent = "Coches desde el 2010";

    const divContainer = document.createElement("div");
    divContainer.className = "container";

    const divBlock = document.createElement("div");
    divBlock.className = "block";

    cars.forEach((car) => {
      const div = document.createElement("div");

      const p1 = document.createElement("p");
      p1.textContent = "Model: " + car.model + " Make: " + car.make;

      const p2 = document.createElement("p");
      p2.textContent = "Type: " + car.type + " Year: " + car.year;

      div.append(p1, p2);
      divBlock.append(div);
    });

    divContainer.append(divBlock);
    body.append(h1, divContainer);
  });
};

document.addEventListener("DOMContentLoaded", iniciarEvento);
