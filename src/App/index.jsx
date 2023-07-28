import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';

function App() {

  const [previousNumber, setPreviousNumber] = useState(0);
  const [currentNumber, setCurrentNumber] = useState(0);
  const [result, setResult] = useState(0);
  const [previousOperation, setPreviousOperation] = useState('');

  const calculate = (e) => {

    const operation = e.target.value;
    const key = e.key;

    if (operation === 'sum' || key == '+') {
      setResult(previousNumber + currentNumber);
      setPreviousOperation(`${previousNumber} + ${currentNumber}`);
      setPreviousNumber(result);
    }

    if (operation === 'subtraction' || key == '-') {
      setResult(previousNumber - currentNumber);
      setPreviousOperation(`${previousNumber} - ${currentNumber}`);
      setPreviousNumber(result);
    }

    if (operation === 'multiplication' || key == '*') {
      setResult(previousNumber * currentNumber);
      setPreviousOperation(`${previousNumber} * ${currentNumber}`);
      setPreviousNumber(result);
    }

    if (operation === 'divide' || key == '/') {
      setResult(previousNumber / currentNumber);
      setPreviousOperation(`${previousNumber} / ${currentNumber}`);
      setPreviousNumber(result);
    }

    if (operation === 'percentage' || key == '%') {
      setResult((previousNumber * currentNumber) / 100);
      setPreviousOperation(`${previousNumber}  ${currentNumber}`);
      setPreviousNumber(result);
    }

    if (operation === 'change-sign') {
      setResult(previousNumber * (-1));
      setPreviousOperation(`Change sign`);
      setPreviousNumber(result);
    }
  }

  return (
    <div>

      <span>{previousOperation}</span>

      <input
        type="number"
        value={currentNumber}
        onChange={(e) => setCurrentNumber(e.this.value)}
      />

      <button
        value='sum'
        onClick={calculate}
        onKeyDown={calculate}
      >
        +
      </button>

      <button
        value='subtraction'
        onClick={calculate}
        onKeyDown={calculate}
      >
        -
      </button>

      <button
        value='multiplication'
        onKeyDown={calculate}
        onClick={calculate}
      >
        *
      </button>

      <button
        value='divide'
        onKeyDown={calculate}
        onClick={calculate}
      >
        /
      </button>

      <button
        value='percentage'
        onKeyDown={calculate}
        onClick={calculate}
      >
        %
      </button>

      <button
        value='change-sign'
        onClick={calculate}
      >
        -+
      </button>

      <span>{result}</span>

    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);