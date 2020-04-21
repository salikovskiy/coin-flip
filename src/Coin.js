import React, { Component } from "react";

class Coin extends Component {
  state = {
    number: Math.round(Math.random()),
    class: "",
  };

  randomNumber = () => {
    this.setState({ number: Math.round(Math.random()) });
  };

  handleClick = () => {
    this.randomNumber();
    if (this.state.number === 0)
      this.setState({ class: "coin-animation-eagle" });
    if (this.state.number === 1)
      this.setState({ class: "coin-animation-tails" });
  };

  render() {
    return (
      <div className="coin-wrapper">
        <div className="coin">
          <div className={`${this.state.class} coin-inner`}>
            <div className="coin-front">
              <p>tails</p>
            </div>
            <div className="coin-back">
              <p>eagle</p>
            </div>
          </div>
        </div>
        <button className="coin-button" onClick={this.handleClick}>
          Підкинути монетку
        </button>
      </div>
    );
  }
}

export default Coin;
