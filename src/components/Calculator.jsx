/* eslint-disable no-nested-ternary */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sign: '',
      num: 0,
      res: 0,
    };
  }

  render() {
    const btnValues = [
      ['AC', '+-', '%', '÷'],
      [7, 8, 9, 'x'],
      [4, 5, 6, '-'],
      [1, 2, 3, '+'],
      [0, '.', '='],
    ];

    return (
      <div className="wrapper">
        <div className="screen">0</div>
        <div className="button-box">
          {
            btnValues.flat().map((btn, i) => (
              <button
                key={btn}
                className={
                  btn === '=' || btn === '÷' || btn === 'x' || btn === '-' || btn === '+'
                    ? 'sign-btn'
                    : btn === 0
                      ? 'zero'
                      : 'keypad'
                }
                value={btn}
              >
                { btn }
              </button>
            ))
          }
        </div>
      </div>
    );
  }
}

export default Calculator;
