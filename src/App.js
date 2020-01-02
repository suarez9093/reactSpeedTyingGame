import React, { Fragment, useState, useEffect } from "react";

/**
 * Challenge:
 * 
 * Make it so clicking the Start button starts the timer instead of it starting on refresh
 * (Hint: use a new state variable to indicate if the game should be running or not)
 */


function App() {

  const [text, setText] = useState();
  const [timeRemaining, setTimeRemaining] = useState(5);
  const [ isTimeRunning , setIsTimeRunning ] = useState(false);

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
        if(isTimeRunning && timeRemaining !== 0){
          setTimeout(() => {
            setTimeRemaining(time => time - 1);
          }, 1000)
        } else if(timeRemaining === 0 ){
          setIsTimeRunning(false)
          console.log("isTimeRunning: ",isTimeRunning)
        }
      }, [timeRemaining,isTimeRunning])

  return (
    <Fragment>
      <h1>Speed Typing Game</h1>
      <textarea
        value={text}
        onChange={handleChange}
      />
      <h4>Time remaining: {timeRemaining} seconds </h4>
      <button onClick={() => setIsTimeRunning(true)}>Start Game</button>
      {/* <button onClick={() => console.log(calculateWordCount(text))}>calculate words</button> */}
      <h1>Word Count: </h1>
    </Fragment>
  );
}

export default App;
