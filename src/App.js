import React, { Component } from 'react';
import Counters from './component/counters';
import NavBar from './component/navbar';

class App extends Component {
  state = {
    counters: [
      { id: 1, defValue: 1 },
      { id: 2, defValue: 0 },
      { id: 3, defValue: 0 },
      { id: 4, defValue: 0 },
    ],
  };
  handleIncrement = (value) => {
    // console.log(value.id, value.defValue);
    const counters = [...this.state.counters];
    const index = counters.indexOf(value);
    counters[index].defValue++;
    this.setState({ counters });
  };
  handleDelete = (counterId) => {
    // console.log(counterId);
    const counters = this.state.counters.filter((c) => counterId !== c.id);
    this.setState({ counters });
  };
  handleReset = () => {
    // console.log("It's Work!...");
    const counters = this.state.counters.map((counter) => {
      counter.defValue = 0;
      return counter;
    });
    this.setState({ counters });
  };

  totalCounters = () => {
    const counters = [...this.state.counters.filter(c => (c.defValue > 0))];
    let sum = 0;
    if (counters.length !== 0) {
      sum = counters.map(item => item.defValue).reduce((prev, next) => prev + next);
    }
    return sum === 0 ? 'Zero' : sum;
  }
  render() {
    return (
      <div>
        <NavBar totalCounters={this.totalCounters} />
        <main className='container'>
          <Counters
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onInc={this.handleIncrement}
            counters={this.state.counters}
          />
        </main>
      </div>
    );
  }
}

export default App;