import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Import your SVG files
import { ReactComponent as Icon } from '../assest/14.svg';  // Example SVG icon
import './ChartSection.css';  // Assuming you have CSS to style the layout

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ChartSection = () => {
  // Chart Data
  const data = {
    labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
    datasets: [
      {
        label: 'Investment Growth',
        data: [1, 2.5, 5, 4, 6.5, 7],
        fill: true,
        backgroundColor: 'rgba(0, 191, 166, 0.2)',  // Transparent green fill
        borderColor: '#00bfa6',  // Line color
        tension: 0.4,  // Smooth curve
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,  // Hide legend
      },
      tooltip: {
        enabled: true,  // Show tooltip
      },
    },
    scales: {
      x: {
        grid: {
          display: false,  // Hide x-axis grid lines
        },
      },
      y: {
        grid: {
          drawBorder: false,  // Remove y-axis line
        },
        beginAtZero: true,  // Start y-axis at zero
      },
    },
  };

  return (
    <div className="chart-section">
      <div className="info-section">
        {/* Left side: Text and SVG */}
        <Icon className="info-icon" />  {/* SVG icon */}
        <h2>$7M+ paid out to investors</h2>
        <p>
          Next Invest has already paid out over $7M in cash returns to investors.
          Earn potential cash payments through unique revenue-share and debt financing investments.
        </p>
      </div>

      <div className="chart-container">
        {/* Right side: Line Chart */}
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default ChartSection;
