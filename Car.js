export class Car {
    #id;
  
    constructor(id, year, make, model, type) {
      this.#id = id;
      this._year = year; 
      this._make = make;
      this._model = model;
      this._type = type;
    }
  
    get id() {
      return this.#id;
    }
  
    set id(value) {
      this.#id = value;
    }
  
    get year() {
      return this._year;
    }
  
    set year(value) {
      this._year = value;
    }
  
    get make() {
      return this._make;
    }
  
    set make(value) {
      this._make = value;
    }
  
    get model() {
      return this._model;
    }
  
    set model(value) {
      this._model = value;
    }
  
    get type() {
      return this._type;
    }
  
    set type(value) {
      this._type = value;
    }
  }
  