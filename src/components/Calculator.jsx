/* eslint-disable no-nested-ternary */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import btnValues from '../utilities/util';
import Screen from './Screen';

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
    const { num, res } = this.state;
    return (
      <div className="wrapper">
        <Screen value={num || res} />
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
