import { useState } from 'react';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [input, setInput] = useState('');

  function handleLogin(e) {
    e.preventDefault();
    if (
      username.toLowerCase() === 'admin' &&
      password.toLowerCase() === '12345'
    ) {
      setIsLoggedIn(true);
    } else {
      alert('Wrong username or password.');
    }
  }

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

  if (!isLoggedIn) {
    return (
      <form onSubmit={handleLogin} className='form'>
        <input
          type='text'
          value={username}
          placeholder='Username (admin)'
          className='form-input'
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type='password'
          value={password}
          placeholder='Password (12345)'
          className='form-input'
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit' className='form-submit'>
          Login
        </button>
      </form>
    );
  }

  return (
    <div className='phone'>
      <button onClick={() => setIsLoggedIn(false)} className='logout-button'>Logout</button>
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
        <button onClick={() => addToDisplay('.')} className='button'>
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
