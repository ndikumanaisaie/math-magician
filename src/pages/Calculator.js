/* eslint-disable no-nested-ternary */
/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
import btnValues from '../utilities/util';
import Screen from '../components/Screen';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calc, setCalc] = useState({
    operation: null,
    next: null,
    total: null,
  });

  const { operation, next, total } = calc;
  const handleClick = (e) => {
    setCalc(calculate({ total, next, operation }, e.target.value));
  };

  return (
    <div className="main-wrapper">
      <h2 className="calc-title">
        Let&apos;s do some math
      </h2>
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
    </div>

  );
};

export default Calculator;
