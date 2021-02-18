import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    const { onReset, onInc, onDelete, counters } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>

        {counters.map((value) => (
          <Counter
            key={value.id}
            value={value}
            onInc={onInc}
            onDelete={onDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
