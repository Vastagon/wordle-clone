import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


export default function WinScreen({heightScoreValues}){

    function refreshPage(){
        window.location.reload();
    }

    return(
        <div className="win-screen">
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
