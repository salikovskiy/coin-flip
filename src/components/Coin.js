import React, { Component } from "react";
let number = null;

class Coin extends Component {
  state = {
    number: null,
    class: "",
    animation: false,
    div: React.createRef(),
  };

  randomNumber = () => {
    number = Math.round(Math.random());
    console.log(number);
  };

  handleClick = (e) => {
    if (this.state.div.current.classList[1] === "coin-animation-tails")
      this.state.div.current.classList.remove("coin-animation-tails");
    if (this.state.div.current.classList[1] === "coin-animation-eagle")
      this.state.div.current.classList.remove("coin-animation-eagle");

    this.randomNumber();
    void this.state.div.current.offsetWidth;

    if (number === 0)
      this.state.div.current.classList.add("coin-animation-eagle");
    if (number === 1)
      this.state.div.current.classList.add("coin-animation-tails");
  };

  render() {
    return (
      <div className="coin-wrapper">
        <div className="coin">
          <div
            ref={this.state.div}
            className="coin-inner"
            // onAnimationEnd={(e) => console.log(e)}
          >
            <div className="coin-front"></div>
            <div className="coin-back"></div>
          </div>
        </div>
        <button className="coin-button" onClick={this.handleClick}>
          Start
        </button>
      </div>
    );
  }
}

export default Coin;
