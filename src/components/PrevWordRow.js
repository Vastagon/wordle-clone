import {useState} from "react"

export default function PrevWordRow({incorrectLetter, greenWordValue, maybeLetters, currentWord, greenArrays, previousTries}){
    const yellowWord = new Map()
    const greenWord = new Map()
    const whiteWord = useState(['a','b','c','d','e','f','g','h','i','j','k','l','m','m','o','p','q','r','s','t','u','v','w','x','y','z'])
    ///Only when first word is added
    if(greenArrays){
        greenArrays = greenArrays[0]

        ///Adds values to hashmap for correct placements
        for(let i = 0; i < 5; i++){
            ///Greenword saves the indexes of green letters
            greenWord.set(greenArrays[i], greenArrays[i])
        }      
        ///checks for all yellow letters
        for(let i = 0; i < 5; i++){
            for(let j = 0; j < 5; j++){
                if(previousTries?.substring(i,i+1) === currentWord.substring(j,j+1)){
                    yellowWord.set(i,i)
                    if(!maybeLetters.includes(previousTries?.substring(i,i+1)))
                        maybeLetters.push(previousTries?.substring(i,i+1))
                }
            }
        }

    }

    ///Conditional rendering for each square
    return(
        <div className="word-row">
        {(() => {
            if(greenWord.has(0)){
                whiteWord.splice(whiteWord.indexOf(previousTries?.substring(0,1)), 1)
                greenWordValue.set(previousTries?.substring(0,1),previousTries?.substring(0,1))
                return(<div id="s1" className='flip green-square individual-letter-square'>{previousTries?.substring(0,1)}</div>)
            }else if(yellowWord.has(0)){
                whiteWord.splice(whiteWord.indexOf(previousTries?.substring(0,1)), 1)
                return(<div id="s1" className='flip yellow-square individual-letter-square'>{previousTries?.substring(0,1)}</div>)
            }else if(previousTries?.substring(0,1) === undefined || whiteWord.includes(previousTries?.substring(0,1))){
                return(<div id="s1" className='flip white-square individual-letter-square'>{previousTries?.substring(0,1)}</div>)
            }else{
                whiteWord.splice(whiteWord.indexOf(previousTries?.substring(0,1)), 1)
                incorrectLetter.set(previousTries?.substring(0,1), previousTries?.substring(0,1))
                return(<div id="s1" className='flip gray-square individual-letter-square'>{previousTries?.substring(0,1)}</div>)
            }
        
        })()
        }

        {/* Square 2 */}
        {(() => {
            if(greenWord.has(1)){
                whiteWord.splice(whiteWord.indexOf(previousTries?.substring(1,2)), 1)
                greenWordValue.set(previousTries?.substring(1,2),previousTries?.substring(1,2))
                return(<div id="s2" className='flip green-square individual-letter-square'>{previousTries?.substring(1,2)}</div>)
            }else if(yellowWord.has(1)){
                whiteWord.splice(whiteWord.indexOf(previousTries?.substring(1,2)), 1)

                return(<div id="s2" className='flip yellow-square individual-letter-square'>{previousTries?.substring(1,2)}</div>)
            }else if(previousTries?.substring(1,2) === undefined || whiteWord.includes(previousTries?.substring(1,2))){
                return(<div id="s1" className='flip white-square individual-letter-square'>{previousTries?.substring(1,2)}</div>)
            }else{
                whiteWord.splice(whiteWord.indexOf(previousTries?.substring(1,2)), 1)
                incorrectLetter.set(previousTries?.substring(1,2), previousTries?.substring(1,2))
                return(<div id="s2" className='flip gray-square individual-letter-square'>{previousTries?.substring(1,2)}</div>)
            } 
            
            })()
            }

        {/* Square 3 */}
        {(() => {
            if(greenWord.has(2)){
                whiteWord.splice(whiteWord.indexOf(previousTries?.substring(2,3)), 1)
                greenWordValue.set(previousTries?.substring(2,3),previousTries?.substring(2,3))
                return(<div id="s3" className='flip green-square individual-letter-square'>{previousTries?.substring(2,3)}</div>)
            }else if(yellowWord.has(2)){
                whiteWord.splice(whiteWord.indexOf(previousTries?.substring(2,3)), 1)
                return(<div id="s3" className='flip yellow-square individual-letter-square'>{previousTries?.substring(2,3)}</div>)
            }else if(previousTries?.substring(2,3) === undefined || whiteWord.includes(previousTries?.substring(2,3))){
                return(<div id="s1" className='flip white-square individual-letter-square'>{previousTries?.substring(2,3)}</div>)
            }else{
                whiteWord.splice(whiteWord.indexOf(previousTries?.substring(2,3)), 1)
                incorrectLetter.set(previousTries?.substring(2,3), previousTries?.substring(2,3))
                return(<div id="s3" className='flip gray-square individual-letter-square'>{previousTries?.substring(2,3)}</div>)
            }
            
            })()
            }

        {/* Square 4 */}
        {(() => {
            if(greenWord.has(3)){
                whiteWord.splice(whiteWord.indexOf(previousTries?.substring(3,4)), 1)

                greenWordValue.set(previousTries?.substring(3,4),previousTries?.substring(3,4))
                return(<div id="s4" className='flip green-square individual-letter-square'>{previousTries?.substring(3,4)}</div>)
            }else if(yellowWord.has(3)){
                whiteWord.splice(whiteWord.indexOf(previousTries?.substring(3,4)), 1)

                return(<div id="s4" className='flip yellow-square individual-letter-square'>{previousTries?.substring(3,4)}</div>)
            }else if(previousTries?.substring(3,4) === undefined || whiteWord.includes(previousTries?.substring(3,4))){
                return(<div id="s1" className='flip white-square individual-letter-square'>{previousTries?.substring(3,4)}</div>)
            }else{
                whiteWord.splice(whiteWord.indexOf(previousTries?.substring(3,4)), 1)

                incorrectLetter.set(previousTries?.substring(3,4), previousTries?.substring(3,4))
                return(<div id="s4" className='flip gray-square individual-letter-square'>{previousTries?.substring(3,4)}</div>)
            }
        
        })()
        }

        {/* Square 5 */}
        {(() => {
                if(greenWord.has(4)){
                    whiteWord.splice(whiteWord.indexOf(previousTries?.substring(4,5)), 1)
                    greenWordValue.set(previousTries?.substring(4,5),previousTries?.substring(4,5))
                    return(<div id="s5" className='flip rightmost-square green-square individual-letter-square'>{previousTries?.substring(4,5)}</div>)
                }else if(yellowWord.has(4)){
                    whiteWord.splice(whiteWord.indexOf(previousTries?.substring(4,5)), 1)
                    return(<div id="s5" className='flip rightmost-square yellow-square individual-letter-square'>{previousTries?.substring(4,5)}</div>)
                }else if(previousTries?.substring(4,5) === undefined || whiteWord.includes(previousTries?.substring(4,5))){
                    return(<div id="s1" className='flip white-square individual-letter-square'>{previousTries?.substring(4,5)}</div>)
                }else{
                    whiteWord.splice(whiteWord.indexOf(previousTries?.substring(4,5)), 1)
                    incorrectLetter.set(previousTries?.substring(4,5), previousTries?.substring(4,5))
                    return(<div id="s5" className='flip rightmost-square gray-square individual-letter-square'>{previousTries?.substring(4,5)}</div>)

                }
        })()
        }

        </div>
    )
}


