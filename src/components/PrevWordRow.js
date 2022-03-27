import {useState} from "react"
import WordRow from "./WordRow"

export default function PrevWordRow({setWrongLetters, wrongLetters, currentWord, greenArrays, previousTries}){
    const yellowWord = new Map()
    let diffMap = new Map()
    if(greenArrays){
        greenArrays = greenArrays[0]
///Adds values to hashmap for correct placements
        for(let i = 0; i < 5; i++){
            diffMap.set(greenArrays[i], greenArrays[i])
        }       

        for(let i = 0; i < 5; i++){
            for(let j = 0; j < 5; j++){
                if(previousTries?.substring(i,i+1) == currentWord.substring(j,j+1)){
                    yellowWord.set(i,i)
                    wrongLetters.push(previousTries?.substring(i,i+1))
                }
            }
        }
    }
    console.log(wrongLetters)

    return(
        <div className="word-row">
        {(() => {
            if(diffMap.has(0)){
                return(<div id="s1" className='green-square individual-letter-square'>{previousTries?.substring(0,1)}</div>)
            }else if(yellowWord.has(0)){
                return(<div id="s1" className='yellow-square individual-letter-square'>{previousTries?.substring(0,1)}</div>)
            }else{
                return (<div id="s1" className='gray-square individual-letter-square'>{previousTries?.substring(0,1)}</div>)
            }    
        
        })()
        }

        {/* Square 2 */}
        {(() => {
            if(diffMap.has(1)){
                return(<div id="s2" className='green-square individual-letter-square'>{previousTries?.substring(1,2)}</div>)
            }else if(yellowWord.has(1)){
                return(<div id="s2" className='yellow-square individual-letter-square'>{previousTries?.substring(1,2)}</div>)
            }else{
                return (<div id="s2" className='gray-square individual-letter-square'>{previousTries?.substring(1,2)}</div>)
            }   
            
            })()
            }

        {/* Square 3 */}
        {(() => {
            if(diffMap.has(2)){
                return(<div id="s3" className='green-square individual-letter-square'>{previousTries?.substring(2,3)}</div>)
            }else if(yellowWord.has(2)){
                return(<div id="s3" className='yellow-square individual-letter-square'>{previousTries?.substring(2,3)}</div>)
            }else{
                return (<div id="s3" className='gray-square individual-letter-square'>{previousTries?.substring(2,3)}</div>)
            }       
            
            })()
            }

        {/* Sqaure 4 */}
        {(() => {
            if(diffMap.has(3)){
                return(<div id="s4" className='green-square individual-letter-square'>{previousTries?.substring(3,4)}</div>)
            }else if(yellowWord.has(3)){
                return(<div id="s4" className='yellow-square individual-letter-square'>{previousTries?.substring(3,4)}</div>)
            }else{
                return (<div id="s4" className='gray-square individual-letter-square'>{previousTries?.substring(3,4)}</div>)
            }  
        
        })()
        }

        {/* Sqaure 5 */}
        {(() => {
            if(diffMap.has(4)){
                return(<div id="s5" className='green-square individual-letter-square'>{previousTries?.substring(4,5)}</div>)
            }else if(yellowWord.has(4)){
                return(<div id="s5" className='yellow-square individual-letter-square'>{previousTries?.substring(4,5)}</div>)
            }else{
                return (<div id="s5" className='gray-square individual-letter-square'>{previousTries?.substring(4,5)}</div>)
            }   
        
        })()
        }

        </div>
    )

    
    // return(
    //     <div className='word-row'>
    //         {diffMap.has(0) ? <div id="s1" className='green-square individual-letter-square'>{previousTries?.substring(0,1)}</div> : <div id="s1" className='gray-square individual-letter-square'>{previousTries?.substring(0,1)}</div> }
            // {diffMap.has(1) ? <div id="s2" className='green-square individual-letter-square'>{previousTries?.substring(1,2)}</div> : <div id="s2" className='gray-square individual-letter-square'>{previousTries?.substring(1,2)}</div> }
            // {diffMap.has(2) ? <div id="s3" className='green-square individual-letter-square'>{previousTries?.substring(2,3)}</div> : <div id="s3" className='gray-square individual-letter-square'>{previousTries?.substring(2,3)}</div> }
            // {diffMap.has(3) ? <div id="s4" className='green-square individual-letter-square'>{previousTries?.substring(3,4)}</div> : <div id="s4" className='gray-square individual-letter-square'>{previousTries?.substring(3,4)}</div> }
            // {diffMap.has(4) ? <div id="s5" className='green-square individual-letter-square'>{previousTries?.substring(4,5)}</div> : <div id="s5" className='gray-square individual-letter-square'>{previousTries?.substring(4,5)}</div> }
    //     </div>
    // )
}


