

export default function PrevWordRow({incorrectLetter, greenWordValue, heightCounter, setmaybeLetters, maybeLetters, currentWord, greenArrays, previousTries}){
    const yellowWord = new Map()
    let greenWord = new Map()


    ///Only when first word is added
    if(greenArrays){
        greenArrays = greenArrays[0]

        ///Adds values to hashmap for correct placements
        for(let i = 0; i < 5; i++){
            ///Greenword saves the indexes of green letters
            greenWord.set(greenArrays[i], greenArrays[i])
        }      
        
        
        for(let i = 0; i < 5; i++){
            for(let j = 0; j < 5; j++){
                if(previousTries?.substring(i,i+1) === currentWord.substring(j,j+1)){
                    // console.log(incorrectLetter)
                    // console.log(previousTries?.substring(i,i+1))
                    yellowWord.set(i,i)
                    if(!maybeLetters.includes(previousTries?.substring(i,i+1)))
                        maybeLetters.push(previousTries?.substring(i,i+1))
                }
            }
        }

    }
    // console.log(incorrectLetter)
    // console.log(greenWordValue)

    return(
        <div className="word-row">
        {(() => {
            if(greenWord.has(0)){
                greenWordValue.set(previousTries?.substring(0,1),previousTries?.substring(0,1))
                return(<div id="s1" className='green-square individual-letter-square'>{previousTries?.substring(0,1)}</div>)
            }else if(yellowWord.has(0)){
                return(<div id="s1" className='yellow-square individual-letter-square'>{previousTries?.substring(0,1)}</div>)
            }else{
                incorrectLetter.set(previousTries?.substring(0,1), previousTries?.substring(0,1))
                return (<div id="s1" className='gray-square individual-letter-square'>{previousTries?.substring(0,1)}</div>)
            }  
        
        })()
        }

        {/* Square 2 */}
        {(() => {
            if(greenWord.has(1)){
                greenWordValue.set(previousTries?.substring(1,2),previousTries?.substring(1,2))
                return(<div id="s2" className='green-square individual-letter-square'>{previousTries?.substring(1,2)}</div>)
            }else if(yellowWord.has(1)){
                return(<div id="s2" className='yellow-square individual-letter-square'>{previousTries?.substring(1,2)}</div>)
            }else{
                incorrectLetter.set(previousTries?.substring(1,2), previousTries?.substring(1,2))
                return (<div id="s2" className='gray-square individual-letter-square'>{previousTries?.substring(1,2)}</div>)
            } 
            
            })()
            }

        {/* Square 3 */}
        {(() => {
            if(greenWord.has(2)){
                greenWordValue.set(previousTries?.substring(2,3),previousTries?.substring(2,3))
                return(<div id="s3" className='green-square individual-letter-square'>{previousTries?.substring(2,3)}</div>)
            }else if(yellowWord.has(2)){
                return(<div id="s3" className='yellow-square individual-letter-square'>{previousTries?.substring(2,3)}</div>)
            }else{
                incorrectLetter.set(previousTries?.substring(2,3), previousTries?.substring(2,3))
                return (<div id="s3" className='gray-square individual-letter-square'>{previousTries?.substring(2,3)}</div>)
            }     
            
            })()
            }

        {/* Square 4 */}
        {(() => {
            if(greenWord.has(3)){
                greenWordValue.set(previousTries?.substring(3,4),previousTries?.substring(3,4))
                return(<div id="s4" className='green-square individual-letter-square'>{previousTries?.substring(3,4)}</div>)
            }else if(yellowWord.has(3)){
                return(<div id="s4" className='yellow-square individual-letter-square'>{previousTries?.substring(3,4)}</div>)
            }else{
                incorrectLetter.set(previousTries?.substring(3,4), previousTries?.substring(3,4))
                return (<div id="s4" className='gray-square individual-letter-square'>{previousTries?.substring(3,4)}</div>)
            }
        
        })()
        }

        {/* Square 5 */}
        {(() => {
            if(greenWord.has(4)){
                greenWordValue.set(previousTries?.substring(4,5),previousTries?.substring(4,5))
                return(<div id="s5" className='rightmost-square green-square individual-letter-square'>{previousTries?.substring(4,5)}</div>)
            }else if(yellowWord.has(4)){
                return(<div id="s5" className='rightmost-square yellow-square individual-letter-square'>{previousTries?.substring(4,5)}</div>)
            }else{
                incorrectLetter.set(previousTries?.substring(4,5), previousTries?.substring(4,5))
                return(<div id="s5" className='rightmost-square gray-square individual-letter-square'>{previousTries?.substring(4,5)}</div>)
            } 
        
        })()
        }

        </div>
    )
}


