import React, { Fragment, useState} from "react";

/**
 * Challenge:
 * 
 * Create a function to calculate the number of separate words in the `text` state
 * For now, just console.log the word count when the button gets clicked to test it out.
 */
 
function App() {

  const [ text, setText ] = useState();
  const [ words , setWords ] = useState();

  function handleChange(e){
    const {value} = e.target;

    setText(value)
  }

  function calculateWords(text){
    const wordsInTextArea = text.split(" ").length

    setWords(wordsInTextArea);
  }

  console.log("words: ", words)

console.log(text)
  return (
    <Fragment>
      <h1>Speed Typing Game</h1>
      <textarea
      value={text}
      onChange={handleChange} 
      />
      <h4>Time remaining: </h4>
      <button >Start Game</button>
      <button onClick={calculateWords}>calculate words</button>
      <h1>Word Count: </h1>
    </Fragment>
  );
}

export default App;
