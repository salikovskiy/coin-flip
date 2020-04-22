import React, { Component } from "react";
let number = null;

class Coin extends Component {
  state = {
    number: null,
    class: "",
    animation: false,
  };

  randomNumber = () => {
    number = Math.round(Math.random());
    console.log(number);
  };

  handleClick = () => {
    this.randomNumber();
    this.setState({ animation: true });
  };

  render() {
    const { animation } = this.state;
    return (
      <div className="coin-wrapper">
        <div className="coin">
          <div
            className={`${
              animation
                ? number
                  ? "coin-animation-tails"
                  : "coin-animation-eagle"
                : ""
            } coin-inner`}
            onAnimationEnd={() => this.setState({ animation: false })}
          >
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
