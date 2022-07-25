import React, { Component } from "react";
import "./style.css";
import Income from "./income";
import Expense from "./expense";

class Budget extends Component {
  state = {
    currentValue: 0,
    inputValue: 0,
    selected: "",
    income: [],
    expense: [],
  };

  handleChange = (e) => {
    let { selected } = this.state;
    selected = e.target.value;
    this.setState({ selected });
  };
  handleInputChange = (e) => {
    let { inputValue } = this.state;
    inputValue = parseInt(e.target.value);
    this.setState({ inputValue });
  };
  handleSubmit = (e) => {
    const { inputValue, selected, currentValue } = this.state;
    let total = 0;
    if (selected === "expense") {
      const expense = [...this.state.expense, inputValue];
      total = currentValue - inputValue;
      console.log(typeof inputValue, typeof currentValue, typeof total);
      this.setState({ expense, currentValue: total });
    }
    if (selected === "income") {
      const income = [...this.state.income, inputValue];
      total = currentValue + inputValue;
      console.log(typeof inputValue, typeof currentValue, typeof total);
      this.setState({ income, currentValue: total });
    }
  };

  render() {
    return (
      <div>
        <div className="top">
          <p>Current balance is {this.state.currentValue}</p>
        </div>
        <div className="cen">
          <select value={this.state.selected} onChange={this.handleChange}>
            <option value="none">Please Select</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <input
            onChange={this.handleInputChange}
            className="m-1"
            placeholder="Type here"
            type="number"
          ></input>
          <button className="btn btn-primary m-2" onClick={this.handleSubmit}>
            Submit
          </button>
        </div>
        <div className="container"></div>
        <div className="row justify-content-evenly">
          <div className="col-2">
            <Income income={this.state.income} />
          </div>
          <div className="col-2">
            <Expense expense={this.state.expense} />
          </div>
        </div>
      </div>
    );
  }
}

export default Budget;
