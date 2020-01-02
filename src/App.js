import React, { useState, useEffect, useRef } from "react";


function App() {
  const STARTING_TIME = 5

  const [text, setText] = useState();
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [wordsPerMinute, setWordsPerMinute] = useState();
  const textBoxRef = useRef(null);

  function handleChange(e) {
    const { value } = e.target;

    setText(value)
  }

  function calculateWordCount(text) {
    const wordsArr = text.trim().split(" ");
    const filteredWords = wordsArr.filter(word => word !== "")
    setWordCount(filteredWords.length)
  }

  function startGame() {
    setTimeRemaining(STARTING_TIME);
    setIsTimeRunning(true)
    setWordCount(0)
    setText("")
    textBoxRef.current.disabled = false
    textBoxRef.current.focus()
  }

  function endGame() {
    setIsTimeRunning(false)
    calculateWordCount(text)
  }

  function calculateWordsPerMinute() {
    let time = 60 + STARTING_TIME;
    let words = `You type ${Math.round(wordCount / time * 60)} wpm`;
    setWordsPerMinute(words)
  };

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
