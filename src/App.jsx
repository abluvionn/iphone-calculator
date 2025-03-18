import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  function addToDisplay(input) {
    setInput((prev) => prev + input);
  }

  function clearDisplay() {
    setInput('');
  }

  function calculate() {
    try {
      setInput(eval(input));
    } catch (_e) {
      setInput('Error');
    }
  }

  return (
    <div className='phone'>
      <input type='text' className='display' value={input} readOnly />
      <div className='buttons'>
        <button onClick={clearDisplay} className='button button-grey'>
          AC
        </button>
        <button
          onClick={() => addToDisplay('/')}
          className='button button-yellow button-divide'
        >
          /
        </button>
        <button onClick={() => addToDisplay('7')} className='button'>
          7
        </button>
        <button onClick={() => addToDisplay('8')} className='button'>
          8
        </button>
        <button onClick={() => addToDisplay('9')} className='button'>
          9
        </button>
        <button
          onClick={() => addToDisplay('*')}
          className='button button-yellow'
        >
          *
        </button>
        <button onClick={() => addToDisplay('4')} className='button'>
          4
        </button>
        <button onClick={() => addToDisplay('5')} className='button'>
          5
        </button>
        <button onClick={() => addToDisplay('6')} className='button'>
          6
        </button>
        <button
          onClick={() => addToDisplay('-')}
          className='button button-yellow'
        >
          -
        </button>
        <button onClick={() => addToDisplay('1')} className='button'>
          1
        </button>
        <button onClick={() => addToDisplay('2')} className='button'>
          2
        </button>
        <button onClick={() => addToDisplay('3')} className='button'>
          3
        </button>
        <button
          onClick={() => addToDisplay('+')}
          className='button button-yellow'
        >
          +
        </button>
        <button onClick={() => addToDisplay('0')} className='button button-lg'>
          0
        </button>
        <button onClick={() => addToDisplay(',')} className='button'>
          ,
        </button>
        <button onClick={calculate} className='button button-yellow'>
          =
        </button>
      </div>
    </div>
  );
}

export default App;
