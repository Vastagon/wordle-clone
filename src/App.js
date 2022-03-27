import './styles/App.css';
import wordsList from "./words.json"
import WordRow from "./components/WordRow"
import PrevWordRow from './components/PrevWordRow';
import {useState} from "react"

function App() {
  const [letterPositions, setLetterPositions] = useState([])
  const [previousTries, setPreviousTries] = useState([])
  const [heightCounter, setHeightCounter] = useState(0)
  const [currentWord, setCurrentWord] = useState(wordsList[Math.floor(Math.random() * wordsList.length)])
  const [textInput, setTextInput] = useState("")
  const [colorArrays, setColorArrays] = useState([])
  // colorArrays.length = 5

  console.log(currentWord)

  function handleTextInput(e){
    if(e.target.value.length >= 6){

    }else{
      setTextInput(e.target.value)
    }
  }

  function handleFormSubmit(e){
    e.preventDefault()
    setHeightCounter(prev => prev+1)
    previousTries.push(textInput)

    if(currentWord == textInput){
      alert("YOU WIN")
    }

    ///Checks each letter to check for similarities
    for(let i = 0; i < 5; i++){
      ///Checks if same position
      if(currentWord.substring(i,i+1) == textInput.substring(i,i+1)){
        letterPositions.push(i)
      }
      ///Checks if letter is in the word



      ///Letter not in the word
    }

    ///Clears the inputs
    document.getElementById('text-input').value = ""
    setTextInput()
    colorArrays.push([letterPositions])
    setLetterPositions([])
  }
  // console.log(colorArrays)
  return (
    <div className="App">
      {heightCounter === 0 ? <WordRow  textInput={textInput}/> : <PrevWordRow colorArrays={colorArrays[0]} letterPositions={letterPositions} previousTries={previousTries[0]}/>}
      {heightCounter === 1 ? <WordRow  textInput={textInput}/> : <PrevWordRow colorArrays={colorArrays[1]} letterPositions={letterPositions} previousTries={previousTries[1]}/>}
      {heightCounter === 2 ? <WordRow  textInput={textInput}/> : <PrevWordRow colorArrays={colorArrays[2]} letterPositions={letterPositions} previousTries={previousTries[2]}/>}
      {heightCounter === 3 ? <WordRow  textInput={textInput}/> : <PrevWordRow colorArrays={colorArrays[3]} letterPositions={letterPositions} previousTries={previousTries[3]}/>}
      {heightCounter === 4 ? <WordRow  textInput={textInput}/> : <PrevWordRow colorArrays={colorArrays[4]} letterPositions={letterPositions} previousTries={previousTries[4]}/>}
      {heightCounter === 5 ? <WordRow  textInput={textInput}/> : <PrevWordRow colorArrays={colorArrays[5]} letterPositions={letterPositions} previousTries={previousTries[5]}/>}
      <form onSubmit={handleFormSubmit}>
        <input onChange={handleTextInput} type="text" className="text-input" id="text-input" />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
