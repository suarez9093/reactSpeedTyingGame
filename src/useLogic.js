import {useState, useRef} from "react"

function useLogic(){
    const STARTING_TIME = 15
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

  return {text, timeRemaining, isTimeRunning, wordCount, wordsPerMinute, textBoxRef, handleChange, calculateWordCount, startGame, endGame, calculateWordsPerMinute, setTimeRemaining}
}

export default useLogic;