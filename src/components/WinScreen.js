import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


export default function WinScreen({heightScoreValues}){

    function refreshPage(){
        window.location.reload();
    }

    return(
        <div className="win-screen">
            {/* <div className="one-win win-segment">
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
            </div> */}

            <Bar 
                data={{
                    labels: ["Line 1 wins", "Line 2 wins", "Line 3 wins", "Line 4 wins", "Line 5 wins", "Line 6 wins"],
                    datasets:[{
                        label: "Total Wins",
                        data: heightScoreValues,
                        backgroundColor: "#F2AA4CFF",
                    }],
                }}
                options={{
                    scales: {
                        x:{
                            grid: {
                                display: false
                            }
                        },
                        y:{
                            grid: {
                                display: false
                            }
                        }
                    },
                    indexAxis: 'y',
                    maintainAspectRatio: false
                }}

            />

            <button className="refresh-button" type="button" onClick={refreshPage}>Play Again</button>
        </div>
    )
}
                    // 
