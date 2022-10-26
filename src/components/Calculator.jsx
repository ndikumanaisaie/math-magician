/* eslint-disable no-nested-ternary */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import btnValues from '../utilities/util';
import Screen from './Screen';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      operation: null,
      next: null,
      total: null,
    };
  }

  render() {
    const { operation, next, total } = this.state;
    const handleClick = (e) => {
      this.setState(calculate({ total, next, operation }, e.target.value));
    };
    return (
      <div className="wrapper">
        <Screen value={next || total || '0'} />
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
                onClick={handleClick}
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
