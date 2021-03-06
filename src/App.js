import './styles/App.css';
import wordsList from "./words.json"
import WordRow from "./components/WordRow"
import PrevWordRow from './components/PrevWordRow';
import Keyboard from "./components/Keyboard"
import WinScreen from './components/WinScreen';
import {useState, useEffect} from "react"

function App() {
  const [maybeLetters, setmaybeLetters] = useState([])
  const [letterPositions, setLetterPositions] = useState([])
  const [previousTries, setPreviousTries] = useState([])
  const [heightCounter, setHeightCounter] = useState(0)
  const [currentWord, setCurrentWord] = useState(wordsList[Math.floor(Math.random() * wordsList.length)])
  const [textInput, setTextInput] = useState("")
  const [greenArrays, setgreenArrays] = useState([])
  const [showKeyboard, setShowKeyboard] = useState(false)

  
  localStorage.height == null ? localStorage.height = "[0,0,0,0,0,0]" : localStorage.height = localStorage.height
  
  const [heightScoreValues, setHeightScoreValues] = useState(JSON.parse(localStorage.height))
  // const greenWordValue = new Map()
  // const incorrectLetter = new Map()

  const [greenWordValue, setGreenWordValue] = useState(new Map())
  const [incorrectLetter, setIncorrectLetter] = useState(new Map())
  let [complete, setComplete] = useState(false)

  console.log(greenWordValue)


  ///Focus on text input when the page loads
  useEffect(() => {
    document.getElementById('text-input').focus()
  }, [])


  const updateMap = (k,v) =>{
    setGreenWordValue(new Map(greenWordValue.set(k,v)))
  }

  ///Sets an indiviual variable to the lowercase values of the text input
  function handleTextInput(e){
      setTextInput(e.target.value.toLowerCase())
  }

  function handleFormSubmit(e){
    e.preventDefault()
    ///checks that the word exists
    if(wordsList.includes(textInput)){
      previousTries.push(textInput)

      if(currentWord === textInput){
        ///setComplete used for conditional rendering
        setComplete(true)
        ///Increases the value of whatever the height counter is plus 1
        heightScoreValues[heightCounter] = heightScoreValues[heightCounter] + 1

        ///Turns array into string for local storage
        localStorage.height = JSON.stringify(heightScoreValues)
      }

      setHeightCounter(prev => prev+1)

      ///Checks each letter to check for similarities
      for(let i = 0; i < 5; i++){
        ///Checks if same position
        if(currentWord.substring(i,i+1) === textInput.substring(i,i+1)){
          letterPositions.push(i)
        }
      }

      ///Clears the inputs
      document.getElementById('text-input').value = ""
      setTextInput()
      greenArrays.push([letterPositions])
      setLetterPositions([])      
    }else{
      alert("Word doesn't exist")
    }

  }
  ///Keeps the browser focused on the text-input
  function focusCursor(){
    if(document.getElementById('text-input')){
      document.getElementById('text-input').focus()
    }
  }

  ///checks if the player loses every time height counter changes
  useEffect(() =>{
    if(heightCounter === 6){
      setTimeout(() =>{
        setComplete(true)
      }, 2700)
    }
  }, [heightCounter])

  return (
    <div onClick={focusCursor} className="App">
      {heightCounter === 0 ? <WordRow textInput={textInput}/> : <PrevWordRow setShowKeyboard={setShowKeyboard} incorrectLetter={incorrectLetter} greenWordValue={greenWordValue} heightCounter={heightCounter} setmaybeLetters={setmaybeLetters} maybeLetters={maybeLetters} currentWord={currentWord} greenArrays={greenArrays[0]} letterPositions={letterPositions} previousTries={previousTries[0]}/>}
      {heightCounter === 1 ? <WordRow textInput={textInput}/> : <PrevWordRow setShowKeyboard={setShowKeyboard} incorrectLetter={incorrectLetter} greenWordValue={greenWordValue} heightCounter={heightCounter} setmaybeLetters={setmaybeLetters} maybeLetters={maybeLetters} currentWord={currentWord} greenArrays={greenArrays[1]} letterPositions={letterPositions} previousTries={previousTries[1]}/>}
      {heightCounter === 2 ? <WordRow textInput={textInput}/> : <PrevWordRow setShowKeyboard={setShowKeyboard} incorrectLetter={incorrectLetter} greenWordValue={greenWordValue} heightCounter={heightCounter} setmaybeLetters={setmaybeLetters} maybeLetters={maybeLetters} currentWord={currentWord} greenArrays={greenArrays[2]} letterPositions={letterPositions} previousTries={previousTries[2]}/>}
      {heightCounter === 3 ? <WordRow textInput={textInput}/> : <PrevWordRow setShowKeyboard={setShowKeyboard} incorrectLetter={incorrectLetter} greenWordValue={greenWordValue} heightCounter={heightCounter} setmaybeLetters={setmaybeLetters} maybeLetters={maybeLetters} currentWord={currentWord} greenArrays={greenArrays[3]} letterPositions={letterPositions} previousTries={previousTries[3]}/>}
      {heightCounter === 4 ? <WordRow textInput={textInput}/> : <PrevWordRow setShowKeyboard={setShowKeyboard} incorrectLetter={incorrectLetter} greenWordValue={greenWordValue} heightCounter={heightCounter} setmaybeLetters={setmaybeLetters} maybeLetters={maybeLetters} currentWord={currentWord} greenArrays={greenArrays[4]} letterPositions={letterPositions} previousTries={previousTries[4]}/>}
      {heightCounter === 5 ? <WordRow textInput={textInput}/> : <PrevWordRow setShowKeyboard={setShowKeyboard} incorrectLetter={incorrectLetter} greenWordValue={greenWordValue} heightCounter={heightCounter} setmaybeLetters={setmaybeLetters} maybeLetters={maybeLetters} currentWord={currentWord} greenArrays={greenArrays[5]} letterPositions={letterPositions} previousTries={previousTries[5]}/>}
      {heightCounter === 6 ? <p className="correct-word">Correct Word: {currentWord}</p> : null}
      <form autoComplete="off" onSubmit={handleFormSubmit}>
        {complete ? null : <input maxLength="5" id="text-input" onChange={handleTextInput} type="text" className="text-input" />}
      </form>
      {complete ? <WinScreen heightScoreValues={heightScoreValues}/> : null}
      <Keyboard setShowKeyboard={setShowKeyboard} showKeyboard={showKeyboard} heightScoreValues={heightScoreValues} setComplete={setComplete} setHeightCounter={setHeightCounter} setTextInput={setTextInput} textInput={textInput} incorrectLetter={incorrectLetter} greenWordValue={greenWordValue} heightCounter={heightCounter} previousTries={previousTries} maybeLetters={maybeLetters} greenArrays={greenArrays} setmaybeLetters={setmaybeLetters} currentWord={currentWord} setLetterPositions={setLetterPositions} letterPositions={letterPositions}/>
    </div>  
  );
}

export default App;
