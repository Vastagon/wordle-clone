import './styles/App.css';
import wordsList from "./words.json"
import WordRow from "./components/WordRow"
import PrevWordRow from './components/PrevWordRow';
import Keyboard from "./components/Keyboard"
import {useState} from "react"

function App() {
  const [maybeLetters, setmaybeLetters] = useState([])
  const [letterPositions, setLetterPositions] = useState([])
  const [previousTries, setPreviousTries] = useState([])
  const [heightCounter, setHeightCounter] = useState(0)
  const [currentWord, setCurrentWord] = useState(wordsList[Math.floor(Math.random() * wordsList.length)])
  const [textInput, setTextInput] = useState("")
  const [greenArrays, setgreenArrays] = useState([])
  const currentWordMap = new Map()
  const greenWordValue = new Map()
  const incorrectLetter = new Map()
///probably remove currentWordMap
  // console.log(currentWordMap)
  console.log(currentWord)

  for(let i = 0; i < 5; i++){
    currentWordMap.set(currentWord.substring(i,i+1), currentWord.substring(i,i+1))
  }


  function handleTextInput(e){
    if(e.target.value.length >= 6){

    }else{
      setTextInput(e.target.value)
    }
  }

  function handleFormSubmit(e){
    e.preventDefault()
    ///checks that the word exists
    if(wordsList.includes(textInput)){
      setHeightCounter(prev => prev+1)
      previousTries.push(textInput)

      if(currentWord === textInput){
        alert("YOU WIN")
      }

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


  // console.log(maybeLetters)
  // console.log(greenArrays)
  return (
    <div className="App">
      {heightCounter === 0 ? <WordRow  textInput={textInput}/> : <PrevWordRow incorrectLetter={incorrectLetter} greenWordValue={greenWordValue} heightCounter={heightCounter} setmaybeLetters={setmaybeLetters} maybeLetters={maybeLetters} currentWord={currentWord} greenArrays={greenArrays[0]} letterPositions={letterPositions} previousTries={previousTries[0]}/>}
      {heightCounter === 1 ? <WordRow  textInput={textInput}/> : <PrevWordRow incorrectLetter={incorrectLetter} greenWordValue={greenWordValue} heightCounter={heightCounter} setmaybeLetters={setmaybeLetters} maybeLetters={maybeLetters} currentWord={currentWord} greenArrays={greenArrays[1]} letterPositions={letterPositions} previousTries={previousTries[1]}/>}
      {heightCounter === 2 ? <WordRow  textInput={textInput}/> : <PrevWordRow incorrectLetter={incorrectLetter} greenWordValue={greenWordValue} heightCounter={heightCounter} setmaybeLetters={setmaybeLetters} maybeLetters={maybeLetters} currentWord={currentWord} greenArrays={greenArrays[2]} letterPositions={letterPositions} previousTries={previousTries[2]}/>}
      {heightCounter === 3 ? <WordRow  textInput={textInput}/> : <PrevWordRow incorrectLetter={incorrectLetter} greenWordValue={greenWordValue} heightCounter={heightCounter} setmaybeLetters={setmaybeLetters} maybeLetters={maybeLetters} currentWord={currentWord} greenArrays={greenArrays[3]} letterPositions={letterPositions} previousTries={previousTries[3]}/>}
      {heightCounter === 4 ? <WordRow  textInput={textInput}/> : <PrevWordRow incorrectLetter={incorrectLetter} greenWordValue={greenWordValue} heightCounter={heightCounter} setmaybeLetters={setmaybeLetters} maybeLetters={maybeLetters} currentWord={currentWord} greenArrays={greenArrays[4]} letterPositions={letterPositions} previousTries={previousTries[4]}/>}
      {heightCounter === 5 ? <WordRow  textInput={textInput}/> : <PrevWordRow incorrectLetter={incorrectLetter} greenWordValue={greenWordValue} heightCounter={heightCounter} setmaybeLetters={setmaybeLetters} maybeLetters={maybeLetters} currentWord={currentWord} greenArrays={greenArrays[5]} letterPositions={letterPositions} previousTries={previousTries[5]}/>}
      {heightCounter === 6 ? <p className="correct-word">Correct Word: {currentWord}</p> : null}
      <form autoComplete="off" onSubmit={handleFormSubmit}>
        <input onChange={handleTextInput} type="text" className="text-input" id="text-input" />
        <button type='submit'>Submit</button>
      </form>
      <Keyboard incorrectLetter={incorrectLetter} greenWordValue={greenWordValue} currentWordMap={currentWordMap} maybeLetters={maybeLetters}/>
    </div>
  );
}

export default App;
