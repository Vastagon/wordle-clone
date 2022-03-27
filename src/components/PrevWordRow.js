import {useState} from "react"

export default function PrevWordRow({colorArrays, letterPositions, previousTries}){
    const [individualArray, setIndividualArray] = useState([])

    if(colorArrays){
        colorArrays = colorArrays[0]
        // console.log(colorArrays)
        for(let i = 0; i < 5; i++){

            if(colorArrays[i] === 0){
                // document.getElementById('s1').style.backgroundColor = "green"
                individualArray.push(i)
            }
            if(colorArrays[i] === 1){
                // document.getElementById('s2').style.backgroundColor = "green"
                individualArray.push(i)

            }
            if(colorArrays[i] === 2){
                // document.getElementById('s3').style.backgroundColor = "green"
                individualArray.push(i)

            }
            if(colorArrays[i] === 3){
                // document.getElementById('s4').style.backgroundColor = "green"
                individualArray.push(i)

            }
            if(colorArrays[i] === 4){
                // document.getElementById('s5').style.backgroundColor = "green"
                individualArray.push(i)

            }
        }       
        console.log(individualArray) 
    }


    return(
        <div className='word-row'>
            {individualArray[0] === 0 ? <div id="s1" className='green-square individual-letter-square'>{previousTries?.substring(0,1)}</div> : <div id="s1" className='individual-letter-square'>{previousTries?.substring(0,1)}</div> }
            {individualArray[1] === 1 ? <div id="s2" className='green-square individual-letter-square'>{previousTries?.substring(1,2)}</div> : <div id="s2" className='individual-letter-square'>{previousTries?.substring(1,2)}</div> }
            {individualArray[2] === 2 ? <div id="s3" className='green-square individual-letter-square'>{previousTries?.substring(2,3)}</div> : <div id="s3" className='individual-letter-square'>{previousTries?.substring(2,3)}</div> }
            {individualArray[3] === 3 ? <div id="s4" className='green-square individual-letter-square'>{previousTries?.substring(3,4)}</div> : <div id="s4" className='individual-letter-square'>{previousTries?.substring(3,4)}</div> }
            {individualArray[4] === 4 ? <div id="s5" className='green-square individual-letter-square'>{previousTries?.substring(4,5)}</div> : <div id="s5" className='individual-letter-square'>{previousTries?.substring(4,5)}</div> }
        </div>
    )
}