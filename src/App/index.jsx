import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './style/css/index.css';

function App() {

  const [previousNumber, setPreviousNumber] = useState(0);
  const [currentNumber, setCurrentNumber] = useState(0);
  const [result, setResult] = useState(0);
  const [showResult, setShowResult] = useState(0)
  const [previousOperation, setPreviousOperation] = useState('');

  const operations = {
    sum: { account: (prev, current) => { prev + current }, symbol: '+' },
    subtraction: { account: (prev, current) => { prev - current }, symbol: '-' },
    multiplication: { account: (prev, current) => { prev * current }, symbol: '*' },
    division: { account: (prev, current) => { prev / current }, symbol: '/' },
    percentage: { account: (prev, current) => { (prev * current) / 100 }, symbol: '%' },
    'changeSign': { account: (prev) => { -prev }, symbol: '(-1)' }
  }

  const calculate = (e) => {
    const operation = e.target.value;
    const key = e.key;

    if (operations[operation[account]] || operations[key]) {
      let newResult;
      if (operation === 'change-sign') {
        newResult = operations[operation](previousNumber);
      } else {
        newResult = operations[operation[account(previousNumber, currentNumber)]];
      }
      setResult(newResult);
      setPreviousNumber(newResult);
      setCurrentNumber(0);
      setPreviousOperation(`${previousNumber}${operation[symbol]}${currentNumber}`);
    }
  }

  return (
    <div
      className='calculator'
    >

      <span>{previousOperation}</span>
      <h2>{showResult}</h2>

      <input
        className='number-input'
        type="number"
        value={currentNumber}
        onChange={(e) => setCurrentNumber(e.target.value)}
      />

      <button
        className='operation-button'
        name='plus'
        value='+'
        onClick={calculate}
        onKeyDown={calculate}
        >
        +
      </button>

      <button
        className='operation-button'
        name='minus'
        value='-'
        onClick={calculate}
        onKeyDown={calculate}
        >
        -
      </button>

      <button
        className='operation-button'
        name='times'
        value='*'
        onKeyDown={calculate}
        onClick={calculate}
        >
        *
      </button>

      <button
        className='operation-button'
        name='division'
        value='/'
        onKeyDown={calculate}
        onClick={calculate}
        >
        /
      </button>

      <button
        className='operation-button'
        name='percentage'
        value='%'
        onKeyDown={calculate}
        onClick={calculate}
        >
        %
      </button>

      <button
        className='operation-button'
        name='sign-change'
        value='change-sign'
        onClick={calculate}
      >
        -+
      </button>

      <button
        className='operation-button'
        name='equal'
        onClick={() => setShowResult(result)}
        >
        =
      </button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);