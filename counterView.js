class CounterView {
  constructor(model) {
    this.model = model;

    const incrementButtonEl = document.querySelector('#increment-btn');
    const decrementButtonEl = document.querySelector('#decrement-btn');
    const resetButtonEl = document.querySelector('#reset-btn');

    incrementButtonEl.addEventListener('click', () => {
      // Increment on the model, then refresh the view
      this.model.increment();
      this.display();
    });

    decrementButtonEl.addEventListener('click', () => {
      // Decrement on the model, then refresh the view
      this.model.decrement();
      this.display();
    });

    resetButtonEl.addEventListener('click', () => {
      // reset on the model, then refresh the view
      this.model.reset();
      this.display();
    }); 
  }

  display() {
    document.querySelector('#counter').innerText = this.model.getCounter();
  }
}

module.exports = CounterView;