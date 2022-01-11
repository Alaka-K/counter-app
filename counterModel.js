class CounterModel {
  constructor() {
    this.counter = 0;
  }

  getCounter() {
    return this.counter;
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  reset() {
  return this.counter = 0;
  }
}

module.exports = CounterModel;