import { Car } from "./Car.js";

export const mapToCarClasses = (carsData) => {
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
  
  export const filterCar = (cars) => {
    return new Promise((resolve, reject) => {
      const carsFilters = cars.filter((car) => car.year > 2010);
  
      if (carsFilters) {
        resolve(carsFilters);
      } else {
        reject("Error al filtrar los datos");
      }
    });
  };
  
  export const createElement = (cars) => {
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
      document.body.append(h1, divContainer);
  
      resolve();
    });
  };
  