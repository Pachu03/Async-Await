import "./style.css";
import cars from "./mockData.js";
import * as promises from "./promises.js";

const startEvents = () => {
  promises.mapToCarClasses(cars)
    .then((carInstances) => {
      return promises.filterCar(carInstances);
    })
    .then((carFilters) => {
      return promises.createElement(carFilters);
    })
    .catch((error) => {
      console.error(error);
    });
};

document.addEventListener("DOMContentLoaded", startEvents);
