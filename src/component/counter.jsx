import React, { Component } from "react";

class Counter extends Component {
  // styles = {
  //   fontSize: "20px",
  //   fontWeight: "bold",
  // };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // state = {
  //   // imageUrl: "https://picsum.photos/200",
  //   // tags: ["tag1", "tag2", "tag3"],
  //   value: this.props.value.defValue,
  // };

  formatCounter() {
    const { defValue } = this.props.value;
    return defValue === 0 ? "Zero" : defValue;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.value.defValue === 0 ? "warning" : "primary";
    return classes;
  }

  // handleIncrement = (id) => {
  //   console.log(id);
  //   this.setState({
  //     value: this.state.value + 1,
  //   });
  // };
  // doHandler = () => {
  //   this.handleIncrement({ id: this.props.value.id });
  // };

  render() {
    return (
      <div>
        {/* <img src={this.state.imageUrl} alt="" />
        <span style={{ fontSize: "15px" }} className={classes}>
          {this.formatCounter()}
        </span>
        <ul>
          {this.state.tags.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul> */}
        {/* <button onClick={this.doHandler} className="btn btn-secondary btn-sm">
          Increment
        </button> */}
        <span className={this.getBadgeClasses()}>{this.formatCounter()}</span>
        <button
          onClick={() => {
            this.props.onInc(this.props.value);
          }}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={() => {
            // console.log(this.props.id);
            this.props.onDelete(this.props.value.id);
          }}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
