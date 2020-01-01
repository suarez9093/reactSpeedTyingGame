import React, { Fragment, useState} from "react";
 
/**
 * Challenge: Using hooks, track the state of the text in the textarea on every keystroke
 * To verify it's working, you could just console.log the state on every change
 * 
 * https://scrimba.com/p/p7P5Hd/cW8Jdfy
 */

function App() {

  const [ words, setWords ] = useState({words: ""});

  function handleChange(e){
    const { name, value } = e.target;

    setWords(prevWords => ({...prevWords, [name] : value}))
  }
console.log(words)
  return (
    <Fragment>
      <h1>Speed Typing Game</h1>
      <textarea
      name="words"
      value={words.words}
      onChange={handleChange} 
      />
      <h4>Time remaining: </h4>
      <button>Start Game</button>
      <h1>Word Count: </h1>
    </Fragment>
  );
}

export default App;
