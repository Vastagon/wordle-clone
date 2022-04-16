import { useEffect } from "react"


export default function WordRow({textInput}){

    return(
        <div className='word-row'>
            <div id="swr1" className='individual-letter-square'>{textInput?.substring(0,1)}</div>
            <div id="swr2" className='individual-letter-square'>{textInput?.substring(1,2)}</div>
            <div id="swr3" className='individual-letter-square'>{textInput?.substring(2,3)}</div>
            <div id="swr4" className='individual-letter-square'>{textInput?.substring(3,4)}</div>
            <div id="swr5" className='rightmost-square individual-letter-square'>{textInput?.substring(4,5)}</div>
        </div>
    )
}


///Does yellow, but nothing else
///First letter always changes