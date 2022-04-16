import wordsList from "../words.json"


export default function Keyboard({letterPositions, setLetterPositions, greenArrays, setHeightCounter, heightCounter, previousTries, setComplete, heightScoreValues, currentWord, setTextInput, textInput, greenWordValue, maybeLetters, incorrectLetter}){
    function handleButton(e){
        setTextInput(prev => prev + e.target.name)
    }

    function backspace(){
        let end = textInput.length
        setTextInput(prev => prev.substring(0,end-1))
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
          setTextInput("")
          greenArrays.push([letterPositions])
          setLetterPositions([])      
        }else{
          alert("Word doesn't exist")
        }
    }


    return(
        <div className="keyboard">
            <div className="row-one keyboard-row">
            
            {(() => {
                if(greenWordValue.has("q")){
                    return( <button onClick={handleButton} name="q" className="green-square single-key">q</button>)
                }else if(maybeLetters.includes("q")){
                    return(<button onClick={handleButton} name="q" className="yellow-square single-key">q</button>)
                }else if(incorrectLetter?.has("q")){
                    return (<button onClick={handleButton} name="q" className="gray-square single-key">q</button>)
                }else{
                    return <button onClick={handleButton} name="q" className="white-square single-key">q</button>
                }  
                })()
                }

            {(() => {
                if(greenWordValue.has("w")){
                    return( <button name="w" onClick={handleButton} className="green-square single-key">w</button>)
                }else if(maybeLetters.includes("w")){
                    return(<button name="w" onClick={handleButton} className="yellow-square single-key">w</button>)
                }else if(incorrectLetter?.has("w")){
                    return (<button name="w" onClick={handleButton} className="gray-square single-key">w</button>)
                }else{
                    return <button name="w" onClick={handleButton} className="white-square single-key">w</button>
                }  
                })()
                }

            {(() => {
                if(greenWordValue.has("e")){
                    return( <button name="e" onClick={handleButton} className="green-square single-key">e</button>)
                }else if(maybeLetters.includes("e")){
                    return(<button name="e" onClick={handleButton} className="yellow-square single-key">e</button>)
                }else if(incorrectLetter?.has("e")){
                    return (<button name="e" onClick={handleButton} className="gray-square single-key">e</button>)
                }else{
                    return <button name="e" onClick={handleButton} className="white-square single-key">e</button>
                }  
                })()
                }

            {(() => {
                if(greenWordValue.has("r")){
                    return( <button name="r" onClick={handleButton} className="green-square single-key">r</button>)
                }else if(maybeLetters.includes("r")){
                    return(<button name="r" onClick={handleButton} className="yellow-square single-key">r</button>)
                }else if(incorrectLetter?.has("r")){
                    return (<button name="r" onClick={handleButton} className="gray-square single-key">r</button>)
                }else{
                    return <button name="r" onClick={handleButton} className="white-square single-key">r</button>
                }  
                })()
                }

            {(() => {
                if(greenWordValue.has("t")){
                    return( <button name="t" onClick={handleButton} className="green-square single-key">t</button>)
                }else if(maybeLetters.includes("t")){
                    return(<button name="t" onClick={handleButton} className="yellow-square single-key">t</button>)
                }else if(incorrectLetter?.has("t")){
                    return (<button name="t" onClick={handleButton} className="gray-square single-key">t</button>)
                }else{
                    return <button name="t" onClick={handleButton} className="white-square single-key">t</button>
                }  
                })()
                }

            {(() => {
                if(greenWordValue.has("y")){
                    return( <button name="y" onClick={handleButton} className="green-square single-key">y</button>)
                }else if(maybeLetters.includes("y")){
                    return(<button name="y" onClick={handleButton} className="yellow-square single-key">y</button>)
                }else if(incorrectLetter?.has("y")){
                    return (<button name="y" onClick={handleButton} className="gray-square single-key">y</button>)
                }else{
                    return <button name="y" onClick={handleButton} className="white-square single-key">y</button>
                }  
                })()
                }

            {(() => {
                if(greenWordValue.has("u")){
                    return( <button name="u" onClick={handleButton} className="green-square single-key">u</button>)
                }else if(maybeLetters.includes("u")){
                    return(<button name="u" onClick={handleButton} className="yellow-square single-key">u</button>)
                }else if(incorrectLetter?.has("u")){
                    return (<button name="u" onClick={handleButton} className="gray-square single-key">u</button>)
                }else{
                    return <button name="u" onClick={handleButton} className="white-square single-key">u</button>
                }  
                })()
                }

            {(() => {
                if(greenWordValue.has("i")){
                    return( <button name="i" onClick={handleButton} className="green-square single-key">i</button>)
                }else if(maybeLetters.includes("i")){
                    return(<button name="i" onClick={handleButton} className="yellow-square single-key">i</button>)
                }else if(incorrectLetter?.has("i")){
                    return (<button name="i" onClick={handleButton} className="gray-square single-key">i</button>)
                }else{
                    return <button name="i" onClick={handleButton} className="white-square single-key">i</button>
                }  
                })()
                }

            {(() => {
                if(greenWordValue.has("o")){
                    return( <button name="o" onClick={handleButton} className="green-square single-key">o</button>)
                }else if(maybeLetters.includes("o")){
                    return(<button name="o" onClick={handleButton} className="yellow-square single-key">o</button>)
                }else if(incorrectLetter?.has("o")){
                    return (<button name="o" onClick={handleButton} className="gray-square single-key">o</button>)
                }else{
                    return <button name="o" onClick={handleButton} className="white-square single-key">o</button>
                }  
                })()
                }

            {(() => {
                if(greenWordValue.has("p")){
                    return( <button name="p" onClick={handleButton} className="green-square single-key">p</button>)
                }else if(maybeLetters.includes("p")){
                    return(<button name="p" onClick={handleButton} className="yellow-square single-key">p</button>)
                }else if(incorrectLetter?.has("p")){
                    return (<button name="p" onClick={handleButton} className="gray-square single-key">p</button>)
                }else{
                    return <button name="p" onClick={handleButton} className="white-square single-key">p</button>
                }  
                })()
                }


                {/* {maybeLetters.includes("q") ? <button onClick={handleButton} className="yellow-square single-key">q</button> : <button onClick={handleButton} className="single-key">q</button>}
                {maybeLetters.includes("w") ? <button onClick={handleButton} className="yellow-square single-key">w</button> : <button onClick={handleButton} className="single-key">w</button>}
                {maybeLetters.includes("e") ? <button onClick={handleButton} className="yellow-square single-key">e</button> : <button onClick={handleButton} className="single-key">e</button>}
                {maybeLetters.includes("r") ? <button onClick={handleButton} className="yellow-square single-key">r</button> : <button onClick={handleButton} className="single-key">r</button>}
                {maybeLetters.includes("t") ? <button onClick={handleButton} className="yellow-square single-key">t</button> : <button onClick={handleButton} className="single-key">t</button>}
                {maybeLetters.includes("y") ? <button onClick={handleButton} className="yellow-square single-key">y</button> : <button onClick={handleButton} className="single-key">y</button>}
                {maybeLetters.includes("u") ? <button onClick={handleButton} className="yellow-square single-key">u</button> : <button onClick={handleButton} className="single-key">u</button>}
                {maybeLetters.includes("i") ? <button onClick={handleButton} className="yellow-square single-key">i</button> : <button onClick={handleButton} className="single-key">i</button>}
                {maybeLetters.includes("o") ? <button onClick={handleButton} className="yellow-square single-key">o</button> : <button onClick={handleButton} className="single-key">o</button>}
                {maybeLetters.includes("p") ? <button onClick={handleButton} className="yellow-square single-key">p</button> : <button onClick={handleButton} className="single-key">p</button>} */}
            </div>

            <div className="row-two keyboard-row">

            {(() => {
                if(greenWordValue.has("a")){
                    return( <button name="a" onClick={handleButton} className="green-square single-key">a</button>)
                }else if(maybeLetters.includes("a")){
                    return(<button name="a" onClick={handleButton} className="yellow-square single-key">a</button>)
                }else if(incorrectLetter?.has("a")){
                    return (<button name="a" onClick={handleButton} className="gray-square single-key">a</button>)
                }else{
                    return <button name="a" onClick={handleButton} className="white-square single-key">a</button>
                }  
                })()
                }

            {(() => {
                if(greenWordValue.has("s")){
                    return( <button name="s" onClick={handleButton} className="green-square single-key">s</button>)
                }else if(maybeLetters.includes("s")){
                    return(<button name="s" onClick={handleButton} className="yellow-square single-key">s</button>)
                }else if(incorrectLetter?.has("s")){
                    return (<button name="s" onClick={handleButton} className="gray-square single-key">s</button>)
                }else{
                    return <button name="s" onClick={handleButton} className="white-square single-key">s</button>
                }  
                })()
                }

            {(() => {
                if(greenWordValue.has("d")){
                    return( <button name="d" onClick={handleButton} className="green-square single-key">d</button>)
                }else if(maybeLetters.includes("d")){
                    return(<button name="d" onClick={handleButton} className="yellow-square single-key">d</button>)
                }else if(incorrectLetter?.has("d")){
                    return (<button name="d" onClick={handleButton} className="gray-square single-key">d</button>)
                }else{
                    return <button name="d" onClick={handleButton} className="white-square single-key">d</button>
                }  
                })()
                }

            {(() => {
                if(greenWordValue.has("f")){
                    return( <button name="f" onClick={handleButton} className="green-square single-key">f</button>)
                }else if(maybeLetters.includes("f")){
                    return(<button name="f" onClick={handleButton} className="yellow-square single-key">f</button>)
                }else if(incorrectLetter?.has("f")){
                    return (<button name="f" onClick={handleButton} className="gray-square single-key">f</button>)
                }else{
                    return <button name="f" onClick={handleButton} className="white-square single-key">f</button>
                }  
                })()
                }

            {(() => {
                if(greenWordValue.has("g")){
                    return( <button name="g" onClick={handleButton} className="green-square single-key">g</button>)
                }else if(maybeLetters.includes("g")){
                    return(<button name="g" onClick={handleButton} className="yellow-square single-key">g</button>)
                }else if(incorrectLetter?.has("g")){
                    return (<button name="g" onClick={handleButton} className="gray-square single-key">g</button>)
                }else{
                    return <button name="g" onClick={handleButton} className="white-square single-key">g</button>
                }  
                })()
                }

            {(() => {
                if(greenWordValue.has("h")){
                    return( <button name="h" onClick={handleButton} className="green-square single-key">h</button>)
                }else if(maybeLetters.includes("h")){
                    return(<button name="h" onClick={handleButton} className="yellow-square single-key">h</button>)
                }else if(incorrectLetter?.has("h")){
                    return (<button name="h" onClick={handleButton} className="gray-square single-key">h</button>)
                }else{
                    return <button name="h" onClick={handleButton} className="white-square single-key">h</button>
                }  
                })()
                }

            {(() => {
                if(greenWordValue.has("j")){
                    return( <button name="j" onClick={handleButton} className="green-square single-key">j</button>)
                }else if(maybeLetters.includes("j")){
                    return(<button name="j" onClick={handleButton} className="yellow-square single-key">j</button>)
                }else if(incorrectLetter?.has("j")){
                    return (<button name="j" onClick={handleButton} className="gray-square single-key">j</button>)
                }else{
                    return <button name="j" onClick={handleButton} className="white-square single-key">j</button>
                }  
                })()
                }

            {(() => {
                if(greenWordValue.has("k")){
                    return( <button name="k" onClick={handleButton} className="green-square single-key">k</button>)
                }else if(maybeLetters.includes("k")){
                    return(<button name="k" onClick={handleButton} className="yellow-square single-key">k</button>)
                }else if(incorrectLetter?.has("k")){
                    return (<button name="k" onClick={handleButton} className="gray-square single-key">k</button>)
                }else{
                    return <button name="k" onClick={handleButton} className="white-square single-key">k</button>
                }  
                })()
                }

            {(() => {
                if(greenWordValue.has("l")){
                    return( <button name="l" onClick={handleButton} className="green-square single-key">l</button>)
                }else if(maybeLetters.includes("l")){
                    return(<button name="l" onClick={handleButton} className="yellow-square single-key">l</button>)
                }else if(incorrectLetter?.has("l")){
                    return (<button name="l" onClick={handleButton} className="gray-square single-key">l</button>)
                }else{
                    return <button name="l" onClick={handleButton} className="white-square single-key">l</button>
                }  
                })()
                }

                {/* {maybeLetters.includes("a") ? <button onClick={handleButton} className="yellow-square single-key">a</button> : <button onClick={handleButton} className="single-key">a</button>}
                {maybeLetters.includes("s") ? <button onClick={handleButton} className="yellow-square single-key">s</button> : <button onClick={handleButton} className="single-key">s</button>}
                {maybeLetters.includes("d") ? <button onClick={handleButton} className="yellow-square single-key">d</button> : <button onClick={handleButton} className="single-key">d</button>}
                {maybeLetters.includes("f") ? <button onClick={handleButton} className="yellow-square single-key">f</button> : <button onClick={handleButton} className="single-key">f</button>}
                {maybeLetters.includes("g") ? <button onClick={handleButton} className="yellow-square single-key">g</button> : <button onClick={handleButton} className="single-key">g</button>}
                {maybeLetters.includes("h") ? <button onClick={handleButton} className="yellow-square single-key">h</button> : <button onClick={handleButton} className="single-key">h</button>}
                {maybeLetters.includes("j") ? <button onClick={handleButton} className="yellow-square single-key">j</button> : <button onClick={handleButton} className="single-key">j</button>}
                {maybeLetters.includes("k") ? <button onClick={handleButton} className="yellow-square single-key">k</button> : <button onClick={handleButton} className="single-key">k</button>}
                {maybeLetters.includes("l") ? <button onClick={handleButton} className="yellow-square single-key">l</button> : <button onClick={handleButton} className="single-key">l</button>} */}
            </div>

            <div className="row-three keyboard-row">
                <button onClick={backspace}>Del</button>

            {(() => {
                if(greenWordValue.has("z")){
                    return( <button name="z" onClick={handleButton} className="green-square single-key">z</button>)
                }else if(maybeLetters.includes("z")){
                    return(<button name="z" onClick={handleButton} className="yellow-square single-key">z</button>)
                }else if(incorrectLetter?.has("z")){
                    return (<button name="z" onClick={handleButton} className="gray-square single-key">z</button>)
                }else{
                    return <button name="z" onClick={handleButton} className="white-square single-key">z</button>
                }  
                })()
                }

            {(() => {
                if(greenWordValue.has("x")){
                    return( <button name="x" onClick={handleButton} className="green-square single-key">x</button>)
                }else if(maybeLetters.includes("x")){
                    return(<button name="x" onClick={handleButton} className="yellow-square single-key">x</button>)
                }else if(incorrectLetter?.has("x")){
                    return (<button name="x" onClick={handleButton} className="gray-square single-key">x</button>)
                }else{
                    return <button name="x" onClick={handleButton} className="white-square single-key">x</button>
                }  
                })()
                }

            {(() => {
                if(greenWordValue.has("c")){
                    return( <button name="c" onClick={handleButton} className="green-square single-key">c</button>)
                }else if(maybeLetters.includes("c")){
                    return(<button name="c" onClick={handleButton} className="yellow-square single-key">c</button>)
                }else if(incorrectLetter?.has("c")){
                    return (<button name="c" onClick={handleButton} className="gray-square single-key">c</button>)
                }else{
                    return <button name="c" onClick={handleButton} className="white-square single-key">c</button>
                }  
                })()
                }

            {(() => {
                if(greenWordValue.has("v")){
                    return( <button name="v" onClick={handleButton} className="green-square single-key">v</button>)
                }else if(maybeLetters.includes("v")){
                    return(<button name="v" onClick={handleButton} className="yellow-square single-key">v</button>)
                }else if(incorrectLetter?.has("v")){
                    return (<button name="v" onClick={handleButton} className="gray-square single-key">v</button>)
                }else{
                    return <button name="v" onClick={handleButton} className="white-square single-key">v</button>
                }  
                })()
                }

            {(() => {
                if(greenWordValue.has("b")){
                    return( <button name="b" onClick={handleButton} className="green-square single-key">b</button>)
                }else if(maybeLetters.includes("b")){
                    return(<button name="b" onClick={handleButton} className="yellow-square single-key">b</button>)
                }else if(incorrectLetter?.has("b")){
                    return (<button name="b" onClick={handleButton} className="gray-square single-key">b</button>)
                }else{
                    return <button name="b" onClick={handleButton} className="white-square single-key">b</button>
                }  
                })()
                }

            {(() => {
                if(greenWordValue.has("n")){
                    return( <button name="n" onClick={handleButton} className="green-square single-key">n</button>)
                }else if(maybeLetters.includes("n")){
                    return(<button name="n" onClick={handleButton} className="yellow-square single-key">n</button>)
                }else if(incorrectLetter?.has("n")){
                    return (<button name="n" onClick={handleButton} className="gray-square single-key">n</button>)
                }else{
                    return <button name="n" onClick={handleButton} className="white-square single-key">n</button>
                }  
                })()
                }

            {(() => {
                if(greenWordValue.has("m")){
                    return( <button name="m" onClick={handleButton} className="green-square single-key">m</button>)
                }else if(maybeLetters.includes("m")){
                    return(<button name="m" onClick={handleButton} className="yellow-square single-key">m</button>)
                }else if(incorrectLetter?.has("m")){
                    return (<button name="m" onClick={handleButton} className="gray-square single-key">m</button>)
                }else{
                    return <button name="m" onClick={handleButton} className="white-square single-key">m</button>
                }  
                })()
                }

                <button onClick={handleFormSubmit} className="enter-key single-key">Enter</button>
                {/* {maybeLetters.includes("z") ? <button onClick={handleButton} className="yellow-square single-key">z</button> : <button onClick={handleButton} className="single-key">z</button>}
                {maybeLetters.includes("x") ? <button className="yellow-square single-key">x</button> : <button className="single-key">x</button>}
                {maybeLetters.includes("c") ? <button className="yellow-square single-key">c</button> : <button className="single-key">c</button>}
                {maybeLetters.includes("v") ? <button className="yellow-square single-key">v</button> : <button className="single-key">v</button>}
                {maybeLetters.includes("b") ? <button className="yellow-square single-key">b</button> : <button className="single-key">b</button>}
                {maybeLetters.includes("n") ? <button className="yellow-square single-key">n</button> : <button className="single-key">n</button>}
                {maybeLetters.includes("m") ? <button className="yellow-square single-key">m</button> : <button className="single-key">m</button>} */}

            </div>
        </div>
    )
}