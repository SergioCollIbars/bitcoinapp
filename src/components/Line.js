import React from 'react';
import { Line } from 'react-chartjs-2'; /* Need to be instaled */


const data = {

    labels: ['2019', '2020', '2021'],
    datasets: [
        {
            label: 'Dataset of Months',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};

function Plot(props) {
    return (
        <div>
            <h2>Line Chart</h2>
            <Line data={data} />
        </div>
    );
}
export default Plot;