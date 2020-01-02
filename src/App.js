import React, { Fragment, useState, useEffect } from "react";

/**
 * Challenge:
 * 
 * 1. Create state to hold the current value of the countdown timer.
 *    Display this time in the "Time Remaining" header
 */

function App() {

  const [text, setText] = useState();
  const [timer, setTimer] = useState(5);

  function handleChange(e) {
    const { value } = e.target;

    setText(value)
  }

  function calculateWordCount(text) {
    const wordsArr = text.trim().split(" ");
    const filteredWords = wordsArr.filter(word => word !== "")
    return filteredWords.length
  }


  useEffect(() => {
    if(timer !== 0){
      setTimeout(() => {
        setTimer(timeRemaining => timeRemaining - 1);
      }, 1000)
    }
  }, [timer])

  return (
    <Fragment>
      <h1>Speed Typing Game</h1>
      <textarea
        value={text}
        onChange={handleChange}
      />
      <h4>Time remaining: {timer} seconds </h4>
      <button >Start Game</button>
      <button onClick={() => console.log(calculateWordCount(text))}>calculate words</button>
      <h1>Word Count: </h1>
    </Fragment>
  );
}

export default App;
