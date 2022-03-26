import './styles/App.css';
import wordsList from "./words.json"
import WordRow from "./components/WordRow"
import {useState} from "react"

function App() {
  ///Chooses a random word
  let currentWord = wordsList[Math.floor(Math.random() * wordsList.length)]
  const [textInput, setTextInput] = useState("")

  function handleTextInput(e){
    if(e.target.value.length >= 6){

    }else{
      setTextInput(e.target.value)
    }
  }

  console.log(textInput)
  return (
    <div className="App">
      <WordRow />
      <WordRow />
      <WordRow />
      <WordRow />
      <WordRow />
      <WordRow />
      <input onChange={handleTextInput} type="text" className="text-input" id="text-input" />
    </div>
  );
}

export default App;
