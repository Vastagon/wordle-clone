

export default function WinScreen({heightScoreValues}){

    function refreshPage(){
        window.location.reload();
    }

    return(
        <div className="win-screen">
            <div className="one-win win-segment">
                <p>Line 1 wins: {heightScoreValues[0]}</p>
            </div>
            <div className="one-win win-segment">
                <p>Line 2 wins: {heightScoreValues[1]}</p>
            </div>
            <div className="one-win win-segment">
                <p>Line 3 wins: {heightScoreValues[2]}</p>
            </div>
            <div className="one-win win-segment">
                <p>Line 4 wins: {heightScoreValues[3]}</p>
            </div>
            <div className="one-win win-segment">
                <p>Line 5 wins: {heightScoreValues[4]}</p>
            </div>
            <div className="one-win win-segment">
                <p>Line 6 wins: {heightScoreValues[5]}</p>
            </div>

            <button className="refresh-button" type="button" onClick={refreshPage}>Play Again</button>
        </div>
    )
}