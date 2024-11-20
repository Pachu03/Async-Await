class Car {
  #id;
  year;
  make;
  model;
  type;

  constructor(id, make) {
    this.#id = id;
    this.year = year;
    this.make = make;
    this.model = model;
    this.type = type;
  }

  get id() {
    return this.#id;
  }

  set id(value) {
    this.#id = value;
  }

  get year() {
    return this.year;
  }

  set year(value) {
    this.year = value;
  }

  get make() {
    return this.make;
  }

  set make(value) {
    this.make = value;
  }

  get model() {
    return this.model;
  }

  set model(value) {
    this.model = value;
  }

  get type() {
    return this.type;
  }

  set type(value) {
    this.type = value;
  }
}
