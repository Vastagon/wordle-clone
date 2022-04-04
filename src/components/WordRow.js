

export default function WordRow({letterPositions, textInput}){

    return(
        <div className='word-row'>
            <div id="s1" className='individual-letter-square'>{textInput?.substring(0,1)}</div>
            <div id="s2" className='individual-letter-square'>{textInput?.substring(1,2)}</div>
            <div id="s3" className='individual-letter-square'>{textInput?.substring(2,3)}</div>
            <div id="s4" className='individual-letter-square'>{textInput?.substring(3,4)}</div>
            <div id="s5" className='rightmost-square individual-letter-square'>{textInput?.substring(4,5)}</div>
        </div>
    )
}