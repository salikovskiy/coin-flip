import React, { Component } from "react";

class Coin extends Component {
  state = {
    number: null,
  };

  handleClick = () => {
    this.setState({ number: Math.round(Math.random()) });
  };

  render() {
    return (
      <div class="coin">
        <div class="coin-inner coin-animation">
          <div class="coin-front">
            <p>орел</p>
          </div>
          <div class="coin-back">
            <p>решка</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Coin;
