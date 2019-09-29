import React, { useState } from 'react';
import './App.css';

const App = () => {
  const snippets = [
    'Oops, I did it again, oombap oombap',
    "The tide is high, but I'm holding on I'm gonna be your number one",
    "A scrub is a guy that thinks he's fly And is also known as a busta (busta)"
  ];
  const [snippet, setSnippet] = useState('');
  const [userText, setUserText] = useState('');

  const updateUserText = event => {
    setUserText(event.target.value);
    console.log('current userText', userText);
  }

  const chooseSnippet = snippetIndex => () => {
    console.log('setSnippet', snippetIndex);
    setSnippet(snippets[snippetIndex]);
  }

  return (
    <div className="App">
      <div className="game">
        <h2>TURBO TYPE</h2>
        <hr />
        <h3>snippet</h3>
        {snippet}
        <input value={userText} onChange={updateUserText} />
        <hr />
        {
          snippets.map((snippet, index) => (
            <button onClick={chooseSnippet(index)} key={index}>
              {snippet.substring(0,10)}...
            </button>
          ))
        }
      </div>
    </div>
  );
}

export default App;
