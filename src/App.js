import React, {useEffect} from "react";
import useLogic from "./useLogic";


function App() {
  const {text, timeRemaining, isTimeRunning, wordCount, wordsPerMinute, textBoxRef, handleChange, setTimeRemaining, startGame, endGame, calculateWordsPerMinute} = useLogic();
  

  useEffect(() => {
    if (isTimeRunning && timeRemaining !== 0) {
      setTimeout(() => {
        setTimeRemaining(time => time - 1);
      }, 1000)
    } else if (timeRemaining === 0) {
      endGame()
      calculateWordsPerMinute()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeRemaining, isTimeRunning])

  return (
    <div className="container">
      <h1>Speed Typing Game</h1>
      <h3>Click start and type as many words as you can before the timer runs out</h3>
      <textarea
      ref={textBoxRef}
        disabled={!isTimeRunning}
        value={text}
        onChange={handleChange}
        
      />
      <h4>Time remaining: {timeRemaining} seconds </h4>
      <button disabled={isTimeRunning} onClick={startGame}>Start Game</button>
      <h1>Word Count: {wordCount}</h1>
      <h1>{wordsPerMinute}</h1>
    </div>
  );
}

export default App;
