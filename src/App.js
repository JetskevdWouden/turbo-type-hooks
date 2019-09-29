import React, { useState } from 'react';
import './App.css';

const App = () => {
  const snippets = [
    'Oops, I did it again, oombap oombap',
    "The tide is high, but I'm holding on I'm gonna be your number one",
    "A scrub is a guy that thinks he's fly And is also known as a busta (busta)"
  ];

  const initialGameState = {
    victory: false,
    startTime: null,
    endTime: null
  }

  const [snippet, setSnippet] = useState('');
  const [userText, setUserText] = useState('');
  const [gameState, setGameState] = useState(initialGameState);

  const updateUserText = event => {
    setUserText(event.target.value);
    // console.log('current userText', userText);
    if(event.target.value === snippet) {
      setGameState({
        ...gameState,
        victory: true,
        endTime: new Date().getTime() - gameState.startTime
      })
    }
  }

  const chooseSnippet = snippetIndex => () => {
    console.log('setSnippet', snippetIndex);
    setSnippet(snippets[snippetIndex]);
    setGameState({
      ...gameState,
      startTime: new Date().getTime()
    })
  }

  return (
    <div className="App">
      <div className="game">
        <h2>TURBO TYPE</h2>
        <br />
        <h3>snippet</h3>
        {snippet}
        <h4>{gameState.victory ? `Done! Time: ${gameState.endTime}ms` : null}</h4>
        <input value={userText} onChange={updateUserText} />
        <br />
        {
          snippets.map((snippet, index) => (
            <button onClick={chooseSnippet(index)} key={index}>
              {snippet.substring(0,50)}...
            </button>
          ))
        }
      </div>
    </div>
  );
}

export default App;
