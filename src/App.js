import React from 'react';


/**
 * Challenge: build the basic structure of our game
 * 
 * 1. <h1> title at the top
 * 2. <textarea> for the box to type in 
 *      (tip: React normalizes <textarea /> to be more like <input />, 
 *      so it can be used as a self-closing element and uses the `value` property
 *      to set its contents)
 * 3. <h4> ti display the amount of time remaining
 * 4. <button> to start the game
 * 5. Another <h1> to display the word count
 */



function App() {
  return (
    <div className="App">
      <h1>Speed Typing Game</h1>
      <textarea 
      />
      <h1>Time remaining: </h1>
      <button>Start Game</button>
      <h1>Word Count: </h1>
    </div>
  );
}

export default App;
