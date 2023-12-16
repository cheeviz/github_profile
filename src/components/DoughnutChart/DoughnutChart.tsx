import React from "react";
import { Doughnut } from "react-chartjs-2";

interface DoughnutChartProps {
  mostLanguages?: { [key: string]: number };
}

export function DoughnutChart({ mostLanguages = {} }: DoughnutChartProps) {
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 1,
    plugins: {
      legend: {
        labels: {
          color: 'white'
        }
      }
    }
  };
  const chartData = {
    labels: Object.keys(mostLanguages),
    datasets: [
      {
        data: Object.values(mostLanguages),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4CAF50",
          "#FF5733",
          "#8E44AD",
          "#3498DB",
        ],
      },
    ],
  };

  return <Doughnut data={chartData} options={chartOptions} />;
}
