import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [userText, setUserText] = useState('');
  const updateUserText = event => {
    setUserText(event.target.value);
    console.log('current userText', userText);
  }

  return (
    <div className="App">
      <h2>TURBO TYPE</h2>
      <input value={userText} onChange={updateUserText}/>
    </div>
  );
}

export default App;
