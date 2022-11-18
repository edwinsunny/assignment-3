// import { render } from '@testing-library/react';
import React, { useState } from 'react';
import './Calculator.css';

import calculate from './logic/calculate';

const DisplayScreen = (props) => {
    const { total, next, operation } = props;
    return (
      <div className="displayscreen-cont">
        <span className="display-screen">
        {total}
          {operation}
          {next}
           </span>
      </div>
    );
  }

  const OperatorKeys = (props) => {
    const { handleClick } = props;
    return (
      <>
        <button type="button" className="btn btn-top" onClick={handleClick}>AC</button>
        <button type="button" className="btn btn-top" onClick={handleClick}>+/-</button>
        <button type="button" className="btn btn-top" onClick={handleClick}>%</button>
        <button type="button" className="btn btn-side" onClick={handleClick}>÷</button>
        <button type="button" className="btn btn-side" onClick={handleClick}>x</button>
        <button type="button" className="btn btn-side" onClick={handleClick}>-</button>
        <button type="button" className="btn btn-side" onClick={handleClick}>+</button>
        <button type="button" className="btn btn-side" onClick={handleClick}>=</button>
      </>
    );
  };

  const NumericKeys = (props) => {

    const { handleClick } = props;
    return (
      <div className="numbers">
        <button type="button" data-testid="seven" className="btn btn-primary" onClick={handleClick}>7</button>
        <button type="button" data-testid="eight" className="btn btn-primary" onClick={handleClick}>8</button>
        <button type="button" data-testid="nine" className="btn btn-primary" onClick={handleClick}>9</button>
        <button type="button" data-testid="four" className="btn btn-primary" onClick={handleClick}>4</button>
        <button type="button" data-testid="five" className="btn btn-primary" onClick={handleClick}>5</button>
        <button type="button" data-testid="six" className="btn btn-primary" onClick={handleClick}>6</button>
        <button type="button" data-testid="one" className="btn btn-primary" onClick={handleClick}>1</button>
        <button type="button" data-testid="two" className="btn btn-primary" onClick={handleClick}>2</button>
        <button type="button" data-testid="three" className="btn btn-primary" onClick={handleClick}>3</button>
        <button type="button" data-testid="zero" className="btn btn-primary col-span-2" onClick={handleClick}>0</button>
        <button type="button" data-testid="full-stop" className="btn btn-primary" onClick={handleClick}>.</button>
      </div>
    );
  }

const Calculator = () => {
  const [state, setState] = useState({
    obj: {
      total: null,
      next: null,
      operation: null,
    },
  });

  const handleClick = (event) => {
    const { obj } = state;
    setState({ obj: calculate(obj, event.target.textContent) });
  };
  const { obj } = state;
  const { total, next, operation } = obj;
  return (
    <div className="calc-container">
      <DisplayScreen next={next} total={total} operation={operation} />
      <OperatorKeys handleClick={handleClick} />
      <NumericKeys handleClick={handleClick} />
    </div>
  );
};
export default Calculator;