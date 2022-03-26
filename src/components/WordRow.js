

export default function WordRow({letterPositions, previousTries}){
    console.log(previousTries)
    for(let i = 0; i < letterPositions?.length; i++){
        if(i === 0){
            document.getElementById('s1').style.backgroundColor = "green"
        }
        if(i === 1){
            document.getElementById('s2').style.backgroundColor = "green"
        }
        if(i === 2){
            document.getElementById('s3').style.backgroundColor = "green"
        }
        if(i === 3){
            document.getElementById('s4').style.backgroundColor = "green"
        }
        if(i === 4){
            document.getElementById('s5').style.backgroundColor = "green"
        }
    }


    return(
        <div className='word-row'>
            <div id="s1" className='individual-letter-square'>{previousTries?.substring(0,1)}</div>
            <div id="s2" className='individual-letter-square'>{previousTries?.substring(1,2)}</div>
            <div id="s3" className='individual-letter-square'>{previousTries?.substring(2,3)}</div>
            <div id="s4" className='individual-letter-square'>{previousTries?.substring(3,4)}</div>
            <div id="s5" className='individual-letter-square'>{previousTries?.substring(4,5)}</div>
        </div>
    )
}