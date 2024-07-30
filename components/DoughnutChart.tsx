"use client"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {

    const data = {
        datasets: [{
            label: 'Banks',
            data: [1250, 2599, 6000],
            backgroundColor: ['#4caf50', '#ff9800', '#f44336'],
            hoverBackgroundColor: ['#45a049', '#ff5722', '#f44336'],
        }],
        labels: ['Equity', 'KCB', 'Cooperative']
    }
  return <Doughnut 
  data={ data }
  options={{ 
    cutout: '60%',
    plugins: {
        legend: {
            display: false,
        }
    }
   }}
   />
}

export default DoughnutChart