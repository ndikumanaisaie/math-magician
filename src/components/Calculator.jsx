/* eslint-disable no-nested-ternary */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Calculator extends Component {
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
            btnValues.flat().map((btn) => (
              <button
                key={btn}
                type="button"
                className={
                  btn === '=' || btn === '÷' || btn === 'x' || btn === '-' || btn === '+'
                    ? 'sign-btn'
                    : btn === 0
                      ? 'zero'
                      : '0'
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
